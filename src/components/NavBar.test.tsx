import { render, screen } from '@testing-library/react'
import { NavBar } from 'components/NavBar'

test('renders NavBar', () => {
  render(<NavBar />)
  const linkElements = screen.getAllByRole('link')
  for (const link of linkElements) {
    expect(link.getAttribute('href')).toBeDefined()
    expect(link.textContent).toBeDefined()
    expect(link).toBeInTheDocument()
  }
})
