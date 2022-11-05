import { createBrowserRouter } from 'react-router-dom'

import { Home } from 'components/Home'
import { Error } from 'routes/error'
import { Cv } from 'components/Cv'
import { Publications } from 'components/Publications'
import { Projects } from 'components/Projects'
import { Talks } from 'components/Talks'
import { Contact } from 'components/Contact'
import { Identity } from 'components/Identity'
import { EngineeringPhilosophy } from 'components/EngineeringPhilosophy'

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
