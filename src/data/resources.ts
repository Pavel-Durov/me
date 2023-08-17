import { Resource } from 'model'

export default [
  {
    url: 'https://curtclifton.net/papers/MoseleyMarks06a.pdf',
    title: 'Out of the Tar Pit',
    description: 'Paper on complexity of software and how to manage it',
    tags: ['complexity', 'software', 'research']
  },
  {
    title: 'try_repeat',
    url: 'https://tratt.net/laurie/src/try_repeat/',
    description:
      'try_repeat tries to run a command n times, exiting early if the command exits with a non-zero exit code. This is useful when trying to find intermittent failures in a command',
    tags: ['tools', 'utils', 'unix', 'debugging']
  },
  {
    url: 'https://tavianator.com/2023/bfs_3.0.html?ref=console.dev',
    title: 'BFS 3.0',
    description: 'bfs is a tool written to do breadth-first search through a filesystem',
    tags: ['filesystem', 'tools', 'bfs', 'utils', 'unix']
  },
  {
    url: 'https://martinfowler.com/articles/practical-test-pyramid.html',
    title: 'The Practical Test Pyramid',
    description:
      'The "Test Pyramid" is a metaphor that tells us to group software tests into buckets of different granularity. It also gives an idea of how many tests we should have in each of these groups',
    tags: ['testing', 'quality', 'martin-fowler']
  },
  {
    url: 'https://www.inkandswitch.com/',
    title: 'Ink & Switch',
    description:
      'Computers can aid humans in our most noble endeavors: art, science, thinking, self-improvement. But today’s dominant computing platforms increasingly work against the needs of creative professionals. Ink & Switch is an independent research lab working on this problem.',
    tags: ['research', 'decentralised', 'lab']
  },
  {
    url: 'https://ryhl.io/blog/async-what-is-blocking/',
    title: 'Async: What is blocking?',
    description: 'Alice Rhyl (one of the Tokio devs) blog post on blocking in async code.',
    tags: ['async', 'blocking', 'tokio', 'rust']
  },
  {
    url: 'https://dl.acm.org/doi/pdf/10.1145/3316415',
    title: 'From Hack to Elaborate Technique—A Survey on Binary Rewriting',
    description: 'A survey on binary rewriting',
    tags: ['binary', 'rewriting', 'research', 'performance']
  },
  {
    url: 'http://program-transformation.org/Transform/ProgramTransformation.html',
    title: 'Program Transformation',
    description:
      'Program-transformation.org is dedicated to collecting, organizing and disseminating information about all aspects of program transformation in order to share results across communities',
    tags: ['program-transformation', 'transformation', 'programming', 'research']
  },
  {
    url: 'https://dynimize.com/talks/DynimizerPerconaLive2018.pdf',
    title: 'Accelerating MySQL withJIT Compilers',
    description: 'Slides from PerconaLive2018',
    tags: ['dynimize', 'mysql', 'performance', 'research']
  },
  {
    url: 'https://xl10.github.io/blog/drcctprof.html',
    title: 'DrCCTProf: A Fine-grained Profiler for ARM Eco-system',
    description: 'A Fine-grained Profiler for ARM Eco-system ',
    tags: ['performance', 'profiling', 'research']
  },
  {
    url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8811970',
    title: 'Redundant Loads: A Software Inefficiency Indicator',
    description: 'Academic paper on redundant loads profiling and optimisations with LOADSPY',
    tags: ['perf', 'ebpf', 'bcc', 'linux', 'performance', 'profiling', 'research']
  },
  {
    url: 'https://www.brendangregg.com/linuxperf.html',
    title: 'Linux Performance',
    description:
      "This page links to various Linux performance material I've created, including the tools maps on the right. These use a large font size to suit slide decks. You can also print them out for your office wall",
    tags: ['perf', 'ebpf', 'bcc', 'linux', 'performance', 'research']
  },
  {
    url: 'https://css.csail.mit.edu/6.858/2010/labs/dr-docs/using.html',
    title: 'Usage Model for DynamoRIO',
    description: 'Overview of how to use DynamoRIO, introduction level',
    tags: ['runtime', 'dynamic', 'dynamorio', 'performance', 'process-vm', 'vm']
  },
  {
    url: 'https://eli.thegreenplace.net/2011/09/06/stack-frame-layout-on-x86-64',
    title: 'Stack frame layout on x86-64',
    description: 'Article about the stack frame layout of the newer 64-bit version of the x86 architecture, x64.',
    tags: ['cpu', 'intel', 'stack', 'x86', 'x64']
  },
  {
    url: 'https://blog.feabhas.com/2021/07/cmake-part-1-the-dark-arts/',
    title: 'CMake Part 1 – The Dark Arts',
    description: 'The dark arts of cmake, project ocnfiguration and managment.',
    tags: ['c++', 'cmake', 'project managment']
  },
  {
    url: 'https://tratt.net/laurie/blog/2023/why_we_need_to_know_lr_and_recursive_descent_parsing_techniques.html',
    title: 'Why We Need to Know LR and Recursive Descent Parsing Techniques',
    description: "Laurence Tratt's argument for LR parsing",
    tags: ['parsing', 'compilers']
  },
  {
    url: 'https://pavpanchekha.com/blog/top-down-lr.html',
    title: 'Top-down LR parsing',
    description: 'Pavel Panchekha post about Top-down LR parsing',
    tags: ['parsing', 'compilers']
  },
  {
    url: 'https://tratt.net/laurie/blog/2020/which_parsing_approach.html',
    title: 'Which Parsing Approach?',
    description:
      'We all know that parsing is an important part of designing and implementing programming languages, but it’s the equivalent of Brussels sprouts: good for the diet, but a taste that only a select few enjoy. Unfortunately, I’ve come to realise that our general distaste for parsing is problematic. While many of us think that we’ve absorbed the advances of the 1960s into our collective understanding, I fear that we have regressed, and that we are often making inappropriate decisions about parsing. If that sounds accusatory, I don’t mean it to be: I spent over 20 years assuming that parsing is easy and that I didn’t need to understand it properly in order to use it well. Alas, reality has been a cruel teacher, and in this post I want to share some of the lessons I’ve been forced to slowly learn and acknowledge.',
    tags: ['parsing', 'ast']
  },
  {
    url: 'https://wepresent.wetransfer.com/stories/manifesto-ai-weiwei',
    title: 'WePresent | A manifesto for life and art by artist Ai Weiwei',
    description: 'Chinese artist Ai Weiwei is one of the most important creatives and activists working today. Here, he shares his 10 rules for art and living',
    tags: ['aiweiwei', 'art', 'manifesto']
  },
  {
    url: 'https://www.youtube.com/watch?v=5XgBd6rjuDQ&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
    title: 'Fuzzing ping(8)… and finding a 24 year old bug.',
    description:
      'FreeBSD had a security fluctuation in their implementation of ping(8) the other day. As someone who has done a lot of work on ping(8) in OpenBSD this tickled my interests.',
    tags: ['security', 'ping', 'fuzzing', 'bug']
  },
  {
    url: 'https://aws.amazon.com/blogs/compute/visualize-and-create-your-serverless-workloads-with-aws-application-composer/?ref=console.dev',
    title: 'Visualize and create your serverless workloads with AWS Application Composer',
    description:
      'In distributed systems, empowering teams is a cultural shift needed for enabling developers to help translate business capabilities into code.This doesn’t mean every team works in isolation. Different teams or even new-joiners must understand what they are building to contribute to a project. The best way to understand architecture quickly is by using diagrams. Unfortunately, architectural diagrams are often outdated. Often, when releasing a workload in production, there are already discrepancies from the initial design and infrastructure. Developers new to building serverless applications can face a learning curve when composing applications from multiple AWS services. They must understand how to configure each service, and then learn and write infrastructure as code (IaC) to deploy their application.',
    tags: ['aws', 'devops', 'dx', 'aws', 'application-composer']
  },
  {
    url: 'https://redpanda.com/blog/remote-read-replicas-for-distributing-work',
    title: 'Remote Read Replicas for Distributing Work',
    description:
      'Remote Read Replicas are read-only topics on one cluster that mirror a topic on a different cluster. They can be used to serve any consumer without increasing the load on a production cluster. When a user has a Redpanda topic with archival storage enabled, they can create a separate cluster for the consumer and populate its topics from the cloud storage. (You can find the documentation for Remote Read Replicas here.)',
    tags: ['redpanda', 'architecture', 'remote-read-replicas']
  },
  {
    url: 'https://redpanda.com/blog/tiered-storage-architecture-shadow-indexing-deep-dive',
    title: 'How we built Shadow Indexing, the subsystem powering Redpanda’s tiered storage capabilities',
    description:
      'One of the key premises of Redpanda is unification of real-time and historical data by giving users the ability to store infinite data. However, in the modern cloud, the price of storage often dominates the price of all computing resources. The cost of object storage is vastly lower than the cost of the local disk attached to a compute node. Furthermore, object storage is often more reliable than the nodes themselves. To these ends, we created Shadow Indexing, a capability that allows us to capitalize on the 99.995% guaranteed reliability of the tier-4 datacenter.',
    tags: ['redpanda', 'architecture', 'shadow-indexing']
  },
  {
    url: 'http://www.paulgraham.com/ds.html',
    title: "Do Things that Don't Scale",
    description: "Paul Graham's essay on how to start a startup",
    tags: ['startup', 'entrepreneurship', 'stories']
  },
  {
    url: 'https://davidcummings.org/2015/11/13/video-of-the-week-blitzscaling-session-1-household-stage/',
    title: 'Video of the Week: Blitzscaling Session 1',
    description: 'Recording of Blitzscaling online course',
    tags: ['blitzcaling', 'entrepreneurship', 'stories']
  },
  {
    url: 'https://www.dothingsthatdontscale.com/',
    title: 'Do Things That Don’t Scale',
    description: 'a crowdsourced collection of unscalable startup hacks and stories',
    tags: ['startup', 'entrepreneurship', 'stories']
  },
  {
    url: 'https://archive.vcu.edu/english/engweb/transcendentalism/',
    title: 'Transcendentalism',
    description: 'The web of American Transcendentalism, collection of resources and links',
    tags: ['philosophy', 'transcendentalism', 'history']
  },
  {
    url: 'https://www.youtube.com/watch?v=GgCA2USI5iQ&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
    title: 'Webinar: Kubernetes and Networks: Why is This So Dang Hard?',
    description:
      'Tim Hockin presents a webinar where he looks at different models for integrating Kubernetes into your network in both single-cluster and multi-cluster environments. He looks at IPs, gateway configurations, and how to navigate security boundaries, describing pros and cons of each solution, so that developers can make the best choice for their particular environment.',
    tags: ['webinar', 'kubernetes', 'network', 'Tim Hockin']
  },
  {
    url: 'https://www.npmjs.com/package/dependency-cruiser',
    title: 'Dependency Cruiser',
    description: 'Validate and visualise dependencies. With your rules. JavaScript. TypeScript. CoffeeScript. ES6, CommonJS, AMD.',
    tags: ['dependency', 'cruiser', 'npm', 'package', 'visual']
  },
  {
    url: 'https://github.com/golang-standards/project-layout',
    title: 'Golang project structure best practices',
    description:
      "This is a basic layout for Go application projects. It's not an official standard defined by the core Go dev team; however, it is a set of common historical and emerging project layout patterns in the Go ecosystem. Some of these patterns are more popular than others. It also has a number of small enhancements along with several supporting directories common to any large enough real world application.",
    tags: ['go', 'golang', 'software-engineering', 'project-structure', 'project-layout']
  },
  {
    url: 'https://refactoring.guru/design-patterns',
    title: 'Design patterns',
    description:
      'Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.',
    tags: ['design-patterns', 'architecture', 'software-engineering']
  },
  {
    url: 'http://wiki.c2.com/?SeparationOfConcerns',
    title: 'Separation of Concerns',
    description:
      'The key concept for SoftwareEngineering and the basis of ObjectOrientedProgramming, AspectOrientedProgramming, SubjectOrientedProgramming and HyperSpace programming.',
    tags: ['design', 'principle']
  },
  {
    url: 'https://arxiv.org/abs/2209.15369',
    title: 'Towards effective assessment of steady state performance in Java software: Are we there yet?',
    description:
      'Microbenchmarking is a widely used form of performance testing in Java software. A microbenchmark repeatedly executes a small chunk of code while collecting measurements related to its performance. Due to Java Virtual Machine optimizations, microbenchmarks are usually subject to severe performance fluctuations in the first phase of their execution (also known as warmup). For this reason, software developers typically discard measurements of this phase and focus their analysis when benchmarks reach a steady state of performance. Developers estimate the end of the warmup phase based on their expertise, and configure their benchmarks accordingly. Unfortunately, this approach is based on two strong assumptions: (i) benchmarks always reach a steady state of performance and (ii) developers accurately estimate warmup. In this paper, we show that Java microbenchmarks do not always reach a steady state, and often developers fail to accurately estimate the end of the warmup phase. We found that a considerable portion of studied benchmarks do not hit the steady state, and warmup estimates provided by software developers are often inaccurate (with a large error). This has significant implications both in terms of results quality and time-effort. Furthermore, we found that dynamic reconfiguration significantly improves warmup estimation accuracy, but still it induces suboptimal warmup estimates and relevant side-effects. We envision this paper as a starting point for supporting the introduction of more sophisticated automated techniques that can ensure results quality in a timely fashion.',
    tags: ['research', 'java', 'microbenchmarking', 'performance', 'warmup']
  },
  {
    url: 'https://github.com/cue-lang/cue',
    title: 'The CUE Data Constraint Language',
    description: 'CUE is an open source data constraint language which aims to simplify tasks involving defining and using data.',
    tags: ['cue', 'data', 'language']
  },
  {
    url: 'https://go.dev/blog/waza-talk',
    title: 'Concurrency is not parallelism',
    description:
      'If there’s one thing most people know about Go, is that it is designed for concurrency. No introduction to Go is complete without a demonstration of its goroutines and channels. But when people hear the word concurrency they often think of parallelism, a related but quite distinct concept. In programming, concurrency is the composition of independently executing processes, while parallelism is the simultaneous execution of (possibly related) computations. Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.',
    tags: ['go', 'concurrency', 'parallelism']
  },
  {
    url: 'http://paulgraham.com/avg.html',
    title: 'Beating the Averages',
    description:
      "If you do everything the way the average startup does it, you should expect average performance. The problem here is, average performance means that you'll go out of business. The survival rate for startups is way less than fifty percent. So if you're running a startup, you had better be doing something odd. If not, you're in trouble.",
    tags: ['list', 'startup']
  },

  {
    url: 'https://go.dev/blog/slices',
    title: 'Arrays, slices (and strings): The mechanics of append',
    description: 'Arrays, slices (and strings): The mechanics of append',
    tags: ['go', 'append', 'slice', 'internals']
  },

  {
    url: 'https://aosabook.org/en/llvm.html',
    title: 'The Architecture of Open Source Applications: LLVM',
    description:
      'This chapter discusses some of the design decisions that shaped LLVM1, an umbrella project that hosts and develops a set of close-knit low-level toolchain components (e.g., assemblers, compilers, debuggers, etc.), which are designed to be compatible with existing tools typically used on Unix systems. The name "LLVM" was once an acronym, but is now just a brand for the umbrella project. While LLVM provides some unique capabilities, and is known for some of its great tools (e.g., the Clang compiler2, a C/C++/Objective-C compiler which provides a number of benefits over the GCC compiler), the main thing that sets LLVM apart from other compilers is its internal architecture.',
    tags: ['llvm', 'compiler']
  },
  {
    url: 'https://martinfowler.com/bliki/DarkLaunching.html',
    title: 'Dark Launching',
    description:
      "Dark launching a feature means taking a new or changed back-end behavior and calling it from existing users without the users being able to tell it's being called. It's done to assess the additional load and performance impacts upon the system before making a public announcement of the new capability.",
    tags: ['dark launching', 'feature', 'back-end', 'release']
  },
  {
    url: 'https://www.youtube.com/watch?v=OH5I3V-FVTo&ab_channel=Confluent',
    title: 'If Streaming Is the Answer, Why Are We Still Doing Batch?',
    description:
      'In this episode, Kris talks to a panel of industry experts with decades of experience building and implementing data systems. They discuss the state of streaming adoption today, if streaming will ever fully replace batch, and whether it even could (or should). Is micro batching the natural stepping stone between batch and streaming? Will there ever be a unified understanding on how data should be processed over time? Is the lack of agreement on best practices for data streaming an insurmountable obstacle to widespread adoption? What exactly is holding teams back from fully adopting a streaming model?',
    tags: ['kafka', 'streaming', 'batch']
  },
  {
    url: 'https://alistair.cockburn.us/hexagonal-architecture/',
    title: 'The Pattern: Ports and Adapters (Object Structural)',
    description: 'Overview of the pattern - hexagonal-architecture',
    tags: ['hexagonal-architecture', 'ports-and-adapters', 'architecture']
  },
  {
    url: 'https://dl.acm.org/doi/10.1145/359576.359585',
    title: 'Communicating sequential processes',
    description:
      "This paper suggests that input and output are basic primitives of programming and that parallel composition of communicating sequential processes is a fundamental program structuring method. When combined with a development of Dijkstra's guarded command, these concepts are surprisingly versatile. Their use is illustrated by sample solutions of a variety of a familiar programming exercises.",
    tags: ['communication', 'concurrency', 'processes', 'research']
  },
  {
    url: 'https://dev.to/karanpratapsingh/csp-vs-actor-model-for-concurrency-1cpg',
    title: 'CSP vs Actor model for concurrency',
    description: 'CSP vs Actor model for concurrency',
    tags: ['csp', 'actor model', 'concurrency']
  },
  {
    url: 'https://go.dev/talks/2012/concurrency.slide#1',
    title: 'Go Concurrency Patterns',
    description: 'Presentation on Go Concurrency Patterns',
    tags: ['go', 'concurrency', 'slides']
  },
  {
    url: 'https://learning.codefresh.io/path-player?courseid=gitops-with-argo&unit=gitops-with-argo_6177da00c04a0Unit',
    title: 'Get Certified for GitOps with Argo',
    description:
      'GitOps is a set of best practices where the entire code delivery process is controlled via Git, including infrastructure and application definition as code and automation to complete updates and rollbacks.',
    tags: ['ci/cd', 'gitops', 'argo', 'kubernetes']
  },

  {
    url: 'https://go.dev/blog/defer-panic-and-recover',
    title: 'Defer, Panic, and Recover',
    description:
      'Go has the usual mechanisms for control flow: if, for, switch, goto. It also has the go statement to run code in a separate goroutine. Here I’d like to discuss some of the less common ones: defer, panic, and recover.',
    tags: ['go', 'golang', 'programming', 'software development', 'error handling', 'control flow', 'defer', 'panic', 'recover']
  },
  {
    url: 'https://tratt.net/laurie/research/pubs/html/bolz_tratt__the_impact_of_metatracing_on_vm_design_and_implementation/',
    title: 'The Impact of Meta-Tracing on VM Design and Implementation',
    description:
      'Most modern languages are implemented using Virtual Machines (VMs). While the best VMs use Just-In-Time (JIT) compilers to achieve good performance, JITs are costly to implement, and few VMs therefore come with one. The RPython language allows tracing JIT VMs to be automatically created from an interpreter, changing the economics of VM implementation. In this paper, we explain, through two concrete VMs, how meta-tracing RPython VMs can be designed and optimised, and, experimentally, the performance levels one might reasonably expect from them.',
    tags: ['rpython', 'jit', 'vm', 'meta-tracing', 'pypy', 'research']
  },
  {
    url: 'https://spidermonkey.dev/',
    title: 'SpiderMonkey',
    description:
      'SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects. It is written in C++, Rust and JavaScript. You can embed it into C++ and Rust projects, and it can be run as a stand-alone shell. It can also be compiled to WASI; see our online demo.',
    tags: ['JavaScript', 'WebAssembly', 'Rust', 'C++', 'SpiderMonkey']
  },
  {
    url: 'http://www.learnyouahaskell.com/',
    title: 'Learn You a Haskell for Great Good!',
    description:
      "This tutorial is aimed at people who have experience in imperative programming languages (C, C++, Java, Python …) but haven't programmed in a functional language before (Haskell, ML, OCaml …). Although I bet that even if you don't have any significant programming experience, a smart person such as yourself will be able to follow along and learn Haskell.",
    tags: ['haskell', 'functional programming', 'programming']
  },
  {
    url: 'https://arxiv.org/abs/2201.09268',
    title: 'Two-level Just-in-Time Compilation with One Interpreter and One Engine',
    description:
      'Modern, powerful virtual machines such as those running Java or JavaScript support multi-tier JIT compilation and optimization features to achieve their high performance. However, implementing and maintaining several compilers/optimizers that interact with each other requires hard-working VM developers. In this paper, we propose a technique to realize two-level JIT compilation in RPython without implementing several interpreters or compilers from scratch. As a preliminary realization, we created adaptive RPython, which performs both baseline JIT compilation based on threaded code and tracing JIT compilation. We also implemented a small programming language with it. Furthermore, we preliminarily evaluated the performance of that small language, and our baseline JIT compilation ran 1.77x faster than the interpreter-only execution. Furthermore, we observed that when we apply an optimal JIT compilation for different target methods, the performance was mostly the same as the one optimizing JIT compilation strategy, saving about 40 % of the compilation code size.',
    tags: ['jit', 'rpython', 'python', 'compiler', 'optimization', 'research']
  },
  {
    url: 'https://www.jayconrod.com/posts/52/a-tour-of-v8-object-representation',
    title: 'A tour of V8: object representation',
    description: 'A tour of V8: object representation',
    tags: ['v8', 'compiler', 'javascript', 'nodejs', 'internals']
  },
  {
    url: 'https://www.jayconrod.com/posts/51/a-tour-of-v8-full-compiler',
    title: 'A tour of V8: full compiler',
    description: 'A tour of V8: full compiler',
    tags: ['v8', 'compiler', 'javascript', 'nodejs', 'internals']
  },
  {
    url: 'https://www.youtube.com/watch?v=qH0eeh-4XE8&ab_channel=EuroPythonConference',
    title: "Ronan Lamy - Adventures in compatibility emulating CPython's C API in PyPy",
    description:
      "PyPy is a fast and compliant implementation of Python. In other words, it's an interpreter for the Python language that can act as a full replacement for the reference interpreter, CPython. It's optimised to enable efficient just-in-time compilation of Python code to machine code, and has releases matching versions 2.7, 3.5 and soon(ish) 3.6. The PyPy project also developed cffi as a clean and efficient way of interfacing with C code.",
    tags: ['python', 'pypy', 'cffi', 'cpython', 'c api']
  },

  {
    url: 'https://www.youtube.com/watch?v=BE77h7dmoQU&ab_channel=Honeypot',
    title: 'Kubernetes: The Documentary [PART 1]',
    description:
      'Inspired by the open source success of Docker in 2013 and seeing the need for innovation in the area of large-scale cloud computing, a handful of forward-thinking Google engineers set to work on the container orchestrator that would come to be known as Kubernetes– this new tool would forever change the way the internet is built.',
    tags: ['kubernetes', 'docker', 'google', 'cloud', 'containers', 'history']
  },

  {
    url: 'https://www.youtube.com/watch?v=tc4ROCJYbm0&ab_channel=AT%26TTechChannel',
    title: 'AT&T Archives: The UNIX Operating System',
    description:
      'In the late 1960s, Bell Laboratories computer scientists Dennis Ritchie and Ken Thompson started work on a project that was inspired by an operating system called Multics, a joint project of MIT, GE, and Bell Labs. The host and narrator of this film, Victor Vyssotsky, also had worked on the Multics project. Ritchie and Thompson, recognizing some of the problems with the Multics OS, set out to create a more useful, flexible, and portable system for programmers to work with.',
    tags: ['unix', 'operating system', 'history']
  },
  {
    url: 'https://www.youtube.com/watch?v=6avJHaC3C2U&ab_channel=NDCConferences',
    title: 'The Art of Code - Dylan Beattie',
    description:
      'Software and technology has changed every aspect of the world we live in. At one extreme are the ‘mission critical’ applications - the code that runs our banks, our hospitals, our airports and phone networks. Then there’s the code we all use every day to browse the web, watch movies, create spreadsheets… not quite so critical, but still code that solves problems and delivers services.',
    tags: ['code', 'software', 'technology', 'Dylan Beattie']
  },
  {
    url: 'https://unexpected-go.com/',
    title: 'unexpected-go',
    description: 'This small site is oriented to developers learning golang that want to see the unexpected, at least for a newcomer, behaviors in the language.',
    tags: ['golang', 'go']
  },
  {
    url: 'https://www.youtube.com/watch?v=dO1zf4RXsTg&t=5s&ab_channel=ShashikantRai',
    title: 'Introduction of Node JS by Ryan Dahl (Creator of Node Js)',
    description: 'Introduction of Node JS by Ryan Dahl (Creator of Node Js)',
    tags: ['nodejs', 'introduction', 'internals']
  },

  {
    url: 'https://www.youtube.com/watch?v=OzGdYPFfimM&ab_channel=TKSJa',
    title: 'MikroTik Tutorial 77',
    description: 'Limiting the download speeds of certain file types',
    tags: ['mikrotik', 'tutorial', 'networking']
  },
  {
    url: 'https://www.youtube.com/watch?v=udbA7u1zYfc&ab_channel=LowByteProductions',
    title: 'Making WAVs',
    description: 'Understanding, Parsing, and Creating WAV Files in JavaScript',
    tags: ['audio', 'wav', 'javascript']
  },
  {
    url: 'https://www.youtube.com/watch?v=7OZLImVRvro&t=533s&ab_channel=EncodeClub',
    title: 'Intro to libp2p with Filecoin',
    description:
      'libp2p is a modular system of protocols, specifications and libraries that enable the development of peer-to-peer network applications. Find out more here: https://libp2p.io/',
    tags: ['libp2p', 'p2p', 'filecoin']
  },
  {
    url: 'https://blog.ipfs.tech/2021-06-10-guide-to-ipfs-connectivity-in-browsers/',
    title: 'IPFS intro.',
    description:
      "We see a lot of questions about how to get started with using js-ipfs in the browser. This post demonstrates a minimal chat example in js-ipfs entirely in the browser. It uses WebRTC to achieve browser-to-browser connectivity where possible, and a circuit relay to connect browser nodes where not. Message passing is done with libp2p's pubsub.",
    tags: ['ipfs', 'js-ipfs', 'libp2p', 'pubsub', 'webrtc', 'circuit-relay']
  },
  {
    url: 'https://proto.school/introduction-to-libp2p/01',
    title: 'Why do we need libp2p?',
    description: 'libp2p is a modular network stack that evolved out of IPFS to become an independent project.',
    tags: ['libp2p', 'ipfs', 'protocol', 'networking']
  },
  {
    url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY&ab_channel=HarvardUniversity',
    title: 'Justice: What\'s The Right Thing To Do? Episode 01 "THE MORAL SIDE OF MURDER"',
    description:
      'If you had to choose between (1) killing one person to save the lives of five others and (2) doing nothing even though you knew that five people would die right before your eyes if you did nothing-what would you do?  What would be the right thing to do?',
    tags: ['philosophy', 'ethics', 'harvard']
  },
  {
    url: 'https://www.youtube.com/watch?v=PFQnNFe27kU&ab_channel=Devoxx',
    title: 'Principles Of Microservices by Sam Newman.',
    description: 'Principles Of Microservices by Sam Newman.',
    tags: ['microservices', 'architecture', 'Sam Newman']
  },
  {
    url: 'https://www.youtube.com/watch?v=I8LbkfSSR58&list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_&ab_channel=BartoszMilewski',
    title: 'Bartosz Milewski - Category Theory series',
    description: 'Category Theory. A series of lectures by Bartosz Milewski.',
    tags: ['category theory', 'mathematics', 'functional programming', 'Bartosz Milewski']
  },
  {
    url: 'https://boris-marinov.gitbooks.io/category-theory-illustrated/content/02_more_sets/text.html',
    title: 'Introduction · Category Theory Illustrated',
    description:
      'This book is a product of my own endeavour of understanding category theory from a more non-mathematical viewpoint - it is just that as I am explaining something, I am understanding it better.',
    tags: ['category-theory', 'mathematics', 'functional-programming', 'book']
  },
  {
    url: 'https://martinfowler.com/bliki/MonolithFirst.html',
    title: 'MonolithFirst',
    description:
      "This pattern has led many of my colleagues to argue that you shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile.",
    tags: ['microservices', 'monolith']
  },
  {
    url: 'https://www.youtube.com/watch?v=A_mstzRGfIE&ab_channel=DevoxxPoland',
    title: 'Event-Driven Architectures Done Right, Apache Kafka • Tim Berglund • Devoxx Poland 2021',
    description:
      "Far from a controversial choice, Kafka is now a technology developers and architects are adopting with enthusiasm. And it’s often not just a good choice, but a technology enabling meaningful improvements in complex, evolvable systems that need to respond to the world in real time. But surely it's possible to do wrong! In this talk, we'll look at common mistakes in event-driven systems built on top of Kafka.",
    tags: ['kafka', 'event-driven', 'architecture']
  },
  {
    url: 'https://martinfowler.com/articles/scaling-architecture-conversationally.html',
    title: 'Scaling the Practice of Architecture, Conversationally',
    description:
      'Architecture need not be a monologue; delivered top-down from the minds and mouths of a centralised few. This article describes another way to do architecture; as a series of conversations, driven by a decentralised and empowering decision-making technique, and supported by four learning and alignment mechanisms: Decision Records, Advisory Forum, Team-sourced Principles, and a Technology Radar',
    tags: ['architecture', 'decision-making', 'principles', 'technology radar', 'adr', 'aaf']
  },

  {
    url: 'https://www.youtube.com/watch?v=o_AIw9bGogo&ab_channel=linux.conf.au',
    title: 'The Tragedy of systemd',
    description:
      'I delved into the history of bootstrap systems, and even the history of UNIX and other contemporary operating systems, to try and work out why something like systemd was seem as necessary, if not desirable. I also tried to work out why so many people found it so upsetting, annoying, or otherwise rage-inducing.',
    tags: ['linux', 'systemd', 'history']
  },
  {
    url: 'https://www.youtube.com/watch?v=1n9KMqssn54&ab_channel=PyConSweden',
    title: 'Using PyPy instead of Python for speed by Niklas Bivald',
    description: 'Using PyPy - a faster version of Python for long running applications - as a first step to speed up your application.',
    tags: ['python', 'pypy', 'speed', 'performance']
  },

  {
    url: 'https://www.youtube.com/watch?v=BVEcbifDrMk&ab_channel=GopherConUK',
    title: 'Production Go Service Essentials - Elliot Williams',
    description:
      'The aim of this talk is to cover the essentials of building a production-ready Go REST API. We will take a basic example service, and talk about how we can get it ready for prime-time real-world use 🚀',
    tags: ['go', 'golang', 'rest', 'api', 'production']
  },
  {
    url: 'https://www.artima.com/weblogs/viewpost.jsp?thread=214235',
    title: "It isn't Easy to Remove the GIL",
    description: 'A response to a blog post by Juergen Brendel pleading for the removal of the GIL.',
    tags: ['python', 'gil']
  },
  {
    url: 'https://www.youtube.com/watch?v=TyPqzogFS3M&ab_channel=YvesHanoulle',
    title: 'Some coaches are caught up in the rightness of their ideas.',
    description: 'Some coaches are caught up in the rightness of their ideas.',
    tags: ['interview', 'Michael Hill']
  },
  {
    url: 'https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/',
    title: '10 best practices to containerize Node.js web applications with Docker',
    description: '10 best practices to containerize Node.js web applications with Docker',
    tags: ['docker', 'nodejs', 'security', 'best-practices', 'containers']
  },
  {
    url: 'https://pythonspeed.com/articles/alpine-docker-python/',
    title: 'Using Alpine can make Python Docker builds 50× slower',
    description:
      'When you’re choosing a base image for your Docker image, Alpine Linux is often recommended. Using Alpine, you’re told, will make your images smaller and speed up your builds. And if you’re using Go that’s reasonable advice.',
    tags: ['docker', 'alpine', 'python', 'linux', 'containers']
  },

  {
    url: 'https://www.youtube.com/watch?v=XcT4yYu_TTs&ab_channel=GoogleTechTalks',
    title: 'How to Write Clean, Testable Code',
    description:
      'Miško Hevery works as an Engineer at Google where he is responsible for coaching Googlers to maintain the high level of automated testing culture. This allows Google to do frequent releases of its web applications with consistent high quality.',
    tags: ['testing', 'clean code', 'code quality']
  },
  {
    url: 'https://www.gnu.org/software/make/manual/make.html',
    title: 'GNU make manual',
    description: 'GNU make manual',
    tags: ['make', 'manual']
  },
  {
    url: 'https://www.openpolicyagent.org/',
    title: 'Policy-based control for cloud native environments',
    description: 'Policy-based control for cloud native environments',
    tags: ['policy', 'security', 'open-source', 'opa']
  },
  {
    url: 'https://www.infoq.com/presentations/Facebook-Release-Process/',
    title: 'The Facebook Mobile Release Process',
    description: 'Christian Legnitto offers insight in some of the tools and processes used by Facebook for pushing new updates to their mobile apps.',
    tags: ['release', 'process', 'mobile', 'continuous delivery']
  },
  {
    url: 'https://www.youtube.com/watch?v=GBTdnfD6s5Q&list=PLjCyaPAmvPA_4iBpeHbZjsQmkg4DEujwi&index=2&t=1860s',
    title: 'When To Use Microservices (And When Not To!) • Sam Newman & Martin Fowler • GOTO 2020',
    description:
      'Upgrade your microservices knowledge by listening to a spirited conversation between two living legends: Sam Newman and Martin Fowler. The two touch upon the main reasons for using or not using microservices, and, if you decide to do use microservices, what else you should change along the way to fully benefit from the switch, plus much more. The interview is based on Sam Newman\'s new book "Monolith to Microservices"',
    tags: ['microservices', 'architecture', 'Sam Newman', 'Martin Fowler']
  },
  {
    url: 'https://tratt.net/laurie/blog/2022/more_evidence_for_problems_in_vm_warmup.html',
    title: 'More Evidence for Problems in VM Warmup',
    description: 'More Evidence for Problems in VM Warmup',
    tags: ['vm', 'warmup', 'research', 'performance']
  },
  {
    url: 'https://dl.acm.org/doi/10.1145/2542142.2542146',
    title: 'Unipycation: a case study in cross-language tracing',
    description:
      'Language composition approaches have traditionally suffered from poor performance. In this paper we hypothesise that meta-tracing provides a means to compose independent language interpreters while retaining the performance levels of each.',
    tags: ['language composition', 'meta-tracing', 'performance', 'research']
  },
  {
    url: 'https://swig.org/Doc4.0/SWIGDocumentation.html#Introduction_nn5.',
    title: 'SWIG-4.0 Documentation',
    description: 'SWIG-4.0 Documentation',
    tags: ['language composition', 'research', 'documentation']
  },
  {
    url: 'https://soft-dev.org/pubs/html/barrett_bolz_diekmann_tratt__fine_grained_language_composition/',
    title: 'Fine-grained Language Composition: A Case Study',
    description:
      'Although run-time language composition is common, it normally takes the form of a crude Foreign Function Interface (FFI). While useful, such compositions tend to be coarse-grained and slow. In this paper we introduce a novel fine-grained syntactic composition of PHP and Python which allows users to embed each language inside the other, including referencing variables across languages. This composition raises novel design and implementation challenges. We show that good solutions can be found to the design challenges; and that the resulting implementation imposes an acceptable performance overhead of, at most, 2.6x.',
    tags: ['php', 'python', 'composition', 'performance', 'research']
  },
  {
    url: 'https://wiki.c2.com/?IocContainerComparison',
    title: 'Ioc Container Comparison',
    description:
      'This page has been created to compare containers supporting the Inversion Of Control pattern (see HollywoodPrinciple). This should help potential users to make an educated choice of various container and to better understand the existing products.',
    tags: ['ioc', 'compare', 'container']
  },
  {
    title: 'Inversion of Control Containers and the Dependency Injection pattern',
    description: 'Hexagonal Architecture is a fabulous pattern to easily embrace changes within our projects.',
    url: 'https://martinfowler.com/articles/injection.html',
    tags: ['ioc', 'di', 'architecture']
  },
  {
    title: 'Alistair in the "Hexagone" 1/3',
    description: 'Hexagonal Architecture is a fabulous pattern to easily embrace changes within our projects.',
    url: 'https://www.youtube.com/watch?v=th4AgBcrEHA',
    tags: ['architecture', 'hexagonal architecture']
  }
] as Resource[]
