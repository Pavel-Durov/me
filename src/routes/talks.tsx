import React from 'react'
import talks from '../data/talks'

export function Talks (): JSX.Element {
  return (
    <>
    <section className="container">
        <h1>Talks</h1>
        { talks.map((talk, idx) => (
          <div key={idx} className="card">
            <div className="card-header">{talk.title}</div>
            <div className="card-body">
              <p>{talk.description}</p>
              <a href={talk.url}>{talk.url}</a>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
