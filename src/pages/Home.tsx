import React from 'react';

import MovingHead from 'components/MovingHead/MovingHead';

export class Home extends React.Component<{}, { text: string }, {}> {
  async sleep(sec: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), sec * 1000);
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <div style={{ textAlign: 'center', padding: 10 }}>
          <MovingHead />
        </div>
        <p>You have landed at the home page of Pavel Durov.</p>
        <br />
        <p className="prevent-select">
          I am a human, genuinely interested in technology, philosophy, music, gardening, running, hiking, bouldering
          and planet earth. I live with my wife and two cats in London, UK. My technical interests are Programming
          Languages, Open Source, Linux, Distributed Systems and Software Architecture. But you will probably find me
          doing other stuff most of the time. I like learning. Most of my knowledge comes from books, other humans and
          life experiences. I am fluent in English, Hebrew and Russian and currently learning Greek.
        </p>
      </div>
    );
  }
}
