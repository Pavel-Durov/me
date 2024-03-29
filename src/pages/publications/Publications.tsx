import { Publication } from 'model';

export function Publications({ publications }: { publications: Publication[] }): JSX.Element {
  return (
    <section className="kimchi-page">
      <div className="kimchi-h1">Texts</div>
      {publications.map((pub, idx) => (
        <div className="card" key={`id-${idx}`}>
          <div className="card-header">
            <a href={pub.url}>{pub.title}</a>
          </div>
          <div className="card-body">
            <p>{pub.description}</p>
            <p> - {pub.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
