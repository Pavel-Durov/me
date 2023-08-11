import { render, screen } from '@testing-library/react'
import { Publications } from 'pages/Publications'

test('renders NavBar', () => {
  render(<Publications publications={
    [
      {
        url: 'test-url-1',
        title: 'test-title-1',
        description: 'test-description-1',
        date: 'test-date-1'
      },
      {
        url: 'test-url-2',
        title: 'test-title-2',
        description: 'test-description-2',
        date: 'test-date-2'
      }
    ]
  }/>)
  for (const i of [1, 2]) {
    expect(screen.getByText(`test-title-${i}`)).toBeDefined()
    expect(screen.getByText(`test-description-${i}`)).toBeDefined()
  }
})
