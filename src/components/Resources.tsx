import { getBgClass } from 'components/Utils'
import { Resources as Model } from 'model'

export function Resources ({ references }: { references: Model[] }): JSX.Element {
  return (
    <>
      <section>
        <h1>Resources</h1>
        {references.map((reference, idx) => (
          <div key={idx} className={getBgClass(idx)}>
            <div className="card-header">
              <a href={reference.url}>{reference.title}</a>
            </div>
            <div className="card-body">
              <p>{reference.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
