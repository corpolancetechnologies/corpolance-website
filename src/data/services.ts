import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Server,
  Sparkles,
  TestTubeDiagonal,
  Workflow,
  Boxes,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  /** Short name used in forms, footer links and messages */
  shortTitle: string
  /** Compact label for the in-page category navigation */
  navLabel: string
  icon: LucideIcon
  /** One-line value statement for cards */
  summary: string
  /** Longer overview for the Services page */
  overview: string
  capabilities: string[]
  examples: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'software-development',
    navLabel: 'Development',
    title: 'Software Development',
    shortTitle: 'Software Development',
    icon: Code2,
    summary: 'Developers who can step into your codebase and move features, fixes and integrations forward.',
    overview:
      'Support across the application stack — from user interfaces to services and the APIs that connect them — with professionals matched to the frameworks and languages you actually use.',
    capabilities: ['Frontend development', 'Backend development', 'Full-stack development', 'API development and integrations'],
    examples: [
      'Adding a feature to an existing React, Angular or Java application',
      'Designing or integrating REST and third-party APIs',
      'Debugging a production issue in a backend service',
      'Reviewing code structure before a release',
    ],
  },
  {
    id: 'testing-qa',
    navLabel: 'Testing & QA',
    title: 'Software Testing & QA',
    shortTitle: 'Software Testing and QA',
    icon: TestTubeDiagonal,
    summary: 'Structured testing support that helps releases go out with fewer surprises.',
    overview:
      'Manual and automated testing expertise to strengthen coverage, stabilise test suites and bring clarity to quality processes.',
    capabilities: ['Manual testing', 'Automation testing', 'API testing', 'Test planning and quality assurance'],
    examples: [
      'Building or fixing a Selenium, Cypress or Playwright suite',
      'API test coverage with Postman or REST-assured',
      'Writing test plans and cases for a new module',
      'Troubleshooting flaky automated tests',
    ],
  },
  {
    id: 'data-engineering',
    navLabel: 'Data Engineering',
    title: 'Data Engineering',
    shortTitle: 'Data Engineering',
    icon: Workflow,
    summary: 'Reliable pipelines and integrations that move data where your teams need it.',
    overview:
      'Hands-on help designing, building and troubleshooting batch and streaming data workflows on modern and established platforms.',
    capabilities: ['ETL and ELT pipelines', 'Data integration', 'Data warehousing', 'Data processing workflows'],
    examples: [
      'Optimising a slow Spark or PySpark job',
      'Building pipelines with Airflow, ADF or dbt',
      'Modelling data in Snowflake, Redshift or BigQuery',
      'Streaming ingestion with Kafka',
    ],
  },
  {
    id: 'data-analytics',
    navLabel: 'Analytics & BI',
    title: 'Data Analytics & BI',
    shortTitle: 'Data Analytics',
    icon: BarChart3,
    summary: 'Turn raw data into reporting and dashboards people can rely on.',
    overview:
      'Analysis, SQL and business intelligence support — from shaping the data model to building the dashboards stakeholders use.',
    capabilities: ['Data analysis', 'Reporting and dashboards', 'SQL and data modelling', 'Business intelligence'],
    examples: [
      'Building Power BI or Tableau dashboards',
      'Writing and tuning analytical SQL',
      'Designing a reporting data model',
      'Validating metrics and report logic',
    ],
  },
  {
    id: 'data-science-ml',
    navLabel: 'Data Science & ML',
    title: 'Data Science & Machine Learning',
    shortTitle: 'Data Science and Machine Learning',
    icon: BrainCircuit,
    summary: 'Practical modelling support, from exploratory analysis to evaluated ML workflows.',
    overview:
      'Guidance on building, evaluating and operationalising models using Python and common ML tooling, with attention to sound methodology.',
    capabilities: ['Data analysis and modelling', 'Predictive analytics', 'Machine learning workflows', 'Model evaluation'],
    examples: [
      'Feature engineering and model selection',
      'Improving model accuracy and evaluation metrics',
      'Building training pipelines in Python',
      'Explaining model behaviour to stakeholders',
    ],
  },
  {
    id: 'ai-development',
    navLabel: 'AI',
    title: 'AI Development & Integration',
    shortTitle: 'AI Development',
    icon: Sparkles,
    summary: 'Bring generative AI and LLM capabilities into real applications and workflows.',
    overview:
      'Support for designing and integrating AI features — LLM-powered applications, retrieval pipelines and automation of repetitive work.',
    capabilities: ['AI application development', 'Generative AI integrations', 'LLM-powered applications', 'Intelligent workflow automation'],
    examples: [
      'Building a retrieval-augmented (RAG) assistant',
      'Integrating LLM APIs into an existing product',
      'Prompt design and output evaluation',
      'Automating document or support workflows',
    ],
  },
  {
    id: 'sap-enterprise',
    navLabel: 'SAP & Enterprise',
    title: 'SAP & Enterprise Technologies',
    shortTitle: 'SAP and Enterprise Technologies',
    icon: Boxes,
    summary: 'Technical support for enterprise platforms where specialised knowledge matters.',
    overview:
      'Assistance with SAP-related technical work and other enterprise applications, including development, integration and troubleshooting.',
    capabilities: ['SAP-related technical support', 'Enterprise application support', 'Technical integration and development'],
    examples: [
      'ABAP development and debugging',
      'Integration between SAP and other systems',
      'Troubleshooting enterprise application issues',
      'Understanding an unfamiliar enterprise module',
    ],
  },
  {
    id: 'mainframe',
    navLabel: 'Mainframe',
    title: 'Mainframe Technologies',
    shortTitle: 'Mainframe Technologies',
    icon: Server,
    summary: 'Experienced help for the legacy systems that still run critical operations.',
    overview:
      'Support for maintaining, extending and troubleshooting mainframe applications from professionals familiar with these environments.',
    capabilities: ['Legacy application maintenance', 'Mainframe development', 'Debugging and troubleshooting'],
    examples: [
      'COBOL, JCL and DB2 development',
      'Investigating batch job failures',
      'Understanding legacy program logic',
      'Supporting modernisation discussions',
    ],
  },
  {
    id: 'database-development',
    navLabel: 'Databases',
    title: 'Database Development',
    shortTitle: 'Database Development',
    icon: Database,
    summary: 'Well-designed schemas and efficient queries that keep applications responsive.',
    overview:
      'Database design, SQL development and performance work across relational platforms, plus support during migrations.',
    capabilities: ['Database design', 'SQL development', 'Query optimization', 'Database migration support'],
    examples: [
      'Tuning slow queries and indexes',
      'Writing stored procedures in SQL Server, Oracle or PostgreSQL',
      'Designing a normalised schema',
      'Planning and validating a database migration',
    ],
  },
  {
    id: 'cloud-services',
    navLabel: 'Cloud',
    title: 'Cloud Services',
    shortTitle: 'Cloud Services',
    icon: Cloud,
    summary: 'Deploy, run and optimise workloads across the major cloud platforms.',
    overview:
      'Guidance and hands-on support for cloud architecture, deployment and optimisation on AWS, Microsoft Azure and Google Cloud Platform.',
    capabilities: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Cloud deployment and optimization'],
    examples: [
      'Setting up CI/CD and infrastructure as code',
      'Troubleshooting deployments and permissions',
      'Containerising and deploying applications',
      'Reviewing cloud usage for cost and performance',
    ],
  },
]

export const SERVICE_OPTIONS = [...SERVICES.map((s) => s.shortTitle), 'Other / Not sure yet']

export function serviceById(id: string | null | undefined): Service | undefined {
  return SERVICES.find((s) => s.id === id)
}

/** Contact link that preselects an enquiry type and/or service. */
export function contactHref(opts: { type?: 'agency' | 'individual' | 'organization'; service?: string } = {}): string {
  const params = new URLSearchParams()
  if (opts.type) params.set('type', opts.type)
  if (opts.service) params.set('service', opts.service)
  const q = params.toString()
  return `/contact${q ? `?${q}` : ''}#enquiry`
}
