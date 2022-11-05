import { Publication } from 'model'
import { getBgClass } from 'components/Utils'

export function Publications ({ publications }: { publications: Publication[] }): JSX.Element {
  return (
    <>
      <section className="container">
        <h1>Publications</h1>
        {publications.map((publication, idx) => (
          <div key={idx} className={getBgClass(idx)}>
            <div className="card-header">
              <a href={publication.url}>{publication.title}</a>
            </div>
            <div className="card-body">
              <p>{publication.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
