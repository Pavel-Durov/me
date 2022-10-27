import React from 'react'
import projects from '../data/projects'
import { getBgClass } from './utils'
export function Projects (): JSX.Element {
  return (
    <>
      <section className="container col-lg-6 p-2">
        <h1>Projects</h1>
        {projects.map((proj, idx) => (
          <div key={idx} className={getBgClass(idx)}>
            <div className="card-header">{proj.title}</div>
            <div className="card-body">
              <p>{proj.description}</p>
              <a href={proj.url}>{proj.url}</a>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
