import { Education, WorkExperience } from 'model'

export const summary =
  'I am an autodidact software engineer with experience in developing and leading projects from scratch to enterprise products. I am passionate about Open Source, Compilers, Linux, Distributed Systems and Software Architecture. I am a quick learner, a creative problem solver and a knowledge-driven technology enthusiast. I believe in a no-blame culture, direct feedback and accountability. I strive towards efficiency but I’m not fanatic, I see myself as a realist with an optimistic point of view.'

export const education: Education[] = [
  { title: 'King\'s College London, Computer Science Research MPhil/PhD (Part-time) - 2023 – 2030' },
  { title: 'Birkbeck, University of London, UK - BSc (Hons) in Computing, First Class Honours - 2018 – 2022' },
  { title: 'Open University, Israel - BSc Computer Science - 2014 – 2017' },
  { title: 'Sela College, Israel - Software development - 2013 - 2014 - Magna Cum Laude' }
]

export const workExperience: WorkExperience[] = [
  {
    company: 'Flutter',
    title: 'Technical advisor',
    date: 'Mar 2023 - PRESENT',
    description: 'Mar 2023 - PRESENT',
    techStack: ''
  },
  {
    company: 'nate (UK/US)',
    title: 'Tech Lead, CTO, Principle Engineer',
    date: 'Jan 2019 - Current',
    description:
      'Joined as a Software Engineer and naturally progressed to Tech Lead, CTO, and Principle Engineer. My role grew alongside the company. I built an engineering function of more than 30 engineers from scratch while aligning technical deliveries to company objectives. This role taught me a lot about data science, engineering practices, leadership, business, management and finance. My current position as a technical leader includes mentorship and consultancy with expectations of setting technical and architectural direction, technology evaluation, and applied research',
    techStack: 'TypeScript, Python, Go, Bash, Terraform, AWS, MongoDB, PostgreSQL, Kubernetes, Docker, Traefik, Git, CircleCi and more'
  },
  {
    company: 'Starcount (UK)',
    title: 'Backend Engineer',
    date: 'Aug 2018 - Jan 2019',
    description: 'Working as a backend engineer alongside to data engineering team on data-driven applications',
    techStack: 'TypeScript, JavaScript, Node, KoaJs, ES6/7, Lodash, PostgreSQL, AWS, SQS, Athena, Docker, Circleci, Git, Linux, Bash'
  },
  {
    company: 'Grosvenor Systems (UK)',
    title: 'Web Tech Lead',
    date: 'Dec 2017 - July 2018',
    description: 'Tech lead of web development engineering team Working on legacy system into web transformation',
    techStack: 'TypeScript, JavaScript, Node, Angular, Redux, Webpack, Mocha, Karma, Selenium, AWS, GCP, Linux, Docker, Git'
  },

  {
    company: 'Scores 365 (Israel)',
    title: 'Backend/Full Stack Developer',
    date: 'March 2017 - Dec 2017',
    description: 'Internal tooling maintenance and web scrapers services development',
    techStack: 'C#, Node, JavaScript, TypeScript, Angular, .Net Web API/MVC, AWS, Jenkins, MSSQL, Git, GitHub, Assana'
  },

  {
    company: 'Sela Group College (Israel)',
    title: 'Lecturer',
    date: 'Dec 2016 - March 2017',
    description: 'Evening course lecturer - Design Patterns and Advanced Techniques',
    techStack: ''
  },

  {
    company: 'Sela Group (Israel)',
    title: 'Software Engineer',
    date: 'Oct 2014 - May 2017',
    description: 'Worked on various in-house and outsourced projects as a developer and tech consultant',
    techStack: 'Java, C#, C/C++, JS/TS, Scala, Unity, Azure, AWS, Neo4j, MongoDb, Kafka, Xamarin, Ionic, iOS, Android, .Net Core, React, Git'
  },

  {
    company: 'QIS (Israel)',
    title: 'Full Stack Developer',
    date: 'ec 2013 - Sep 2014',
    description: 'Worked on a mobile system with multiple GoPro cameras, controlled by an Android client',
    techStack: 'Java, C#, Android, .NET Web Api, MySQL'
  }
]
