
export function Cv (): JSX.Element {
  return (
    <>
    <div className="container" id="cv" role="tabpanel" aria-labelledby="cv-tab">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2>Summary</h2>
            </div>
            <p> I am an autodidact full-stack software engineer experienced in developing and leading projects from
              scratch to enterprise product on various environments. I am a quick learner with a passion for software
              internals, technology and design. I contribute to open-source projects and learn new technologies and
              theoretical fields in my spare time. My main technical interests are Programming Languages, Linux,
              Functional Programming, distributed systems and platform engineering.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="education">Education</h2>
            </div>
            <div>
              <table className="table table-hover">
                {/* <thead> */}
                  <tr>
                    <th scope="col">Sela College, Israel - Software development - 2013 - 2014 - Graduated with honours
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">
                      Open University, Israel - Computer Science - 2013 – 2016
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">
                      Birkbeck, the University of London, UK - BSc (Hons) in Computing - 2018 –2022
                    </th>
                  </tr>
                  {/* </tbody> */}
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="tables">Education</h2>
            </div>
            <table className="table table-hover">
              {/* <thead> */}
                <th>
                  <h3>nate (UK/US) 👉 Tech Lead, CTO, Principle Engineer. Jan 2019 - Current</h3>
                </th>
                <tr>
                  <td>
                    <p>
                      Joined as a Software Engineer and naturally progressed to Tech Lead, CTO, and Principle Engineer.
                      My
                      role grew alongside the company. I built an engineering function of more than 30 engineers from
                      scratch while aligning technical deliveries to company objectives. This role taught me a lot about
                      data science, engineering practices, leadership, business, management and finance. My current
                      position as a technical leader includes mentorship and consultancy with expectations of setting
                      technical and architectural direction, technology evaluation, and applied research.

                    </p>
                    <p>
                      👩‍💻TypeScript, Python, Go, Bash, Terraform, AWS, MongoDB, PostgreSQL, Kubernetes, Docker,
                      Traefik, Git, CircleCi and more...
                    </p>
                  </td>
                </tr>

                <th>
                  <h3>Starcount (UK) 👉 Backend Engineer. Aug 2018 - Jan 2019</h3>
                </th>
                <tr>
                  <td>
                    <p>Working as a backend engineer alongside to data engineering team on data-driven applications.</p>
                    <p>👩‍💻JS/TS, Node, KoaJs, ES6/7, Lodash, PostgreSQL, AWS, SQS, Athena, Docker, Circleci, Git,
                      Linux, Bash
                    </p>
                  </td>
                </tr>

                <th>
                  <h3>Grosvenor Systems (UK) 👉 Web Tech Lead. Dec 2017 - July 2018
                  </h3>
                </th>
                <tr>
                  <td>
                    <p>Tech lead of web development engineering team. Working on legacy system into web transformation.
                    </p>
                    <p>👩‍💻TypeScript, JavaScript, Node, Angular, Redux, Webpack, Mocha, Karma, Selenium, AWS, GCP,
                      Linux, Docker, Git </p>
                  </td>
                </tr>

                <th>
                  <h3>Scores 365 (Israel) 👉 Backend/Full Stack Developer. March 2017 - Dec 2017
                  </h3>
                </th>
                <tr>
                  <td>
                    <p>Internal tooling maintenance and web scrapers services development.</p>
                    <p>👩‍💻C#, Node, JavaScript, TypeScript, Angular, .Net Web API/MVC, AWS, Jenkins, MSSQL, Git,
                      GitHub, Assana</p>
                  </td>
                </tr>

                <th>
                  <h3>Sela Group College (Israel) 👉 Lecturer. Dec 2016 - March 2017
                  </h3>
                </th>
                <tr>
                  <td>
                    <p>Evening course lecturer - Design Patterns and Advanced Techniques
                    </p>
                  </td>
                </tr>

                <th>
                  <h3>Sela Group (Israel) 👉 Software Engineer. Oct 2014 - May 2017

                  </h3>
                </th>
                <tr>
                  <td>
                    <p>Working on various in-house and outsourced projects as a developer and tech consultant.

                    </p>
                    <p>👩‍💻Java, C#, C/C++, JS/TS, Scala, Unity, Azure, AWS, Neo4j, MongoDb, Kafka, Xamarin, Ionic,
                      iOS, Android, .Net Core, React, Git
                    </p>
                  </td>
                </tr>

                <th>
                  <h3>QIS (Israel) - Full Stack Developer 👉 Dec 2013 - Sep 2014</h3>
                </th>
                <tr>
                  <td>
                    <p>Worked on a mobile system with multiple GoPro cameras, controlled by an Android client.
                    </p>
                    <p>👩👩‍💻Java, C#, Android, .NET Web Api, MySQL
                    </p>
                  </td>
                </tr>

                {/* </tbody> */}
            </table>
          </div>
        </div>
    </div>

    </>
  )
}
