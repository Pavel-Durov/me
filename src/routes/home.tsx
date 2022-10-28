import React from 'react'
import Profile from 'assets/profile.png'
import { BROWSER_SESSION_BASED_LOADING_HOME } from 'config'
import identities from 'data/identities'

interface HomeState {
  loadProgress: number
}

export class Home extends React.Component<{}, HomeState> {
  constructor (props: {}) {
    super(props)
    let loadProgress = 0
    if (BROWSER_SESSION_BASED_LOADING_HOME) {
      const progress = sessionStorage.getItem('homeLoadProgress')
      loadProgress = progress == null ? 0 : parseInt(progress, 10)
    }
    this.state = {
      loadProgress
    }
  }

  componentDidMount (): void {
    if (this.state.loadProgress !== 100) {
      for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
          this.setState({ loadProgress: i })
          sessionStorage.setItem('homeLoadProgress', i.toString())
        }, i * 50)
      }
    }
  }

  render (): React.ReactNode {
    return (
      <div className="container tab-content">
        <div hidden={this.state.loadProgress === 100} style={{ margin: '50% 0 0 0 ' }}>
          <h5 className="mb-1">Loading...</h5>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${this.state.loadProgress}%` }}></div>
          </div>
          <div></div>
        </div>
        <section className="content" hidden={this.state.loadProgress !== 100}>
          <section className="container m-1">
            <img src={Profile} width="100" className="m-5" />
            <p>
              I am an autodidact software engineer experienced in developing and leading projects from scratch to enterprise product on various environments. My main technical interests are Programming Languages, Compilers, Linux, Distributed Systems and Software Architecture.
              I am fluent in English, Hebrew and Russian and currently learning Greek. I am a quick learner, a creative problem solver, knowledge-driven and a technology enthusiast. I learn and practice music, yoga, philosophy, gardening and meditation in my spare time. I am an optimist with a realistic point of view.
            </p>
          </section>
          <br />
          <section>
            <h2>Identities</h2>

            <ul className="list-group">
              {identities.map((identity, idx) => (
                <li key={idx} className="list-group-item">
                  <a href={identity.url}>{identity.name}</a>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    )
  }
}
