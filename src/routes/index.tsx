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
import { AssetWall } from 'components/AssetWall'

import resources from 'data/resources'
import identities from 'data/identities'
import projects from 'data/projects'
import publications from 'data/publications'
import talks from 'data/talks'
import { values, inspirationalQuotes } from 'data/engineeringPhilosophy'
import { summary, education, workExperience } from 'data/cv'
import { contact } from 'data/contact'
import { Resources } from 'components/Resources'
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
    element: <Cv summary={summary} education={education} workExperience={workExperience}/>
  },
  {
    path: '/id',
    element: <Identity identities={identities}/>
  },
  {
    path: '/publications',
    element: <Publications publications={publications}/>
  },
  {
    path: '/projects',
    element: <Projects projects={projects}/>
  },
  {
    path: '/talks',
    element: <Talks talks={talks}/>
  },
  {
    path: '/contact',
    element: <Contact contact={contact}/>
  },
  {
    path: '/engineering-philosophy',
    element: <EngineeringPhilosophy values={values} quotes={inspirationalQuotes}/>
  },
  {
    path: '/asset-wall',
    element: <AssetWall />
  },
  {
    path: '/resources',
    element: <Resources references={resources}/>
  }

])
