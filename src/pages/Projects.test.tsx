import { render, screen } from '@testing-library/react'

import projects from 'data/projects'
import { Projects } from 'pages/Projects'

test('renders Resources', () => {
  render(<Projects projects={projects} />)
  for (const proj of projects) {
    const title = screen.getByText(proj.title)
    expect(title).toBeInTheDocument()
    const description = screen.getByText(proj.description)
    expect(description).toBeInTheDocument()
  }
})
