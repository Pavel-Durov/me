import { summary, education, workExperience } from '../data/cv'
export function Cv (): JSX.Element {
  return (
    <>
      <div id="cv" role="tabpanel" className="container col-lg-6 p-2">
        <h1>Summary</h1>
        <p> {summary}</p>

        <h1 id="education">Education</h1>

        <div className="table table-hover">
          {education.map((edu, idx) => (
            <div key={idx}>{edu.title}</div>
          ))}
        </div>

        <h1 id="tables">Experience</h1>
        <div className="table table-hover">
          {workExperience.map((exp, idx) => (
            <div key={idx}>
              <div>
                <h2>
                  {exp.company} 👉 {exp.title}. {exp.date}
                </h2>
              </div>
              <div>
                <div>
                  <p>{exp.description}</p>
                  <p>{exp.techStack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
