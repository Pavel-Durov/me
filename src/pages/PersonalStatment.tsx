import { PersonalStatement as model } from 'model';

export function PersonalStatement({ title, content }: model): JSX.Element {
  return (
    <section className="kimchi-page">
      <div className="kimchi-h1">{title}</div>

      <div style={{ marginTop: 10 }}>
        {content?.split('<br/>').map((val, idx) => (
          <div key={idx}>
            <p key={idx}>{val}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
