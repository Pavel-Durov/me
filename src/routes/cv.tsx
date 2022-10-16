import { summary, education, workExperience } from '../data/cv'
export function Cv (): JSX.Element {
  return (
    <>
      <div id="cv" role="tabpanel" className="container col-lg-6 p-2">
        <h2>Summary</h2>
        <p> {summary}</p>

        <h2 id="education">Education</h2>

        <table className="table table-hover">
          {education.map((edu, idx) => (
            <tr key={idx}>
              <th scope="col">{edu.title}</th>
            </tr>
          ))}
        </table>

        <h2 id="tables">Experience</h2>
        <table className="table table-hover">
          {workExperience.map((exp, idx) => (
            <div key={idx} >
              <th>
                <h3>
                  {exp.company} 👉 {exp.title}. {exp.date}
                </h3>
              </th>
              <tr>
                <td>
                  <p>{exp.description}</p>
                  <p>
                  {exp.techStack}
                  </p>
                </td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    </>
  )
}
