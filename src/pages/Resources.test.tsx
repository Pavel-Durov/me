import { render, screen } from '@testing-library/react'
import { Resources } from 'pages/Resources'

import resources from 'data/resources'

test('renders Resources', () => {
  render(<Resources resources={resources} />)
  for (const resource of resources) {
    const p = screen.getByText(resource.title)
    expect(p).toBeInTheDocument()
    expect(p.nextElementSibling?.textContent).toBe(`[${resource.tags.join(', ')}]`)
  }
})
