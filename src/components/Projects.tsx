import { getBgClass } from 'components/Utils'
import { Project } from 'model'

export function Projects ({ projects }: { projects: Project[] }): JSX.Element {
  return (
    <>
      <section>
        <div className='kimchi-h1'>Projects</div>
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
