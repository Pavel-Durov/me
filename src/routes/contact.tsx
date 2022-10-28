import contact from 'data/contact'

export function Contact (): JSX.Element {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-12">
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
              <a href={contact.pgpPublicKey}>PGP Key</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
