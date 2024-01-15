import { Publication } from 'model';

const publications: Publication[] = [
  {
    title: 'Writing interpreter in Rust — Variables and Builtins (part-5)',
    description:
      'In this artickle we are going to build on top of the previous functionality of our interpreter. We will extend our Lexer and Parser and implement variable declaration and evaluation as well as a simple built-in function support.',
    url: 'https://levelup.gitconnected.com/writing-interpreter-in-rust-variables-builtins-part-5-9d864966db07',
    date: '2024-01-15'
  },
  {
    title: 'File Comparison and Patching in Unix Environments and Git',
    url: 'https://medium.com/gitconnected/file-comparison-and-patching-in-unix-environments-and-git-fc347085cde1',
    date: '2021-11-27',
    description:
      'In this article, we will explore file comparison techniques through the practical utilization of diff and patch Unix command-line utilities. We will cover how to compare files using context and unified formats and illustrate how to generate and apply patch files as well as how to work with patch files in Git repositories.'
  },
  {
    title: 'Navigating the Rust-C++ Bridge: Sharing Object References Across Runtimes',
    description:
      'In this article, we will explore the complexities of Rust interoperability with C, focusing on the challenges of passing object references between the two languages. We will explore the differences in memory management between Rust and C, examining the issues that can arise. Through practical Rust code examples, we will showcase the problems and provide potential solutions.',
    url: 'https://levelup.gitconnected.com/navigating-the-rust-c-bridge-sharing-object-references-across-runtimes-ad4ae452eb37',
    date: '2021-11-12'
  },
  {
    title: 'Intercepting Function Calls in C++ and Rust',
    description:
      'In this article, we will explore function call interception with two primary approaches: using the LD_PRELOAD environment variable and LD linker wrapper functions.',
    url: 'https://medium.com/better-programming/intercepting-function-calls-in-c-and-rust-757bd634d96a',
    date: '2023-10-27'
  },
  {
    title: 'Writing Interpreter in Rust — Repl, Files, and Comments (Part 4)',
    description:
      'In this article, we will implement the REPL (Read-Eval-Print Loop), reorganise the project, and add file and comments support. It will be a collection of small changes that will extend the usability of our interpreter.',
    url: 'https://medium.com/better-programming/writing-interpreter-in-rust-repl-files-and-comments-part-4-5a11d41613ba',
    date: '2023-10-17'
  },
  {
    title: 'Writing an Interpreter in Rust: Bytecode and Stack-Based VM (Part 3)',
    description:
      'In this article, we will explore Bytecode advantages and its implementation within the Coconut interpreter. We will also discuss Bytecode evaluation in stack-based virtual machines and compare them to other alternatives.',
    url: 'https://medium.com/better-programming/writing-an-interpreter-in-rust-bytecode-and-stack-based-vm-part-3-943af4acf9e0',
    date: '2023-10-01'
  },
  {
    title: 'Writing an Interpreter in Rust: AST (part 2)',
    description:
      'We are continuing our journey of implementing an interpreter called Coconut in Rust! Here, we will delve into the concept of AST (Abstract Syntax Tree) and transition from parse-time evaluation to AST-time.',
    url: 'https://medium.com/better-programming/writing-an-interpreter-in-rust-ast-part-2-59fd20dbc60f',
    date: '2023-09-22'
  },
  {
    title: 'SDK DX and Code Evolution',
    description:
      'This article delves into SDKs (Software Development Kit), covering their development, maintenance, and the crucial aspects of DX (Developer Experience). We will explore DX core principles with TypeScript examples and examine code evolution.',
    url: 'https://medium.com/better-programming/sdk-dx-and-code-evolution-f75a74e864e2',
    date: '2023-09-15'
  },
  {
    title: 'Faster Python with PyPy (updated)',
    description:
      'In this article, we explore the usage of PyPy and RPython applications, focusing on the latest version of PyPy to date. We will compare runtime performance between PyPy and CPython and talk briefly about their implementation. This article serves as an update to a previous publication — A Gentle Introduction to PyPy — Faster Python With Minimal Changes.',
    url: 'https://medium.com/@p3ld3v/faster-python-with-pypy-updated-dfd74212ec81',
    date: '2023-08-01'
  },
  {
    title: 'Hello World with Make and CMake',
    description:
      'In this article, we are going to cover Make and Cmake tools on a very high level. We will illustrate its applications with a simple C++ “hello world” program.',
    url: 'https://p3ld3v.medium.com/c-hello-world-with-make-and-cmake-97740bd9dd7e',
    date: '2023-07-04'
  },
  {
    title: 'Loops and Opcodes in Lua',
    description:
      'This article overviews the programming language Lua loops as well as the instructions used to implement them.',
    url: 'https://medium.com/@p3ld3v/loops-and-opcodes-in-lua-c3e02bae31c0',
    date: '2023-06-29'
  },
  {
    title: 'Writing interpreter in Rust using grmtools',
    description:
      'This article overviews the process of writing an interpreter with Rust programming language. We will use the grmtools Rust crate to help with the parsing. We will define tokens of our language and create math addition and multiplication expressions as well as cover some basic terms and concepts related to writing an interpreter as we go',
    url: 'https://blog.p3ld3v.dev/writing-interpreter-in-rust-using-grmtools',
    date: '2023-03-21'
  },
  {
    title: 'Programming Languages Composition',
    description:
      'There is a variety of Programming Languages (PL) today, each with its speciality and features. But still, traditional software is written using a single programming language. We have tools and processes that allow language compositions, but these tools are cumbersome, slow and complex. This article will overview the Programming Language Composition (PLC) problem space and the applied composition techniques.',
    url: 'https://blog.p3ld3v.dev/programming-languages-composition',
    date: '2022-12-10'
  },
  {
    title: 'Cross Platform CLI application with GO and Cobra',
    description:
      'This article will cover the process and the involved components of building a Command-Line Interface (CLI)[1] application using the GO programming language. We will cover the required libraries, directory structure, configuration files, testing, and Cross-Platform build process',
    url: 'https://blog.p3ld3v.dev/cross-platform-cli-application-with-go-and-cobra',
    date: '2022-12-02'
  },
  {
    title:
      'Progressive Delivery - Application deployment strategies: configurable and gradual deployments with minimised downtime',
    description:
      'This article will cover Progressive Delivery techniques such as Feature Flags, A/B Testing, Ring Deployment, Dark Launching, Blue/Green and Canary deployments with high-level illustrations and a general concept overview.',
    url: 'https://blog.p3ld3v.dev/progressive-delivery',
    date: '2022-11-21'
  },
  {
    title: 'Hexagonal Architecture/Ports and Adapters, DDD, DI and IoC',
    description:
      "In this article, I will overview the concept of Hexagonal Architecture (HA), the problem it addresses, its benefits, implications and some practical examples illustrated via code and diagrams.There're many sources on this topic. My source is not the most detailed one, but my intention is to simplify the idea as much as I can and break it down to its core concepts and explain its jargon.",
    url: 'https://blog.p3ld3v.dev/hexagonal-architectureports-and-adapters-ddd-di-and-ioc',
    date: '2022-11-14'
  },
  {
    title: 'Graceful Termination in K8S - SIGTERM and UNIX processes',
    description:
      "In this article, we're going to cover UNIX process signals and SIGTERM signals in particular. We will cover how to handle them with practical examples using Node, TypeScript, Docker and Kind local cluster.",
    url: 'https://blog.p3ld3v.dev/graceful-termination-in-k8s-sigterm-and-unix-processes',
    date: '2022-11-07'
  },
  {
    title: 'macOS FS vs Linux FS - case sensitivity',
    description:
      'In this article, I will overview the case-sensitivity difference between macOS default filesystem (FS) and Linux filesystem with some practical examples and gotchas',
    url: 'https://blog.p3ld3v.dev/macos-fs-vs-linux-fs-case-sensitivity',
    date: '2022-10-31'
  },
  {
    title: 'Python logging module quirks',
    description:
      'The Python logger module might resemble familiar tools, but it has its specifics. In this article, I would like to cover some quirks that I found along the way while I was working recently on a python project',
    url: 'https://blog.p3ld3v.dev/python-logging-module-quirks',
    date: '2022-10-20'
  },
  {
    title: 'Db data migration using K8S jobs Helm. Or how I learned to let go & love Helm',
    description:
      'This article will cover the data migration process between two data stores, the evaluation of possible alternatives, and final outcome. We will cover the difference between sequential, asynchronous, multi-threaded, and distributed applications. And finally, we will overview the practical application of Helm and K8S jobs for data migration tasks',
    url: 'https://blog.p3ld3v.dev/db-data-migration-using-k8s-jobs-helm',
    date: '2022-10-29'
  },
  {
    title: 'PyPy,Python and performance benchmarking',
    description:
      'My short experience with the PyPy that I was only recently exposed to. This article complements the Writing an Interpreter with PyPy tutorial from 2011',
    url: 'https://blog.p3ld3v.dev/pypypython-and-performance-benchmarking',
    date: '2022-10-10'
  },
  {
    title: 'Linux VNC server & macOS VNC client',
    description:
      "If you like me, having a Linux PC or a laptop at home but you're using your mac for work on a day-to-day basis. A local VNC server can be nice if you want to run or do some experiments with a native Linux OS",
    url: 'https://blog.p3ld3v.dev/linux-vnc-server-macos-vnc-client',
    date: '2022-10-10'
  },
  {
    title: 'Introduction to numerical bases',
    description: 'Numeric bases basics - decimal, binary, hex and octal',
    url: 'https://www.codeproject.com/Articles/1034345/Introduction-to-numerical-bases',
    date: '2015-10-01'
  },
  {
    title: 'Accessing Internal Data on Android Device',
    description: 'Exploring Android internal data from Eclipse DDMS perspective using adb and Linux commands',
    url: 'https://www.codeproject.com/Articles/825304/Accessing-Internal-Data-on-Android-Device',
    date: '2014-10-04'
  },
  {
    title: 'An Introduction to Android NDK',
    description: 'Basic NDK implementation using Hello World application',
    url: 'https://www.codeproject.com/Articles/824711/An-Introduction-to-Android-NDK',
    date: '2014-09-30'
  },
  {
    title: 'Android Basic Game Loop',
    description: 'Implementing a basic game fundamentals from scratch on Android platform',
    url: 'https://www.codeproject.com/Articles/827608/Android-Basic-Game-Loop',
    date: '2014-10-09'
  },
  {
    title: 'Android dynamic Sqlite database management',
    description: 'Article about dynamic Sqlite database management on Android platform using Java class reflection',
    url: 'https://www.codeproject.com/Articles/829272/Android-dynamic-Sqlite-database-management-v',
    date: '2014-10-16'
  },
  {
    title: 'Introduction to Mvvmcross Platform',
    description:
      'brief overview on the basic concepts of mvvmcross platform. We will explore the mvvmcross project architecture and its classes',
    url: 'https://www.codeproject.com/Articles/863695/Introduction-to-Mvvmcross-Platform',
    date: '2014-06-03'
  },
  {
    title: 'Android and .NET Encryption',
    description: 'Basic encryption/decryption on Android and on .NET platforms',
    url: 'https://www.codeproject.com/Articles/826457/Android-and-NET-Encryption',
    date: '2014-10-06'
  },
  {
    title: 'Uploading large files from Android to ASP.NET',
    description: 'Uploading large files from Android to ASP.NET',
    url: 'https://www.codeproject.com/Articles/829950/Uploading-large-files-from-Android-to-ASP-NET',
    date: '2014-10-16'
  },
  {
    title: 'Hosted Javascript-WinRT duplex communication',
    description:
      '.NET WebView hosted Html/Javascript application on Winrt Platform and how to establish the communication between both sides',
    url: 'https://www.codeproject.com/Articles/1008161/Hosted-Javascript-WinRT-duplex-communication',
    date: '2014-07-09'
  }
];
export default publications;
