import React from 'react'

import { RouterProvider } from 'react-router-dom'
import 'App.css'

import { NavBar } from 'components/NavBar'

import 'css/bootstrap.css'
import { router } from 'routes'
import { ACCELERATED_LOADING, BROWSER_SESSION_BASED_LOADING_HOME, LOADING_SPEED_FACTOR } from 'config'

declare global {
  interface Window {
    _386: any
  }
}
interface HomeState {
  loadProgress: number
  loadFactor: number
}

export default class App extends React.Component<{}, HomeState> {
  constructor (props: {}) {
    super(props)
    let loadProgress = 0
    let loadFactor = LOADING_SPEED_FACTOR
    const progress = sessionStorage.getItem('homeLoadProgress')
    if (BROWSER_SESSION_BASED_LOADING_HOME) {
      loadProgress = progress == null ? 0 : parseInt(progress, 10)
      loadFactor = LOADING_SPEED_FACTOR
    }
    if (progress != null && ACCELERATED_LOADING) {
      loadFactor = LOADING_SPEED_FACTOR / 4
    }
    this.state = {
      loadProgress,
      loadFactor
    }
  }

  componentDidMount (): void {
    window.addEventListener('load', () => {
      window._386.magicCursor()
      window._386.scrollLock()
    })
    if (this.state.loadProgress !== 100) {
      for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
          this.setState({ loadProgress: i })
          sessionStorage.setItem('homeLoadProgress', i.toString())
        }, i * this.state.loadFactor)
      }
    }
  }

  render (): React.ReactNode {
    return (
      <div>
        <div hidden={this.state.loadProgress === 100} style={{ margin: '10%' }}>
          <h5 className="mb-1">Loading...</h5>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${this.state.loadProgress}%` }}></div>
          </div>
          <div></div>
        </div>

        <div className="App bootstra-enable-cursor container col-md-8 col-sm-11 text-left" hidden={this.state.loadProgress !== 100} >
          <NavBar />
          <RouterProvider router={router} />
          <footer className='fixed-bottom'>

            <p className="text-center">
              <span className='strikethrough'>©</span>
              <a href="https://unlicense.org/" style={{ marginLeft: 10, marginRight: 10 }}>UNLICENSE</a>
              <span>1990 - {(new Date()).getFullYear()}</span>
              </p>
          </footer>
        </div>
      </div>
    )
  }
}
