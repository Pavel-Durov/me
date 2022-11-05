import 'App.css'

export function NavBar (): JSX.Element {
  return (
    <>
      <div className="navbar navbar-expand-sm fixed-top navbar-dark bg-primary text-center">
        <mark>[PAVEL DUROV]</mark>
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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="themes">
                More
                <span className="caret"></span>
              </a>
              <div className="dropdown-menu" aria-labelledby="themes">
                <a href={'/contact'} className="dropdown-item">
                  Contact
                </a>
                <a href={'/projects'} className="dropdown-item">
                  Projects
                </a>
                <a href={'/talks'} className="dropdown-item">
                  Talks
                </a>
                <a href={'./cv'} className="dropdown-item">
                  Cv
                </a>
                <a href={'./engineering-philosophy'} className="dropdown-item">
                  Engineering Philosophy
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
