import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  BarChart3,
  Boxes,
  BrainCircuit,
  Bug,
  CalendarClock,
  ClipboardList,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  Focus,
  Handshake,
  Layers,
  MessagesSquare,
  Puzzle,
  Repeat,
  Rocket,
  ScanSearch,
  Search,
  Server,
  Sparkles,
  TestTubeDiagonal,
  TrendingUp,
  UserRoundCheck,
  Video,
  Workflow,
} from 'lucide-react'
import type { Faq, ProcessStep } from './content'

export interface IconItem {
  title: string
  text: string
  icon: LucideIcon
  to?: string
}

/* ------------------------------------------------------------------ */
/* Professional Technical Support                                       */
/* ------------------------------------------------------------------ */

export const PRO_COVERAGE: IconItem[] = [
  { title: 'Software development and debugging', text: 'Programming help, code reviews and fixing defects.', icon: Code2, to: '/services/software-development' },
  { title: 'Application troubleshooting', text: 'Reproducing and isolating issues in running applications.', icon: Bug, to: '/services/software-development' },
  { title: 'Data engineering and pipelines', text: 'Failing jobs, slow transformations and orchestration problems.', icon: Workflow, to: '/services/data-engineering' },
  { title: 'Data analytics and reporting', text: 'SQL analysis, dashboards and report logic.', icon: BarChart3, to: '/services/data-analytics-bi' },
  { title: 'Database queries and performance', text: 'Query tuning, schema questions and stored procedures.', icon: Database, to: '/services/database-development' },
  { title: 'Cloud and deployment troubleshooting', text: 'Deployments, permissions and environment issues on AWS, Azure or GCP.', icon: Cloud, to: '/services/cloud-services' },
  { title: 'AI application integration', text: 'Working with model APIs, retrieval and AI features.', icon: Sparkles, to: '/services/ai-development' },
  { title: 'Testing and quality assurance', text: 'Test automation, API testing and test design.', icon: TestTubeDiagonal, to: '/services/software-testing-qa' },
  { title: 'Enterprise technologies', text: 'SAP and mainframe topics, where relevant expertise is available.', icon: Boxes, to: '/services/sap-enterprise-technologies' },
]

export const PRO_STEPS: ProcessStep[] = [
  {
    title: 'Share your challenge',
    description: 'Tell us about the technical challenge and the technology stack involved.',
    icon: ClipboardList,
    outcome: 'A short summary is enough',
  },
  {
    title: 'Discuss the requirement',
    description: 'We arrange a meeting to understand the problem, its context and what help you need.',
    icon: CalendarClock,
    outcome: 'Clarity on the requirement',
  },
  {
    title: 'Identify a specialist',
    description: 'We look for a potentially suitable specialist whose skills align with your stack.',
    icon: ScanSearch,
    outcome: 'A relevant specialist proposed',
  },
  {
    title: 'Agree the approach',
    description: 'The proposed approach, scope and terms are discussed and agreed before proceeding.',
    icon: UserRoundCheck,
    outcome: 'Nothing proceeds without agreement',
  },
]

export const PRO_PREPARE = [
  'A short summary of the problem you are facing',
  'What you expected to happen, and what happens instead',
  'Relevant error messages or log excerpts (with sensitive values removed)',
  'The technologies, versions and environment involved',
  'Any deadline or time-zone constraints for meetings',
]

export const PRO_FAQS: Faq[] = [
  {
    q: 'What kind of technical help can I request?',
    a: 'Common requests include debugging, project-related guidance, code reviews, data pipeline issues, SQL and database questions, cloud deployment problems and test automation. Availability for a specific technology is confirmed for each requirement.',
  },
  {
    q: 'Can I discuss my requirement before committing?',
    a: 'Yes. We always start with a discussion, and the approach, scope and terms are agreed before anything proceeds.',
  },
  {
    q: 'What should I avoid sharing?',
    a: 'Please do not share passwords, production credentials, confidential employer data or sensitive system details through our forms or messages.',
  },
]

/* ------------------------------------------------------------------ */
/* Agency Partnerships                                                  */
/* ------------------------------------------------------------------ */

export const AGENCY_VALUE: IconItem[] = [
  {
    title: 'Support more client opportunities',
    text: 'When new projects arrive, access to suitable additional technical capacity can help you assess whether your agency can take on more work.',
    icon: TrendingUp,
  },
  {
    title: 'Address specialized skill gaps',
    text: 'Explore resources across development, testing, data, AI, cloud, databases, SAP and mainframe when a project needs skills you lack in-house.',
    icon: Puzzle,
  },
  {
    title: 'Extend delivery capacity when needed',
    text: 'Discuss additional expertise for individual projects or changing requirements, without assuming permanent hiring for every need.',
    icon: Layers,
  },
  {
    title: 'Focus on partnerships and growth',
    text: 'With an appropriate technical resource partner, your team may have more room to focus on client relationships, new partnerships and business development.',
    icon: Focus,
  },
]

