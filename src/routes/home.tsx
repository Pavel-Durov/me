import Profile from '../assets/profile.png'
import identities from '../data/identities'

export function Home (): JSX.Element {
  return (
    <div className="container tab-content">
      <div
        className="tab-pane active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <section className="container m-5">
          <img src={Profile} width="100" className="m-5" />

          <p>
            I have always been curious and fascinated by the world inner
            workings and design. I am a software engineer with experience
            developing and leading projects from scratch to enterprise products.
            My main technical interests are programming languages structure,
            distributed systems, Linux and open source.
          </p>
        </section>

        <br />

        <section>
          <h2>Identities</h2>

          <ul className="list-group">
            {identities.map((identity, idx) => (
              <li key={idx} className="list-group-item">
                <a href={identity.url}>{identity.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
