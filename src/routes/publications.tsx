import publications from '../data/publications'

// function randomNumber (min: number, max: number): number {
//   return Math.random() * (max - min) + min
// }

const bgs = ['bg-primary', 'bg-success', 'bg-error', 'bg-danger', 'bg-warning', 'bg-info']

function getClass (i: number): string {
  const bg = bgs[i % bgs.length]
  // bgs[randomNumber(0, bgs.length)]
  return `card text-white bg-secondary ${bg}`
}

export function Publications (): JSX.Element {
  return (
    <>
      <section className="container col-lg-6 p-2">
        <h1>Publications</h1>
          {
            publications.map((publication, idx) => (
              <div key={idx} className={getClass(idx)}>
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
