import contact from 'data/contact'

export function Contact (): JSX.Element {
  return (

    <div>
        <div className="page-header">
          <h1 id="containers">{contact.title}</h1>
        </div>
        <div className="bs-component">
          <div className="jumbotron">
            <p>{contact.contactMessage}</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href={'mailto:' + contact.email} role="button">
                Send me an email
              </a>
            </p>
          </div>
        </div>
      <section>
        <div className="m-2">
          <a className="btn btn-large btn-primary" href={contact.pgpPublicKey}>Download PGP Key</a>
        </div>
        <code>
          {contact.pgpKey}
        </code>
      </section>
    </div>
  )
}
