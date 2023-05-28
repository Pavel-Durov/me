import { Education, WorkExperience } from 'model'

export function Cv ({ summary, education, workExperience }:
{ summary: string, education: Education[], workExperience: WorkExperience[] }): JSX.Element {
  return (
    <>
      <div id="cv" role="tabpanel">
        <div className='kimchi-h1'>Summary</div>
        <p className='m-2'> {summary}</p>

        <div className='kimchi-h1' id="education">Education</div>

        <div className="table table-hover m-2">
          {education.map((edu, idx) => (
            <div key={idx}> - {edu.title}</div>
          ))}
        </div>

        <div className='kimchi-h1'>Experience</div>
        <div>
          {workExperience.map((exp, idx) => (
            <div key={idx}>
              <div>
                  <div className='kimchi-h1'>
                    {exp.company} {'>'} {exp.title}. {exp.date}
                  </div>
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
