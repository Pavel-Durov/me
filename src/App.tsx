import React from 'react'

import { RouterProvider } from 'react-router-dom'
import './App.css'

import { NavBar } from './NavBar'

import './js/bootstrap.bundle'

import './css/bootstrap.css'
import { router } from './routes'
declare global {
  interface Window {
    _386: any
  }
}

export default class App extends React.Component {
  componentDidMount (): void {
    window.addEventListener('load', () => {
      window._386.magicCursor()
      window._386.scrollLock()
    })
  }

  render (): React.ReactNode {
    return (
      <div>
        <div className="App bootstra-enable-cursor container">
          <NavBar />
          <RouterProvider router={router} />
        </div>
      </div>
    )
  }
}
