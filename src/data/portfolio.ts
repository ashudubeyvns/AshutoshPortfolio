export type Palette = { from: string; via: string; to: string; accent: string };
export const profile = {
  fullName: 'Ashutosh Dubey', displayName: 'Ashutosh Dubey', firstName: 'ASHUTOSH',
  seriesTag: 'THE SERIES', originalLabel: 'AN ASHUTOSH DUBEY ORIGINAL',
  role: 'Java Full Stack Developer',
  tagline: ['Java Full Stack Developer', 'Spring Boot', 'React.js'],
  intro: 'Java Full Stack Developer with hands-on experience designing REST APIs and responsive web applications using Java, Spring Boot, Spring Security, Hibernate/JPA, MySQL and React.js. Strong foundations in OOP, DSA, DBMS and microservice architectures, with experience across database modeling, build pipelines and cloud deployments.',
  location: 'India', email: 'ashutoshdubeyvns@gmail.com',
  links: { linkedin: '', github: 'https://github.com/ashudubeyvns' },
  resumePdf: '/assets/Ashutosh_Dubey_Resume.pdf',
  portrait: { src: '/assets/ashutosh-portrait-720.webp', srcSet: '/assets/ashutosh-portrait-420.webp 420w, /assets/ashutosh-portrait-720.webp 720w, /assets/ashutosh-portrait-1100.webp 1100w', alt: 'Ashutosh Dubey in a black suit' },
  interests: ['Full-Stack Engineering', 'Java & Spring Boot', 'System Design', 'Cloud & DevOps'],
};
export const education = [
 { school:'Galgotias University', place:'Greater Noida', degree:'Master of Computer Applications (MCA)', period:'2024 – 2026', score:'CGPA 8.55 / 10.0' },
 { school:'Global Group of Institutes', place:'Amritsar', degree:'Bachelor of Computer Applications (BCA)', period:'2021 – 2024', score:'CGPA 8.70 / 10.0' },
];
export const experience = [
 { company:'AICTE EduSkills', role:'Java Full Stack Developer Virtual Intern', place:'Virtual', period:'July 2025 – September 2025', points:['Engineered modular backend services using Java, Spring Boot, Spring Data JPA and Hibernate with MySQL persistence.','Implemented secure RESTful endpoints supporting CRUD operations across multiple application workflows.','Automated API validation using Postman collections and managed builds with Apache Maven and Git.','Collaborated in bi-weekly Agile sprints, sprint planning, reviews and Jira deliverable tracking.'] },
 { company:'TalentNext (Wipro)', role:'Java Full Stack Developer Trainee', place:'Virtual', period:'July 2025 – October 2025', points:['Developed full-stack modules by integrating Spring Boot backend micro-components with React.js single-page interfaces.','Applied enterprise OOP design patterns, transactional database modeling in MySQL and token-based endpoint security.','Built end-to-end integration flows across frontend UI, REST layer and persistence tiers under code reviews.'] },
];
export type Metric = { value:string; label:string };
export type Project = { id:string; title:string; year:string; genre:string; logline:string; stack:string[]; build:string[]; features:string[]; metrics:Metric[]; github?:string; palette:Palette; motif:'shield'|'flow'|'tenants' };
const red:Palette={from:'#24060b',via:'#6e0d1d',to:'#09070a',accent:'#ff3d5a'};
const blue:Palette={from:'#04121f',via:'#0f4c6e',to:'#05080d',accent:'#4cc9ff'};
const gold:Palette={from:'#1c1003',via:'#6b3c06',to:'#0a0806',accent:'#ffb547'};
const violet:Palette={from:'#120822',via:'#3d1a6e',to:'#07060c',accent:'#b98bff'};
export const projects:Project[]=[
 {id:'taskgenz',title:'TaskGenZ – Modern Workspace Platform',year:'Nov 2025 – Jan 2026',genre:'Collaboration • Full-Stack • SaaS',logline:'A modern collaboration workspace with Kanban boards, drag-and-drop workflows, threaded discussions and analytics.',stack:['Java 21','Spring Boot','JWT','React','TypeScript','MySQL','MongoDB'],build:['Architected a collaboration platform featuring Kanban boards, drag-and-drop workflows, threaded discussions and analytics.','Implemented dual persistence: relational data in MySQL via Spring Data JPA and activity streams in MongoDB.','Secured APIs with stateless JWT authentication, role-based access control and strict CORS configurations.','Configured multi-environment cloud pipelines, deploying the frontend on Vercel and backend on Railway via HTTPS.'],features:['Kanban boards and drag-and-drop workflows','Threaded discussions and analytics','MySQL + MongoDB dual persistence','JWT authentication and RBAC','Vercel frontend + Railway backend'],metrics:[{value:'2',label:'database technologies'},{value:'JWT',label:'stateless authentication'}],palette:red,motif:'shield'},
 {id:'college-erp',title:'College ERP Management System',year:'Aug 2025 – Oct 2025',genre:'Education • Enterprise • Full-Stack',logline:'An academic portal for student and faculty profiles, attendance, marks submission and reporting.',stack:['React.js','Java','Spring Boot','MySQL','MongoDB','REST APIs'],build:['Built an end-to-end academic portal managing student/faculty profiles, attendance logging, marks submission and reporting.','Engineered secure REST APIs and improved response latency through optimized SQL indexing and MongoDB aggregation.','Implemented role-based authentication, dashboard analytics and real-time database-driven statistics.','Deployed decoupled frontend and backend services on Vercel and Render.'],features:['Student and faculty profiles','Attendance and marks management','Reporting and dashboard analytics','Role-based authentication','SQL indexing and MongoDB aggregation'],metrics:[{value:'RBAC',label:'role-based access'},{value:'2',label:'data stores'}],palette:blue,motif:'tenants'},
 {id:'brainbrew',title:'BrainBrew – Café Web Application',year:'May 2025 – Jun 2025',genre:'Frontend • E-commerce • Web',logline:'An interactive, mobile-first café storefront with dynamic menu filtering and cart interactions.',stack:['JavaScript','HTML5','CSS3'],build:['Built an interactive, mobile-first web storefront featuring dynamic menu filtering, cart state management and modal dialogs.','Optimized asset delivery and DOM manipulations for fast loading and responsive experiences across mobile and desktop.'],features:['Dynamic menu filtering','Cart state management','Modal dialogs','Mobile-first responsive layout'],metrics:[{value:'Mobile',label:'first experience'},{value:'Fast',label:'optimized assets'}],github:'https://github.com/ashudubeyvns/BrainBrew',palette:gold,motif:'flow'},
 {id:'kidsapp',title:'KidsApp – Android Learning Application',year:'Jan 2025 – Mar 2025',genre:'Android • Education • Mobile',logline:'An interactive educational Android app with gamified learning modules and audio triggers.',stack:['Java','Android SDK','XML'],build:['Designed an interactive Android educational app featuring gamified learning modules, audio triggers and intuitive UI components.','Optimized activity lifecycles and layout hierarchies to maintain smooth screen transitions on target devices.'],features:['Gamified learning modules','Audio triggers','Intuitive Android UI','Lifecycle and layout optimization'],metrics:[{value:'Android',label:'mobile platform'},{value:'Java',label:'application language'}],palette:violet,motif:'flow'},
];
export type Achievement={id:string;title:string;org:string;detail:string;laurel:string;link?:string};
export const achievements:Achievement[]=[
 {id:'debugging',title:'1st Position',org:'Code Debugging Competition',detail:'Secured first position at Khalsa College, Amritsar.',laurel:'1st Place'},
 {id:'website',title:'2nd Position',org:'Website Building Competition',detail:'Secured second position at Golden Group of Institutes, Gurdaspur.',laurel:'2nd Place'},
];
export type Certification={issuer:string;name:string;link:string};
export const certifications:Certification[]=[];
export type Skill={name:string;mono:string;note?:string};
export type SkillCategory={id:string;title:string;subtitle:string;skills:Skill[]};
export const skillCategories:SkillCategory[]=[
 {id:'languages',title:'Languages',subtitle:'Programming foundations',skills:[{name:'Java',mono:'Jv',note:'Primary'},{name:'JavaScript',mono:'Js'},{name:'TypeScript',mono:'Ts'},{name:'Python',mono:'Py'},{name:'C++',mono:'C+'},{name:'C',mono:'C'}]},
 {id:'frontend',title:'Frontend',subtitle:'Interfaces & web applications',skills:[{name:'React.js',mono:'Re'},{name:'Redux',mono:'Rx'},{name:'TanStack Query',mono:'Tq'},{name:'Zustand',mono:'Zs'},{name:'HTML5',mono:'Ht'},{name:'CSS3',mono:'Cs'},{name:'Tailwind CSS',mono:'Tw'},{name:'Bootstrap',mono:'Bs'}]},
 {id:'backend',title:'Backend',subtitle:'APIs, security & persistence',skills:[{name:'Spring Boot',mono:'Sb'},{name:'Spring Data JPA',mono:'Jp'},{name:'Hibernate',mono:'Hb'},{name:'Spring Security',mono:'Ss'},{name:'RESTful APIs',mono:'Ap'},{name:'JWT Authentication',mono:'Jw'}]},
 {id:'databases',title:'Databases & Storage',subtitle:'Relational and NoSQL',skills:[{name:'MySQL',mono:'My'},{name:'MongoDB',mono:'Mg'}]},
 {id:'tools',title:'Cloud & DevOps',subtitle:'Build, test and ship',skills:[{name:'Docker',mono:'Dk'},{name:'AWS',mono:'Aw'},{name:'Git / GitHub',mono:'Gt'},{name:'Maven',mono:'Mv'},{name:'Postman',mono:'Pm'},{name:'Jira',mono:'Jr'}]},
 {id:'fundamentals',title:'CS Fundamentals',subtitle:'Engineering foundations',skills:[{name:'OOP',mono:'Oo'},{name:'DSA',mono:'Ds'},{name:'DBMS',mono:'Db'},{name:'Operating Systems',mono:'Os'}]},
];
export const skillEvidence:Record<string,string[]>={Java:['TaskGenZ','College ERP','KidsApp','Wipro TalentNext'],React:['TaskGenZ','College ERP','Wipro TalentNext'],'Spring Boot':['TaskGenZ','College ERP','Wipro TalentNext'],MySQL:['TaskGenZ','College ERP','EduSkills'],MongoDB:['TaskGenZ','College ERP'],TypeScript:['TaskGenZ'],Docker:['Technical skills'],'AWS':['Technical skills'],'JWT Authentication':['TaskGenZ'],JavaScript:['BrainBrew']};
export type Episode={code:string;title:string;description:string;tags:string[];runtime:string;palette:Palette};
export type Season={number:number;title:string;period:string;synopsis:string;episodes:Episode[]};
export const seasons:Season[]=[
 {number:1,title:'The Foundation',period:'2021 – 2024',synopsis:'Building the foundation in computer applications at Global Group of Institutes, Amritsar.',episodes:[{code:'S01 E01',title:'The BCA Chapter',description:'Bachelor of Computer Applications at Global Group of Institutes, Amritsar — CGPA 8.70/10.0.',tags:['BCA','CGPA 8.70'],runtime:'2021 – 2024',palette:gold}]},
 {number:2,title:'The MCA Chapter',period:'2024 – 2026',synopsis:'Postgraduate computer applications studies at Galgotias University, Greater Noida.',episodes:[{code:'S02 E01',title:'The Postgraduate',description:'Master of Computer Applications at Galgotias University — CGPA 8.55/10.0.',tags:['MCA','CGPA 8.55'],runtime:'2024 – 2026',palette:violet}]},
 {number:3,title:'Industry Exposure',period:'2025',synopsis:'Java full-stack training and internship experiences.',episodes:[{code:'S03 E01',title:'EduSkills',description:'Java Full Stack Developer Virtual Intern — Java, Spring Boot, JPA, Hibernate, MySQL, REST and Agile workflows.',tags:['Java','Spring Boot','MySQL'],runtime:'Jul 2025 – Sep 2025',palette:blue},{code:'S03 E02',title:'TalentNext · Wipro',description:'Java Full Stack Developer Trainee — Spring Boot backend components, React interfaces, MySQL and token-based security.',tags:['Spring Boot','React','JWT'],runtime:'Jul 2025 – Oct 2025',palette:red}]},
 {number:4,title:'Building Products',period:'2025 – 2026',synopsis:'Developing real-world platforms across collaboration, education, web and Android.',episodes:[{code:'S04 E01',title:'TaskGenZ',description:'Collaboration workspace with Kanban, threaded discussions, analytics and dual-database persistence.',tags:['Java 21','React','MySQL','MongoDB'],runtime:'Nov 2025 – Jan 2026',palette:red},{code:'S04 E02',title:'College ERP',description:'Academic portal for profiles, attendance, marks, reporting and role-based dashboards.',tags:['React','Spring Boot','REST'],runtime:'Aug 2025 – Oct 2025',palette:blue},{code:'S04 E03',title:'BrainBrew & KidsApp',description:'A responsive café web application and a gamified Android learning application.',tags:['JavaScript','HTML/CSS','Android'],runtime:'2025',palette:gold}]},
];
export type TopPick={label:string;title:string;detail:string;palette:Palette};
export const topPicks:TopPick[]=[
 {label:'Core language',title:'Java',detail:'Core & Advanced · Java 17/21',palette:red},
 {label:'Flagship project',title:'TaskGenZ',detail:'Modern collaboration workspace',palette:blue},
 {label:'Enterprise build',title:'College ERP',detail:'Academic portal and dashboards',palette:violet},
 {label:'Education',title:'MCA',detail:'Galgotias University · 2024–2026',palette:gold},
 {label:'Industry training',title:'Wipro TalentNext',detail:'Java Full Stack Developer Trainee',palette:red},
 {label:'Virtual internship',title:'AICTE EduSkills',detail:'Java Full Stack Developer',palette:blue},
 {label:'Achievement',title:'1st Position',detail:'Code Debugging Competition',palette:gold},
 {label:'Achievement',title:'2nd Position',detail:'Website Building Competition',palette:violet},
 {label:'Backend',title:'Spring Boot',detail:'JPA · Hibernate · Security · REST',palette:blue},
 {label:'Databases',title:'MySQL + MongoDB',detail:'Relational and NoSQL persistence',palette:red},
];
export type IntroSlide={kicker:string;title:string;lines:string[];chips?:string[]};
export const introSlides:IntroSlide[]=[
 {kicker:'Education',title:'MCA · 2024–2026',lines:['Galgotias University, Greater Noida · CGPA 8.55/10','BCA · Global Group of Institutes, Amritsar · CGPA 8.70/10'],chips:['MCA','BCA']},
 {kicker:'Core stack',title:'Java first.',lines:['Java 17/21 · Spring Boot · Spring Security · Hibernate/JPA','React.js · TypeScript · MySQL · MongoDB'],chips:['Java','Spring Boot','React','MySQL']},
 {kicker:'Experience',title:'The Training Arc',lines:['Java Full Stack Developer Virtual Intern · AICTE EduSkills','Java Full Stack Developer Trainee · TalentNext (Wipro)']},
 {kicker:'Projects',title:'Four Originals',lines:['TaskGenZ — Modern Workspace Platform','College ERP Management System','BrainBrew — Café Web Application','KidsApp — Android Learning Application']},
 {kicker:'Recognition',title:'Competition Highlights',lines:['1st Position — Code Debugging Competition, Khalsa College','2nd Position — Website Building Competition, Gurdaspur']},
 {kicker:'Current mission',title:'Keep Building.',lines:['Full-stack engineering · Java ecosystem · Cloud & DevOps']},
];
export type ProfileId='ashutosh'|'recruiter'|'developer'|'creative';
export type SectionId='about'|'journey'|'originals'|'picks'|'skills'|'moments'|'story';
export const viewerProfiles:{id:ProfileId;name:string;blurb:string;color:string;order:SectionId[]}[]=[
 {id:'ashutosh',name:'Ashutosh',blurb:'The complete portfolio series',color:'#e5132b',order:['about','journey','originals','picks','skills','moments','story']},
 {id:'recruiter',name:'Recruiter',blurb:'Experience, skills & resume first',color:'#4cc9ff',order:['story','moments','skills','originals','about','journey','picks']},
 {id:'developer',name:'Developer',blurb:'Projects, stack & GitHub first',color:'#46e3a8',order:['originals','skills','journey','moments','about','picks','story']},
 {id:'creative',name:'Creative',blurb:'Story, highlights & projects first',color:'#ffb547',order:['journey','picks','originals','moments','about','skills','story']},
];
export const sectionMeta:Record<SectionId,{nav:string;card:string;meta:string;palette:Palette}>={
 about:{nav:'About',card:'About Me',meta:'The Pilot • Education & training',palette:violet},
 journey:{nav:'Journey',card:'My Journey',meta:`${seasons.length} Seasons • ${seasons.reduce((n,s)=>n+s.episodes.length,0)} Episodes`,palette:gold},
 originals:{nav:'Originals',card:'My Projects',meta:`${projects.length} Originals`,palette:red},
 picks:{nav:'Top Picks',card:'Top Picks',meta:'Highlights from my journey',palette:blue},
 skills:{nav:'Skills',card:'My Skills',meta:`${skillCategories.length} Categories`,palette:blue},
 moments:{nav:'Moments',card:'Achievements',meta:`${achievements.length} Highlights`,palette:red},
 story:{nav:'Resume',card:'The Full Story',meta:'Resume • View & download',palette:violet},
};
