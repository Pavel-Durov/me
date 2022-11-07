import { Publication } from 'model'

const publications: Publication[] = [
  {
    title: 'Graceful Termination in K8S - SIGTERM and UNIX processes',
    description: 'In this article, we\'re going to cover UNIX process signals and SIGTERM signals in particular. We will cover how to handle them with practical examples using Node, TypeScript, Docker and Kind local cluster.',
    url: 'https://blog.p3ld3v.dev/graceful-termination-in-k8s-sigterm-and-unix-processes',
    date: '2022-11-07'
  },
  {
    title: 'macOS FS vs Linux FS - case sensitivity',
    description: 'In this article, I will overview the case-sensitivity difference between macOS default filesystem (FS) and Linux filesystem with some practical examples and gotchas',
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
    description: 'This article will cover the data migration process between two data stores, the evaluation of possible alternatives, and final outcome. We will cover the difference between sequential, asynchronous, multi-threaded, and distributed applications. And finally, we will overview the practical application of Helm and K8S jobs for data migration tasks',
    url: 'https://blog.p3ld3v.dev/db-data-migration-using-k8s-jobs-helm',
    date: '2022-10-29'
  },
  {
    title: 'PyPy,Python and performance benchmarking',
    description: 'My short experience with the PyPy that I was only recently exposed to. This article complements the Writing an Interpreter with PyPy tutorial from 2011',
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
    description: 'brief overview on the basic concepts of mvvmcross platform. We will explore the mvvmcross project architecture and its classes',
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
    description: '.NET WebView hosted Html/Javascript application on Winrt Platform and how to establish the communication between both sides',
    url: 'https://www.codeproject.com/Articles/1008161/Hosted-Javascript-WinRT-duplex-communication',
    date: '2014-07-09'
  }
]
export default publications
