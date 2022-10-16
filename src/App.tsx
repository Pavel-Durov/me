import React from 'react'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'

import { NavBar } from './NavBar'

import './js/bootstrap.bundle'

import './css/bootstrap.css'
import { Home } from './routes/home'
import { Error } from './routes/error'
import { Cv } from './routes/cv'
import { Publications } from './routes/publications'
import { Projects } from './routes/projects'
import { Talks } from './routes/talks'
import { Contact } from './routes/contact'

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

export default class App extends React.Component {
  componentDidMount (): void {
    console.log('componentDidMount')
  }

  render (): React.ReactNode {
    return (
      <div>
        <div className="App bootstra-enable-cursor">
         <section className="container">
            <NavBar />
         </section>
          <section className="row"></section>
          <section className="container tab-content">
            <RouterProvider router={router} />
          </section>
        </div>
      </div>
    )
  }
}
