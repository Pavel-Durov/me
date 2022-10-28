import React from 'react'
import Profile from 'assets/profile.png'
import identities from 'data/identities'

export class Home extends React.Component {
  render (): React.ReactNode {
    return (
      <div className="container tab-content">

        <section className="content">
          <section className="container m-1">
            <img src={Profile} width="100" className="m-5" />
            <p>
              I am an autodidact software engineer experienced in developing and leading projects from scratch to enterprise product on various environments. My main technical interests are Programming Languages, Compilers, Linux, Distributed Systems and Software Architecture.
              I am fluent in English, Hebrew and Russian and currently learning Greek. I am a quick learner, a creative problem solver, knowledge-driven and a technology enthusiast. I learn and practice music, yoga, philosophy, gardening and meditation in my spare time. I am an optimist with a realistic point of view.
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
        </section>
      </div>
    )
  }
}
