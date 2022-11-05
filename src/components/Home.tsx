import React from 'react'
import Profile from 'assets/profile.png'
export class Home extends React.Component {
  render (): React.ReactNode {
    return (
      <div className="container tab-content">

        <section className="content">
          <section className="container m-1">
            <img src={Profile} width="100" className="m-5" />
            <p>
              You have landed at the home page of Pavel Durov.
            </p>
            <p>
            I am a human, genuinely interested in technology, philosophy, music, gardening, running, bouldering and planet earth.
            I live with my wife and two cats in London, UK. My technical interests are Programming Languages, Open Source, Linux, Distributed Systems and Software Architecture. But you will probably find me doing other stuff most of the time.
            I like learning. Most of my knowledge comes from books, other humans and life experiences.
            I am fluent in English, Hebrew and Russian and currently learning Greek.
            </p>
          </section>
          <br />
        </section>
      </div>
    )
  }
}