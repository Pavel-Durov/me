import { getBgClass } from 'components/Utils'
import { Reference } from 'model'

export function Resources ({ resources }: { resources: Reference[] }): JSX.Element {
  return (
    <>
      <section>
        <h1>Resources</h1>
        {resources.map((resource, idx) => (
          <div key={idx} className={getBgClass(idx)}>
            <div className="card-header">
              <a href={resource.url}>{resource.title}</a>
            </div>
            <div className="card-body">
              <p>{resource.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