export const AGENCY_STEPS: ProcessStep[] = [
  {
    title: 'Understand the requirement',
    description: "We learn about your agency's need and how the resource will support your client.",
    icon: Handshake,
    outcome: 'Your goals, understood',
  },
  {
    title: 'Clarify scope and skills',
    description: 'We clarify the end-client scope, technology, required skills and expectations.',
    icon: ClipboardList,
    outcome: 'A precise skill profile',
  },
  {
    title: 'Identify professionals',
    description: 'We identify suitable potential professionals from our network.',
    icon: Search,
    outcome: 'Relevant candidates proposed',
  },
  {
    title: 'Technical evaluation',
    description: 'We arrange a technical discussion so you can assess suitability.',
    icon: Video,
    outcome: 'You evaluate before allocation',
  },
  {
    title: 'Coordinate allocation',
    description: 'Allocation is coordinated after mutual approval and agreement on terms.',
    icon: UserRoundCheck,
    outcome: 'Agreed terms, clear next steps',
  },
]

export const AGENCY_SCENARIOS = [
  'A new client project requires a technology your agency does not currently have in-house.',
  'An existing delivery team needs an additional specialist for a defined period.',
  'Several active projects are competing for limited technical capacity.',
  'You want to pursue more opportunities without permanently expanding every specialist capability.',
]

export const AGENCY_FAQS: Faq[] = [
  {
    q: 'How does an agency partnership work?',
    a: 'You share a requirement, we clarify the scope and skills, propose suitable professionals, arrange a technical evaluation, and coordinate allocation after mutual approval and agreement on terms.',
  },
  {
    q: 'Do we need an ongoing commitment?',
    a: 'Requirements can be discussed individually. Engagement terms are agreed for each requirement rather than assumed in advance.',
  },
  {
    q: 'Can we evaluate a professional before allocation?',
    a: 'Yes. A technical discussion with the proposed professional takes place before anything is allocated.',
  },
]

/* ------------------------------------------------------------------ */
/* Hire Freelance IT Resources                                          */
/* ------------------------------------------------------------------ */

export const RESOURCE_ROLES: IconItem[] = [
  { title: 'Software Developers', text: 'Frontend, backend and full-stack', icon: Code2, to: '/services/software-development' },
  { title: 'QA and Automation Testers', text: 'Manual, automation and API testing', icon: TestTubeDiagonal, to: '/services/software-testing-qa' },
  { title: 'Data Engineers', text: 'Pipelines, ETL/ELT and warehousing', icon: Workflow, to: '/services/data-engineering' },
  { title: 'Data Analysts and BI Specialists', text: 'Reporting, dashboards and SQL', icon: BarChart3, to: '/services/data-analytics-bi' },
  { title: 'Data Scientists and ML Specialists', text: 'Modelling and evaluation', icon: BrainCircuit, to: '/services/data-science-machine-learning' },
  { title: 'AI Developers', text: 'LLM features and integrations', icon: Sparkles, to: '/services/ai-development' },
  { title: 'Cloud Professionals', text: 'AWS, Azure and GCP', icon: Cloud, to: '/services/cloud-services' },
  { title: 'Database Developers', text: 'Design, SQL and optimization', icon: Database, to: '/services/database-development' },
  { title: 'SAP Specialists', text: 'SAP technical work', icon: Boxes, to: '/services/sap-enterprise-technologies' },
  { title: 'Mainframe Professionals', text: 'Legacy maintenance and development', icon: Server, to: '/services/mainframe-support' },
]

export const HIRE_BENEFITS: IconItem[] = [
  { title: 'Requirement-driven matching', text: 'Resources are proposed for your specific scope, stack and experience needs.', icon: BadgeCheck },
  { title: 'Access to relevant skills', text: 'One point of contact across a wide range of technology domains.', icon: Layers },
  { title: 'Evaluate before allocation', text: 'Meet the proposed professional and assess their capabilities first.', icon: Video },
  { title: 'Flexible arrangements', text: 'Discuss project-based or ongoing engagements to suit the work.', icon: Repeat },
  { title: 'Clear scope and terms', text: 'Engagement scope and terms are agreed before work begins.', icon: FileCheck2 },
  { title: 'Direct communication', text: 'Talk to our team directly throughout the process.', icon: MessagesSquare },
]

export const HIRE_STEPS: ProcessStep[] = [
  {
    title: 'Share the requirement',
    description: 'Tell us about the role, project and the skills you need.',
    icon: ClipboardList,
    outcome: 'Your need, captured',
  },
  {
    title: 'Discuss scope and timing',
    description: 'We discuss scope, skills, timing and your engagement preferences.',
    icon: CalendarClock,
    outcome: 'A clear resource profile',
  },
  {
    title: 'Review and evaluate',
    description: 'Review a suitable potential resource and evaluate their technical capabilities.',
    icon: Video,
    outcome: 'You decide on suitability',
  },
  {
    title: 'Confirm the engagement',
    description: 'Engagement details are confirmed after mutual approval.',
    icon: Rocket,
    outcome: 'Agreed details, then kick-off',
  },
]

export const HIRE_FAQS: Faq[] = [
  {
    q: 'How quickly can a resource be available?',
    a: 'Availability and timing depend on the specific skills and scope required. We confirm this during the matching stage rather than promising fixed timelines.',
  },
  {
    q: 'Can we engage a resource for an ongoing period?',
    a: 'Yes. Project-based and ongoing arrangements can both be discussed, and terms are agreed before allocation.',
  },
  {
    q: 'Which roles can we request?',
    a: 'Common requests include developers, testers, data engineers, analysts, data scientists, AI developers, cloud, database, SAP and mainframe professionals.',
  },
]
