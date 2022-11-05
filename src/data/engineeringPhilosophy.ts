
import { PhilosophyValue } from 'model'

export const values: PhilosophyValue[] = [
  {
    value: 'Build solutions that are easy to understand and not easy to make',
    sub: [
      'Make simple code that is easy to read and understand',
      'Avoid hiding the cost/impact of the code and its complexity',
      'Avoid unnecessary state - stateless applications are easier to test and reason about',
      'Consistency over correctness - it is easier to reason about a consistent system'
    ]
  },
  {
    value: 'Avoid premature optimizations',
    sub: [
      'Do not optimize for the unknown',
      'Forget about small efficiencies, say about 97% of the time'
    ]
  },
  {
    value: 'Let the code speak for itself',
    sub: [
      'Avoid redundant comments and documentation',
      'Avoid unnecessary abstractions',
      'Keep tests and descriptive functions as living documentation'
    ]
  },
  {
    value: 'Develop iteratively and incrementally',
    sub: [
      'Embrace tests and stakeholders feedback',
      'Avoid huge deliveries - break it down into smaller chunks',
      'Deliveries should deliver business value'
    ]
  },
  {
    value: 'Always look forward',
    sub: [
      'Embrace feedback from within and outside of your team and learn from it',
      'Code should evolve, do not be sentimental about it',
      'Leave your ego at the door',
      'Focus on what improvements can be made instead of what went wrong'
    ]
  }
]

export const inspirationalQuotes = [
  '"Don\'t cling to a mistake because you spent so much time making it." - Aubrey de Grey',
  '"Premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.” — Donald E. Knuth',
  '"I don\'t trust anything until it runs… In fact, I don\'t trust anything until it runs twice." - Andrew Gelman',
  '"Failure is expected, failure is not an odd case. Design systems that help you identify failure. Design systems that can recover from failure." - JBD',
  '"Everything should be made as simple as possible, but not simpler." - Albert Einstein'
]
