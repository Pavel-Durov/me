import { createBrowserRouter } from 'react-router-dom';

import { Error } from 'routes/error';
// Pages
import { Home } from 'pages/Home';
import { Markdown } from 'pages/Markdown/Markdown';
import { Publications } from 'pages/Publications';
import { Projects } from 'pages/Projects';
import { Talks } from 'pages/Talks';
import { Contact } from 'pages/Contact';
import { Identity } from 'pages/Identity';
import { EngineeringPhilosophy } from 'pages/EngineeringPhilosophy';
import { AssetWall } from 'pages/AssetWall';
import { Resources } from 'pages/Resources';
import { PersonalStatement } from 'pages/PersonalStatment';

import resources from 'data/resources';
import identities from 'data/identities';
import projects from 'data/projects';
import publications from 'data/publications';
import talks from 'data/talks';
import { values, inspirationalQuotes } from 'data/engineeringPhilosophy';
import { contact } from 'data/contact';
import personalStatementData from 'data/personalStatement';

import MdCv from 'data/md/cv.md';

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    _386: any;
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
    element: <Markdown getContent={() => fetch(MdCv).then((res) => res.text())} />
  },
  {
    path: '/id',
    element: <Identity identities={identities} />
  },
  {
    path: '/publications',
    element: <Publications publications={publications} />
  },
  {
    path: '/projects',
    element: <Projects projects={projects} />
  },
  {
    path: '/talks',
    element: <Talks talks={talks} />
  },
  {
    path: '/contact',
    element: <Contact contact={contact} />
  },
  {
    path: '/engineering-philosophy',
    element: <EngineeringPhilosophy values={values} quotes={inspirationalQuotes} />
  },
  {
    path: '/asset-wall',
    element: <AssetWall />
  },
  {
    path: '/resources',
    element: <Resources resources={resources} />
  },
  {
    path: '/personal-statement',
    element: <PersonalStatement title={personalStatementData.title} content={personalStatementData.content} />
  }
]);
