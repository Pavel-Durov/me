import React from 'react'
import projects from 'data/projects'
import { getBgClass } from 'routes/utils'
export function Projects (): JSX.Element {
  return (
    <>
      <section className="container">
        <h1>Projects</h1>
        {projects.map((project, idx) => (
          <div key={idx} className={getBgClass(idx)}>
            <div className="card-header">
              <a href={project.url}>{project.title}</a>
            </div>
            <div className="card-body">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
