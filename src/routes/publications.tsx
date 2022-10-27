import publications from '../data/publications'
import { getBgClass } from './utils'

// TODO: integrate with hashnote RSS https://iamkimchi.hashnode.dev/rss.xml
export function Publications (): JSX.Element {
  return (
    <>
      <section className="container col-lg-6 p-2">
        <h1>Publications</h1>
          {
            publications.map((publication, idx) => (
              <div key={idx} className={getBgClass(idx)}>
                <div className="card-header">{publication.title}</div>
                <div className="card-body">
                  <p>{publication.description}</p>
                  <a href={publication.url}>{publication.url}</a>
                </div>
              </div>
            ))
          }
      </section>
    </>
  )
}
