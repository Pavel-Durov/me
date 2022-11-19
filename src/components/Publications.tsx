import { Publication } from 'model'

export function Publications ({ publications }: { publications: Publication[] }): JSX.Element {
  return (
    <>
      <section>
        <div className='kimchi-h1'>Publications</div>
         {publications.map((pub, idx) => (
        <div key={idx} className="card" >
          <div className='kimchi-h1'>{pub.date}</div>
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
