import { PhilosophyValue } from 'model';
export function EngineeringPhilosophy({
  values,
  quotes
}: { values: PhilosophyValue[]; quotes: string[] }): JSX.Element {
  return (
    <>
      <div>
        <div className="kimchi-h1">Engineering Philosophy</div>

        <p className="m-2">
          {' '}
          Each value should be considered in its context + apply your judgment - *you are a human, not a machine*
        </p>
        {values.map((val, idx) => (
          <div key={idx}>
            <span className="text-primary">{val.value}</span>
            <div className="table table-hover m-2">
              {val.sub.map((sub, idx) => (
                <div key={idx}> - {sub}</div>
              ))}
            </div>
          </div>
        ))}

        <div className="kimchi-h1">Inspirational Quotes</div>

        <div className="table table-hover m-2">
          {quotes.map((quote, idx) => (
            <div key={idx}> - {quote}</div>
          ))}
        </div>
      </div>
    </>
  );
}
