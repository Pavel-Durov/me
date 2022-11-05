import { summary, education, workExperience } from 'data/cv'
export function Cv (): JSX.Element {
  return (
    <>
      <div id="cv" role="tabpanel">
        <h1>Summary</h1>
        <p className='m-2'> {summary}</p>

        <h1 id="education">Education</h1>

        <div className="table table-hover m-2">
          {education.map((edu, idx) => (
            <div key={idx}>{edu.title}</div>
          ))}
        </div>

        <h1>Experience</h1>
        <div>
          {workExperience.map((exp, idx) => (
            <div key={idx}>
              <div>
                <h2>
                  {exp.company} 👉 {exp.title}. {exp.date}
                </h2>
              </div>
              <div className='m-2'>
                  <p>{exp.description}</p>
                  <p>{exp.techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
