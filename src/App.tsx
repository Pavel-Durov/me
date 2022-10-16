import React from 'react'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'

import { NavBar } from './NavBar'

import './js/bootstrap.bundle'

import './css/bootstrap.css'
import { Home } from './routes/Home'
import { Error } from './routes/Error'
import { Cv } from './routes/Cv'
import { Publications } from './routes/Publications'
import { Projects } from './routes/Projects'
import { Talks } from './routes/Talks'
import { Contact } from './routes/Contact'

/**
 * https://github.com/remix-run/react-router/blob/main/docs/start/tutorial.md
 */
const router = createBrowserRouter([
  {
    path: '/*',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/cv',
    element: <Cv />
  },
  {
    path: '/publications',
    element: <Publications />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/talks',
    element: <Talks />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

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
