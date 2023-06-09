export interface Talk {
  date: string
  title: string
  description: string
  url: string
}

export interface Publication {
  url: string
  title: string
  description: string
  date: string
}

export interface Project {
  url: string
  title: string
  description: string
  techStack: string
}

export interface OnlineId {
  name: string
  url: string
}

export interface PhilosophyValue {
  value: string
  sub: string[]
}

export interface Education {
  title: string
}

export interface WorkExperience {
  company: string
  title: string
  date: string
  description: string
  techStack: string
  achievements: string[]
}

export interface Contact {
  title: string
  pgpPublicKey: string
  contactMessage: string
  email: string
  pgpKey: string
}

export interface Resource {
  url: string
  title: string
  description: string
  tags: string[]
}

export interface PersonalStatement {
  title: string
  content: string
}

export interface CodeSnippet {
  text: string
  title: string
  language: string
}
