import { Project } from 'model';

const projects: Project[] = [
  {
    url: 'https://github.com/Pavel-Durov/arsenal.games.scraper.ts',
    title: 'Arsenal Stadium games scraper and telegram bot',
    description: "Scrapes arsenal's website for upcoming games and sends a daily update to telegram channel.",
    techStack: 'node.js, typescript, cheerio, telegram-bot, github-actions'
  },
  {
    url: 'https://github.com/softdevteam/pavel.yaiwr',
    title: 'Yet Another Interpreter Written In Rust',
    description: "Interpreter written in Rust, based on grmtools. Part of my PhD at Kings' College.",
    techStack: 'compilers, rust, grmtool, yacc'
  },
  {
    url: 'https://github.com/EladLeev/kubeseal-convert',
    title: 'kubeseal-convert',
    description:
      'kubeseal-convert aims to reduce the friction of importing secrets from a pre-existing secret management systems (e.g. Vault, AWS Secrets Manager, etc) into a SealedSecret.',
    techStack: 'Go, kubernetes, kubeseal'
  },
  {
    url: 'https://github.com/Pavel-Durov/kimchi.py',
    title: 'Kimchi.Py',
    description:
      'An interpreter called Kimchi. Inspired by the book "Writing An Interpreter In Go" but written in RPython.',
    techStack: 'RPython, PyPy'
  },
  {
    url: 'https://github.com/Pavel-Durov/pypy.meta.tracing',
    title: 'pypy.meta.tracing',
    description: 'Experimentation and exploration of the PyPy JIT tracing mechanism.',
    techStack: 'RPython, PyPy'
  },
  {
    url: 'https://github.com/blitzshare',
    title: 'Blitzshare',
    description:
      'Blitzshare is a communication tool for data sharing between network participants directly, securely, and anonymously',
    techStack: ' Go, Bash, AWS, Eks, Kubernetes, Terraform, docker, KubeMQ, Redis, PostgreSQL, libP2p'
  },
  {
    url: 'https://github.com/dumconstantin/ramda-loader',
    title: 'Ramda Loader',
    description: 'Open source contributor. Native functional programming in JavaScript with Ramda and Webpack',
    techStack: 'Javascript, Webpack, Ramda'
  },
  {
    url: 'https://github.com/goldshtn/msos',
    title: 'msos',
    description:
      'Open source contributor. Command-line environment a-la WinDbg for executing SOS commands without having SOS available. It is based on the ClrMD library that is essentially a managed replacement for SOS',
    techStack: 'C#'
  },
  {
    url: 'https://github.com/goldshtn/etrace',
    title: 'etrace',
    description:
      'etrace is a command-line tool for realtime tracing of ETW events and for processing existing .etl recording files. It was inspired by the Microsoft ELT tool.',
    techStack: 'C#'
  },
  {
    url: 'https://github.com/Pavel-Durov/WHQ',
    title: 'WHQ',
    description:
      'This Project uses various technologies for extracting Windows process handles data from a given context. Based on ClrMd, WCT, MiniDump and other Windows APIs at its core.',
    techStack: 'C#'
  },
  {
    url: 'https://github.com/Pavel-Durov/SymMath',
    title: 'SymMath',
    description:
      'A tool for quick math symbols insertion. Tested with Microsoft Word, but can be used in any text editor - as long as you got the right fonts installed :).',
    techStack: 'C#'
  },
  {
    url: 'https://github.com/Pavel-Durov/by.far.the.best.interpreter.ever.made',
    title: 'By far the best interpreter ever made',
    description: 'Interpreter written in GO, based on the book "Writing An Interpreter In Go"',
    techStack: 'RPython, PyPy'
  },

  {
    url: 'https://github.com/Pavel-Durov/fish-out-of-water',
    title: 'fish-out-of-water',
    description: 'Interactive sound to visual translation using p5.js library.',
    techStack: 'P5js, Javascript'
  },
  {
    url: 'https://github.com/Pavel-Durov/pynetwork',
    title: 'pynetwork',
    description: 'Network ping/upload/download speed measurements and analysis.',
    techStack: 'Python'
  },
  {
    url: 'https://github.com/Pavel-Durov/Design-Patterns',
    title: 'Design-Patterns',
    description:
      'Collection of design patterns code examples and explanations I used when I lectured Design patterns course.',
    techStack: 'C#'
  },
  {
    url: 'https://github.com/Pavel-Durov/CodeProject-Android-Basic-Game-Loop',
    title: 'CodeProject-Android-Basic-Game-Loop',
    description: 'Code samples for the article "Android Basic Game Loop"',
    techStack: 'Java'
  }
];

export default projects;
