export interface ExperienceI {
  position: string;
  company: string;
  dates: string;
  summary: string;
  bullets: string[];
}

export const EXPERIENCE_DATA: ExperienceI[] = [
  {
    position: 'Software Engineer – JavaScript',
    company: 'Improving (Autodesk)',
    dates: 'May 2024 – Present',
    summary:
      'Key role in the modernization of a legacy enterprise application by migrating to a React-based architecture, while ensuring system stability and user support.',
    bullets: [
      'Resolved critical bugs and performance issues to maintain uninterrupted business operations.',
      'Delivered new features within the legacy codebase, balancing evolving requirements with backward compatibility.',
      'Implemented React modules and modern frontend tooling as part of the architectural migration strategy.',
      'Collaborated with cross-functional teams to design reusable components and scalable patterns.',
      'Provided direct technical support via internal channels, ensuring high user satisfaction.',
      'Participated in code reviews and knowledge-sharing sessions to elevate team alignment and code quality.',
    ],
  },
  {
    position: 'Full Stack Application Developer',
    company: 'IBM',
    dates: 'October 2020 – May 2024',
    summary:
      'Developed and migrated internal applications using modern frontend and backend frameworks, integrating IBM Cloud technologies.',
    bullets: [
      'Rebuilt legacy systems to improve usability and address organizational behavioral challenges using React/Redux and Express.js.',
      'Engineered event-driven microservices with IBM Event Streams (Kafka) to automate workflows.',
      'Streamlined development workflows by configuring and monitoring IBM Cloud resources.',
    ],
  },
  {
    position: 'Java Developer',
    company: 'Tata Consultancy Services',
    dates: 'February 2019 – October 2020',
    summary:
      'Maintained and enhanced backend and frontend systems for financial services, primarily using Java.',
    bullets: [
      'Supported credit card and loan systems by implementing client-requested updates.',
      'Partnered with the Learning & Development team to build internal tools using HTML5, CSS3, JavaScript, and jQuery.',
      'Led knowledge-sharing sessions to onboard teammates with emerging technologies.',
      'Served on the onboarding team, mentoring new developers and resolving early-stage technical queries.',
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Unosquare',
    dates: 'September 2016 – August 2018',
    summary:
      'Developed internal and external applications using a variety of technologies and devices, including Raspberry Pi.',
    bullets: [
      'Built the company\'s main website using HTML5, CSS3, JavaScript, and C# .NET.',
      'Maintained and enhanced both private and open-source projects using Angular, React, .NET Core, and Raspberry Pi.',
      'Earned Microsoft certifications: Exam 480 (Programming in HTML5 with JavaScript and CSS3), Exam 486 (Developing ASP.NET MVC Web Applications), and Exam 487 (Developing Microsoft Azure and Web Services).',
    ],
  },
];
