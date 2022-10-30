import React from 'react'
import identities from 'data/identities'

export class Identity extends React.Component {
  render (): React.ReactNode {
    return (
      <section>
        <h2>Identity</h2>

        <ul className="list-group">
          {identities.map((identity, idx) => (
            <li key={idx} className="list-group-item">
              <a href={identity.url}>{identity.name}</a>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
