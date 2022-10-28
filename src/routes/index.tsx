import { createBrowserRouter } from 'react-router-dom'

import { Home } from './Home'
import { Error } from './Error'
import { Cv } from './Cv'
import { Publications } from './Publications'
import { Projects } from './Projects'
import { Talks } from './Talks'
import { Contact } from './Contact'

declare global {
  interface Window {
    _386: any
  }
}

/**
 * https://github.com/remix-run/react-router/blob/main/docs/start/tutorial.md
 */
export const router = createBrowserRouter([
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
