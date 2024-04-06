import { Talk } from 'model';

export function Talks({ talks }: { talks: Talk[] }): JSX.Element {
  return (
    <section className="kimchi-page">
      <div className="kimchi-h1">Talks</div>
      {talks.map((talk, idx) => (
        <div key={idx} className="card">
          <div className="kimchi-h1">{talk.date}</div>
          <div className="card-header">
            <a href={talk.url}>{talk.title}</a>
          </div>
          <div className="card-body">{talk.description}</div>
        </div>
      ))}
    </section>
  );
}
