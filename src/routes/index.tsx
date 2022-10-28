import { createBrowserRouter } from 'react-router-dom'

import { Home } from 'routes/Home'
import { Error } from 'routes/Error'
import { Cv } from 'routes/Cv'
import { Publications } from 'routes/Publications'
import { Projects } from 'routes/Projects'
import { Talks } from 'routes/Talks'
import { Contact } from 'routes/Contact'

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
