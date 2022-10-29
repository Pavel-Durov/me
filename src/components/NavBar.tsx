import 'App.css'

export function NavBar (): JSX.Element {
  return (
    <>
      <div className="navbar navbar-expand-xl fixed-top navbar-dark bg-primary">
        <a href="../" className="navbar-brand">
          [Pavel Durov]
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href={'/'} className="nav-link">
                home
              </a>
            </li>
            <li className="nav-item">
              <a href={'/publications'} className="nav-link">
                {' '}
                publications
              </a>
            </li>
            <li className="nav-item">
              <a href={'./cv'} className="nav-link">
                cv
              </a>
            </li>
            <li className="nav-item">
              <a href={'/talks'} className="nav-link">
                talks
              </a>
            </li>
            <li className="nav-item">
              <a href={'/projects'} className="nav-link">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a href={'/contact'} className="nav-link">
                contact
              </a>
            </li>
            <li className="nav-item">
              <a href={'/misc'} className="nav-link">
                misc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
