const TECH_TYPE_LANGUAGE = {
  name: 'Language',
}
const TECH_TYPE_LIB = {
  name: 'Library',
}
const TECH_TYPE_FRAMEWORK = {
  name: 'Framework',
}
const TECH_TYPE_TOOL = { name: 'Tool' }
const TECHNOLOGIES = {
  git: { name: ' Git', type: TECH_TYPE_TOOL },
  vue: { name: ' Vue.js', type: TECH_TYPE_LIB },
  nextjs: { name: 'Next.js', type: TECH_TYPE_FRAMEWORK },
  dotnet: { name: '󰪮 .NET', type: TECH_TYPE_FRAMEWORK },
  sql: { name: ' SQL', type: TECH_TYPE_LANGUAGE },
  go: { name: ' golang', type: TECH_TYPE_LANGUAGE },
  csharp: { name: 'C#', type: TECH_TYPE_LANGUAGE },
  docker: { name: ' Docker', type: TECH_TYPE_TOOL },
  raylib: { name: 'Raylib', type: TECH_TYPE_LIB },
  asp: { name: ' ASP.NET', type: TECH_TYPE_FRAMEWORK },
  bootstrap: { name: ' Bootstrap', type: TECH_TYPE_LIB },
  tailwind: { name: ' Tailwindcss', type: TECH_TYPE_LIB },
  python: { name: ' Python', type: TECH_TYPE_LANGUAGE },
  c: { name: ' C', type: TECH_TYPE_LANGUAGE },
  meson: { name: 'Meson', type: TECH_TYPE_TOOL },
  gtk: { name: ' GTK', type: TECH_TYPE_LIB },
  libadwaita: { name: 'Libadwaita', type: TECH_TYPE_LIB },
  githubPages: { name: ' GitHub Pages', type: TECH_TYPE_TOOL },
  html: { name: ' HTML', type: TECH_TYPE_LANGUAGE },
  bash: { name: ' Bash', type: TECH_TYPE_LANGUAGE },
  wpf: { name: 'WPF', type: TECH_TYPE_FRAMEWORK },
}

const PROJECTS = [
  {
    name: 'DomraSinForms',
    description:
      'Web application for creating forms and surveys. Built as diploma project',
    url: 'https://github.com/katy248/domrasinforms',
    technologies: [
      TECHNOLOGIES.dotnet,
      TECHNOLOGIES.sql,
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.asp,
    ],
  },
  {
    name: 'Not a Word About Staerf',
    // description: '',
    url: 'https://github.com/Katy248/nawas',
    previewUrl: 'https://патриоты-стае.рф',
    technologies: [TECHNOLOGIES.githubPages, TECHNOLOGIES.html],
  },
  {
    name: 'Chill site',
    description: 'Custom-made project, developed in a hurry',
    url: 'https://gitlab.com/side-projects133505/chill-site',
    technologies: [TECHNOLOGIES.tailwind, TECHNOLOGIES.nextjs],
  },
  {
    contributor: true,
    name: 'redoswelcome-gnome',
    description: 'Welcome app for RED OS',
    url: 'http://git.red-soft.biz/vladlen.murylyov/redoswelcome-gnome',
    technologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.gtk,
      TECHNOLOGIES.libadwaita,
    ],
  },
  {
    name: 'Download center',
    description: 'Download center for RED ADM, simple GTK desktop app',
    technologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.gtk,
      TECHNOLOGIES.libadwaita,
      TECHNOLOGIES.meson,
    ],
  },
  {
    name: 'RAS',
    description:
      'Router administration system. Controller for router with simple web UI',
    url: 'https://gitlab.com/ras995910',
    technologies: [TECHNOLOGIES.go, TECHNOLOGIES.vue, TECHNOLOGIES.tailwind],
  },
  {
    name: 'ArtGallery',
    description: 'Web app for sharing images',
    url: 'https://gitlab.com/side-projects133505/art-gallery',
    technologies: [
      TECHNOLOGIES.vue,
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.go,
      TECHNOLOGIES.sql,
    ],
  },
  {
    name: 'Flood it',
    description: 'Simple game made with go and raylib',
    url: 'https://github.com/katy248/flood-it',
    technologies: [TECHNOLOGIES.go, TECHNOLOGIES.raylib],
  },
  {
    contributor: true,
    name: 'Gruvbox wallpapers',
    description:
      'Website with collection of wallpapers for gruvbox color pallette. I added dark/light theme and switcher for them',
    url: 'https://github.com/AngelJumbo/gruvbox-wallpapers',
    previewUrl: 'https://gruvbox-wallpapers.pages.dev',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.bash],
  },
  {
    contributor: true,
    name: 'usbip-gui',
    description: 'I added localization and meson build system',
    url: 'https://github.com/K-Francis/usbip-gui',
    technologies: [TECHNOLOGIES.meson, TECHNOLOGIES.python],
  },
  {
    name: 'gravatar',
    description: 'Gravatar avatar url generator in go',
    url: 'https://github.com/katy248/gravatar',
    technologies: [TECHNOLOGIES.go],
  },
  {
    name: 'R34 API Client',
    description: 'Rule34.xxx API wrapper in C#',
    url: 'https://github.com/katy248/r34-api',
    technologies: [TECHNOLOGIES.dotnet, TECHNOLOGIES.csharp],
  },
  {
    name: 'GoldCom',
    description: 'Coursework, stock management system for gold manufacturing',
    url: 'https://github.com/katy248/goldcom',
    technologies: [
      TECHNOLOGIES.dotnet,
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.sql,
      TECHNOLOGIES.wpf,
    ],
  },
  {
    name: 'Neuro-hero',
    description: 'Simple visual novel game, remake of lost game from 2020',
    url: 'https://github.com/katy248/neuro-hero',
    technologies: [TECHNOLOGIES.c, TECHNOLOGIES.meson, TECHNOLOGIES.raylib],
  },
  {
    name: 'Yugh78 site',
    description: 'Personal website for my friend',
    previewUrl: 'https://yugh78.github.io',
    url: 'https://github.com/yugh78/yugh78.github.io',
    technologies: [
      TECHNOLOGIES.vue,
      TECHNOLOGIES.githubPages,
      TECHNOLOGIES.tailwind,
    ],
  },
  {
    contributor: true,
    name: 'fastfetch',
    description: 'I added RED OS logo',
    url: 'https://github.com/fastfetch-cli/fastfetch',
  },
]
import { LINKS } from './links'

export { TECHNOLOGIES, PROJECTS, LINKS }
