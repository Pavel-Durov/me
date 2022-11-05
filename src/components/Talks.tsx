import { Talk } from 'model'

export function Talks ({ talks }: { talks: Talk[] }): JSX.Element {
  return (
    <section>
      <h1>Talks</h1>
      {talks.map((talk, idx) => (
        <div key={idx} className="card">
          <h2>{talk.date}</h2>
          <div className="card-header">
            <a href={talk.url}>{talk.title}</a>
          </div>
          <div className="card-body">{talk.description}</div>
        </div>
      ))}
    </section>
  )
}
