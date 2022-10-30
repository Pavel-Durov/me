import { createBrowserRouter } from 'react-router-dom'

import { Home } from 'routes/home'
import { Error } from 'routes/error'
import { Cv } from 'routes/cv'
import { Publications } from 'routes/publications'
import { Projects } from 'routes/projects'
import { Talks } from 'routes/talks'
import { Contact } from 'routes/contact'
import { Identity } from 'routes/identity'
import { EngineeringPhilosophy } from 'routes/engineeringPhilosophy'

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
    path: '/id',
    element: <Identity />
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
  },
  {
    path: '/engineering-philosophy',
    element: <EngineeringPhilosophy />
  }
])
