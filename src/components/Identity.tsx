import { OnlineId } from 'model'

export function Identity ({ identities }: { identities: OnlineId[] }): JSX.Element {
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
