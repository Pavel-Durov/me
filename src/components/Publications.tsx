import { Publication } from 'model'

export function Publications ({ publications }: { publications: Publication[] }): JSX.Element {
  return (
    <>
      <section>
        <h1>Publications</h1>
         {publications.map((pub, idx) => (
        <div key={idx} className="card" >
          <h2>{pub.date}</h2>
          <div className="card-header">
            <a href={pub.url}>{pub.title}</a>
          </div>
          <div className="card-body">{pub.description}</div>
        </div>
         ))}
      </section>
    </>
  )
}
