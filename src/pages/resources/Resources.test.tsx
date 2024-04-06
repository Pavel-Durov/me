import { render, screen } from '@testing-library/react';
import { Resources } from 'pages/resources/Resources';

import resources from 'data/resources';

test('renders Resources', () => {
  render(<Resources resources={resources} />);
  for (const resource of resources) {
    const p = screen.queryAllByText(resource.title);
    expect(p.length).toBeGreaterThan(0);
  }
});
