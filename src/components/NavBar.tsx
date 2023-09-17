import 'App.css';
import Profile from 'assets/head_spin_yellow_bg.gif';

export function NavBar(): JSX.Element {
  return (
    <>
      <div className="navbar navbar-expand-md fixed-top navbar-dark bg-primary">
        <img src={Profile} style={{ margin: '1px', width: 30, padding: '5px' }} alt="Spining head" />

        <mark>[P3LD3V]</mark>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href={'/'} className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href={'/publications'} className="nav-link">
                Texts
              </a>
            </li>
            <li className="nav-item">
              <a href={'/id'} className="nav-link">
                Identity
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" id="themes">
                More
                <span className="caret" />
              </a>
              <div className="dropdown-menu" aria-labelledby="themes">
                <a href={'/contact'} className="dropdown-item">
                  Contact
                </a>
                <a href={'./cv'} className="dropdown-item">
                  Cv
                </a>
                <a href={'./engineering-philosophy'} className="dropdown-item">
                  Engineering Philosophy
                </a>
                <a href={'./resources'} className="dropdown-item">
                  Resources
                </a>
                <a href={'/talks'} className="dropdown-item">
                  Talks
                </a>
                <a href={'./personal-statement'} className="dropdown-item">
                  Personal Statement
                </a>
                <a href={'/projects'} className="dropdown-item">
                  Projects
                </a>
                <div className="dropdown-divider" />
                <a href={'/'} className="dropdown-item">
                  Home
                </a>
                {/* <a href={'/asset-wall'} className="dropdown-item">
                  Asset Wall
                </a> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
