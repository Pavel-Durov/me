import 'App.css'

export function NavBar (): JSX.Element {
  return (
    <>
      <div className="navbar navbar-expand-xl fixed-top navbar-dark bg-primary text-center">
        <mark>[PAVEL DUROV]</mark>
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
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href={'/publications'} className="nav-link">
                Publications
              </a>
            </li>
            <li className="nav-item">
              <a href={'/id'} className="nav-link">
                Identity
              </a>
            </li>
            <li className="nav-item">
              <a href={'/contact'} className="nav-link">
                Contact
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="themes">
                More
                <span className="caret"></span>
              </a>
              <div className="dropdown-menu" aria-labelledby="themes">
                <a href={'/projects'} className="dropdown-item">
                  Projects
                </a>
                <a href={'/talks'} className="dropdown-item">
                  Talks
                </a>
                <a href={'./cv'} className="dropdown-item">
                  Cv
                </a>
                <div className="dropdown-divider"></div>
                <a href={'/'} className="dropdown-item">
                  Home
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
