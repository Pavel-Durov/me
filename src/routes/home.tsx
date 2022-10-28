import React from 'react'
import Profile from '../assets/profile.png'
import identities from '../data/identities'

interface HomeState {
  loadProgress: number
}

export class Home extends React.Component<{}, HomeState> {
  constructor (props: {}) {
    super(props)
    const progress = sessionStorage.getItem('homeLoadProgress')
    const loadProgress = progress == null ? 0 : parseInt(progress, 10)
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
        <div className="m-4" hidden={this.state.loadProgress === 100}>
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
              I have always been curious and fascinated by the world inner workings and design. I am a software engineer with experience developing and leading projects from
              scratch to enterprise products. My main technical interests are programming languages, distributed systems, Linux and open source.
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
