import { render, screen } from '@testing-library/react';

import { Markdown } from 'pages/Markdown/Markdown';

test('expected to render h2', async () => {
  render(<Markdown getContent={() => Promise.resolve('## Hello World')} />);
  const elem = await screen.findByText('Hello World');
  expect(elem).toBeInTheDocument();
});

test('expected to render h1', async () => {
  render(<Markdown getContent={() => Promise.resolve('## Hello Moto')} />);
  const elem = await screen.findByText('Hello Moto');
  expect(elem).toBeInTheDocument();
});
