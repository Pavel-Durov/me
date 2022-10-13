export function Home() {
  return (
    
    <div className="container tab-content">
        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <img src="./assets/profile.png" width="100" />
          <br />
          <section className="mt-2" id="bio">
            <p>
              I've always been curious and fascinated by the world's inner workings and design.
              I am a software engineer with experience developing and leading projects from scratch to enterprise products.
              My main technical interests are programming languages structure, distributed systems, Linux and open source.
            </p>

          </section>
          <section>
            <h2>Identities</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="https://github.com/Pavel-Durov">Github</a>
              </li>
              <li className="list-group-item">
                <a href="https://twitter.com/pav3ldurov">Twitter</a>
              </li>
              <li className="list-group-item">
                <a href="https://www.linkedin.com/in/paveldurov/">LinkedIn</a>
              </li>
              <li className="list-group-item">
                <a href="https://stackoverflow.com/users/5321395/pavel-durov">Stackoverflow</a>
              </li>
              <li className="list-group-item">
                <a href="https://iamkimchi.hashnode.dev/">Hashnote</a>
              </li>
              <li className="list-group-item">
                <a href="https://medium.com/@iamkimchi">Medium</a>
              </li>
            </ul>
          </section>

        </div>
      </div>

  );
}