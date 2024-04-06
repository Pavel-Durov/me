import { Contact as Model } from 'model';

export function Contact({ contact }: { contact: Model }): JSX.Element {
  return (
    <section className="kimchi-page">
      <div className="kimchi-h1">{contact.title}</div>
      <div className="jumbotron">
        <p>{contact.contactMessage}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href={'mailto:' + contact.email} role="button">
            Send me an email
          </a>
        </p>
      </div>

      <section>
        <div className="m-2">
          <a className="btn btn-large btn-primary" href={contact.pgpPublicKey}>
            Download PGP Key
          </a>
        </div>
        <code>{contact.pgpKey}</code>
      </section>
    </section>
  );
}
