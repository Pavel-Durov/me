import { Education, WorkExperience } from 'model'

export const summary =
  'I am an autodidact software engineer with experience scaling and leading businesses from zero to 50 engineers. I am passionate about Open Source, Compilers, Linux, Distributed Systems and Software Architecture. <br/> I am a quick learner, a creative problem solver and a knowledge-driven technology enthusiast. I believe in a no-blame culture, direct feedback and accountability. I strive towards efficiency but I’m not a fanatic, I see myself as a realist with an optimistic point of view. More about my engineering philosophy can be found here.'

export const education: Education[] = [
  { title: "King's College London, Computer Science Research MPhil/PhD (Part-time) - 2023 – 2030" },
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
    achievements: [],
    techStack: ''
  },
  {
    company: 'nate (UK/US)',
    title: 'Tech Lead, CTO, Principle Engineer',
    date: 'Jan 2019 - Current',
    description:
      'Joined as one of the first employees as a Software Engineer and naturally progressed to Tech Lead, CTO, and finally Principal Engineer. My role as a technical leader included mentorship, setting technical direction, technology evaluation, platform engineering and applied research.',
    achievements: [
      'Scaled engineering team from a team of one to a multi-team function in London and NY',
      'Delivered company OKRs in tight deadlines - Seed Round and Series A',
      'Facilitated engineering hiring process and technical interview structure',
      'Reduced TTP (Time To Production) by 50% on CD pipelines',
      'Improved SLA by introducing on-call and escalation processes',
      'Improved DX (Developer Experience) by introducing cloud observability, tooling and platform support',
      'Improved systems design and cross-team collaboration by facilitating Architecture Advisory Forum (AAF)',
      'Initiated and completed successful migration to Kubernetes on AWS EKS',
      'Improved system stability and scalability by introducing and supporting test strategies across the engineering function',
      'Mentored engineers, organised technical workshops and tech talks'
    ],
    techStack: 'TypeScript, Python, Go, Bash, Terraform, AWS, MongoDB, PostgreSQL, Kubernetes, Docker, Traefik, Git, CircleCi and more'
  },
  {
    company: 'Starcount (UK)',
    title: 'Backend Engineer',
    date: 'Aug 2018 - Jan 2019',
    description: 'Working as a backend engineer alongside to data engineering team on data-driven applications',
    achievements: ['Released first MVP version of the data-analytics tool'],
    techStack: 'TypeScript, JavaScript, Node, KoaJs, ES6/7, Lodash, PostgreSQL, AWS, SQS, Athena, Docker, Circleci, Git, Linux, Bash'
  },
  {
    company: 'Grosvenor Systems (UK)',
    title: 'Web Tech Lead',
    date: 'Dec 2017 - July 2018',
    description: 'Tech lead of web development engineering team Working on legacy system into web transformation',
    achievements: ['Managed migration from Angular 1 to Angular 4', 'Introduced CI/CD processes', 'Migrated from Windows to Linux based development'],
    techStack: 'TypeScript, JavaScript, Node, Angular, Redux, Webpack, Mocha, Karma, Selenium, AWS, GCP, Linux, Docker, Git'
  },

  {
    company: 'Scores 365 (Israel)',
    title: 'Backend/Full Stack Developer',
    date: 'March 2017 - Dec 2017',
    description: 'Internal tooling maintenance and web scrapers services development',
    achievements: ['Migrated Angular 1 application to Angular 2'],
    techStack: 'C#, Node, JavaScript, TypeScript, Angular, .Net Web API/MVC, AWS, Jenkins, MSSQL, Git, GitHub, Assana'
  },

  {
    company: 'Sela Group College (Israel)',
    title: 'Lecturer',
    date: 'Dec 2016 - March 2017',
    description: 'Evening course lecturer - Design Patterns and Advanced Techniques',
    achievements: [],
    techStack: ''
  },

  {
    company: 'Sela Group (Israel)',
    title: 'Software Engineer',
    date: 'Oct 2014 - May 2017',
    description: 'Worked on various in-house and outsourced projects as a developer and tech consultant',
    achievements: ['Delivered multiple MVPs for outsourced and in-house projects'],
    techStack: 'Java, C#, C/C++, JS/TS, Scala, Unity, Azure, AWS, Neo4j, MongoDb, Kafka, Xamarin, Ionic, iOS, Android, .Net Core, React, Git'
  },

  {
    company: 'QIS (Israel)',
    title: 'Full Stack Developer',
    date: 'ec 2013 - Sep 2014',
    achievements: ['Reverse-engineered GoPro API', 'Delivered first, feature-complete MVP'],
    description: 'Worked on a mobile system with multiple GoPro cameras, controlled by an Android client',
    techStack: 'Java, C#, Android, .NET Web Api, MySQL'
  }
]
