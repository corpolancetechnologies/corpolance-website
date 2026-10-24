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
import type { EnquiryTypeId } from '../lib/whatsapp'
import type { Faq } from './content'

export type ServiceGroupId = 'engineering' | 'data' | 'ai-enterprise'

export const SERVICE_GROUPS: { id: ServiceGroupId; title: string; summary: string }[] = [
  { id: 'engineering', title: 'Engineering & Quality', summary: 'Building, extending and testing software applications.' },
  { id: 'data', title: 'Data & Intelligence', summary: 'Moving, modelling and analysing data to support decisions.' },
  {
    id: 'ai-enterprise',
    title: 'AI & Enterprise Technology',
    summary: 'AI capabilities, enterprise platforms, databases and cloud infrastructure.',
  },
]

export interface ToolGroup {
  label?: string
  items: string[]
}

export interface Service {
  /** URL slug: /services/<id>. Also used for ?service= on the contact form. */
  id: string
  group: ServiceGroupId
  title: string
  /** Short name used in forms, footer links and messages */
  shortTitle: string
  icon: LucideIcon
  /** One-line value statement for cards */
  summary: string
  capabilities: string[]
  /* ---- dedicated page ---- */
  h1: string
  intro: string
  seoTitle: string
  seoDescription: string
  /** Business problems this service can help address */
  problems: string[]
  /** Capability detail for the page */
  capabilityDetail: { title: string; text: string }[]
  useCases: string[]
  tools: ToolGroup[]
  /** Service-specific description of how Corpolance helps */
  howWeHelp: string[]
  /** Optional considerations block (e.g. data, AI, cloud) */
  considerations?: { title: string; points: string[] }
  related: string[]
  faqs: Faq[]
  cta: string
}

export const SERVICES: Service[] = [
  {
    id: 'software-development',
    group: 'engineering',
    title: 'Software Development',
    shortTitle: 'Software Development',
    icon: Code2,
    summary: 'Developers who can step into your codebase and move features, fixes and integrations forward.',
    capabilities: ['Frontend development', 'Backend development', 'Full-stack development', 'API development and integrations'],
    h1: 'Software Development Support for Business Applications',
    intro:
      'From a single stubborn bug to a feature that needs extra hands, we match your requirement with developers experienced in the frameworks and languages your application is actually built on.',
    seoTitle: 'Software Development Support | Corpolance Technologies',
    seoDescription:
      'Frontend, backend and full-stack software development support — feature work, API integrations, enhancements and troubleshooting by developers matched to your stack.',
    problems: [
      'A feature backlog that is growing faster than your team can deliver',
      'An integration with a third-party system or API that has stalled',
      'Production issues that need someone who can read and debug unfamiliar code',
      'An application that needs enhancements, but the original developers have moved on',
    ],
    capabilityDetail: [
      { title: 'Frontend development', text: 'Responsive interfaces, component work and state management in modern JavaScript frameworks.' },
      { title: 'Backend development', text: 'Services, business logic, authentication and data access layers.' },
      { title: 'Full-stack delivery', text: 'Features that span the user interface, the API and the database.' },
      { title: 'APIs and integrations', text: 'Designing REST endpoints and connecting applications to external services.' },
      { title: 'Enhancements and refactoring', text: 'Improving existing code so it is easier to change and maintain.' },
      { title: 'Troubleshooting', text: 'Reproducing, isolating and fixing defects in running applications.' },
    ],
    useCases: [
      'Adding a reporting module to an existing React and Node.js application',
      'Building a REST API so a mobile app can share data with a web platform',
      'Tracking down a memory leak or slow endpoint in a Java or Python service',
      'Reviewing a pull request or code structure before an important release',
    ],
    tools: [{ items: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java', 'SQL', 'REST APIs'] }],
    howWeHelp: [
      'We discuss the application, its architecture and the specific change or problem before proposing anyone.',
      'We look for a developer whose recent experience matches your language, framework and type of application.',
      'You speak with the developer about the codebase and approach before work is allocated.',
    ],
    related: ['software-testing-qa', 'database-development', 'cloud-services'],
    faqs: [
      {
        q: 'Can you work on an existing codebase?',
        a: 'Yes. Much of our development support involves existing applications. Sharing a short overview of the architecture and the change required helps us propose a suitable developer.',
      },
      {
        q: 'Do you support both individual developers and teams?',
        a: 'Yes. Individual professionals can request technical assistance, and agencies or organizations can discuss adding a developer to a project.',
      },
    ],
    cta: 'Discuss a Development Requirement',
  },
  {
    id: 'software-testing-qa',
    group: 'engineering',
    title: 'Software Testing & QA',
    shortTitle: 'Software Testing and QA',
    icon: TestTubeDiagonal,
    summary: 'Structured testing support that helps releases go out with fewer surprises.',
    capabilities: ['Manual testing', 'Automation testing', 'API testing', 'Test planning and quality assurance'],
    h1: 'Software Testing and Quality Assurance Support',
    intro:
      'Testing professionals who can plan coverage, run functional and regression cycles, build automation and investigate the defects that slow releases down.',
    seoTitle: 'Software Testing & QA Support | Corpolance Technologies',
    seoDescription:
      'Manual, functional, regression, API and automation testing support — test planning, Playwright, Selenium, Cypress and Postman, and defect investigation.',
    problems: [
      'Regression cycles that take too long before every release',
      'Automated suites that are flaky, slow or no longer trusted',
      'Defects reaching production that should have been caught earlier',
      'A new module with no test plan or clear acceptance criteria',
    ],
    capabilityDetail: [
      { title: 'Test planning', text: 'Defining scope, test cases and acceptance criteria for new features.' },
      { title: 'Functional and regression testing', text: 'Structured manual testing to confirm behaviour before release.' },
      { title: 'Automation testing', text: 'Building, extending and stabilising UI and end-to-end automation suites.' },
      { title: 'API testing', text: 'Validating endpoints, payloads, error handling and contracts.' },
      { title: 'Defect investigation', text: 'Reproducing issues, isolating root causes and writing clear defect reports.' },
    ],
    useCases: [
      'Creating a regression suite for a web application that is currently tested manually',
      'Stabilising flaky end-to-end tests in a CI pipeline',
      'Writing API tests for a set of microservices before a major change',
      'Preparing test cases and test data for a new release',
    ],
    tools: [{ items: ['Playwright', 'Selenium', 'Cypress', 'Postman', 'REST APIs', 'CI pipelines'] }],
    howWeHelp: [
      'We start with what is being tested, how releases happen today and where quality problems appear.',
      'We match the requirement to a tester with relevant manual, automation or API testing experience.',
      'You can review the proposed approach with the tester before engagement.',
    ],
    related: ['software-development', 'cloud-services', 'database-development'],
    faqs: [
      {
        q: 'Can you help with both manual and automated testing?',
        a: 'Yes. Depending on the requirement, we can discuss manual functional testing, automation, API testing or a combination.',
      },
      {
        q: 'Can a tester work with our existing automation framework?',
        a: 'Usually, yes. Let us know which framework and language your suite uses so we can look for relevant experience.',
      },
    ],
    cta: 'Discuss Testing Requirements',
  },
  {
    id: 'data-engineering',
    group: 'data',
    title: 'Data Engineering',
    shortTitle: 'Data Engineering',
    icon: Workflow,
    summary: 'Reliable pipelines and integrations that move data where your teams need it.',
    capabilities: ['ETL and ELT pipelines', 'Data integration', 'Data warehousing', 'Data processing workflows'],
    h1: 'Data Engineering Support for Reliable Data Workflows',
    intro:
      'Reporting and analytics are only as dependable as the pipelines feeding them. We help you design, build and troubleshoot the workflows that ingest, transform and deliver your data.',
    seoTitle: 'Data Engineering Support | ETL, Pipelines & Warehousing | Corpolance',
    seoDescription:
      'Data engineering support for ingestion, ETL/ELT, orchestration, data warehousing and pipeline troubleshooting with Python, SQL, Airflow, dbt, Databricks, Snowflake and Azure Data Factory.',
    problems: [
      'Pipelines that fail overnight and leave dashboards out of date',
      'Slow transformation jobs that delay downstream reporting',
      'Data arriving from many sources in inconsistent formats',
      'A warehouse model that has grown hard to understand or extend',
    ],
    capabilityDetail: [
      { title: 'Data ingestion', text: 'Bringing data in from databases, files, APIs and event streams.' },
      { title: 'ETL and ELT', text: 'Transforming raw data into clean, modelled datasets.' },
      { title: 'Orchestration', text: 'Scheduling and monitoring dependent jobs so failures are visible and recoverable.' },
      { title: 'Data warehousing', text: 'Designing and maintaining warehouse and lakehouse structures.' },
      { title: 'Pipeline troubleshooting', text: 'Diagnosing failures, data delays and performance bottlenecks.' },
      { title: 'Data quality checks', text: 'Adding validation so problems are caught before they reach reports.' },
    ],
    useCases: [
      'Investigating why a nightly Airflow DAG fails intermittently',
      'Optimising a slow Spark or Databricks job',
      'Building dbt models on top of a Snowflake warehouse',
      'Migrating an on-premises ETL process to Azure Data Factory',
    ],
    tools: [
      {
        items: ['Python', 'SQL', 'Apache Airflow', 'dbt', 'Databricks', 'Apache Spark', 'Snowflake', 'Azure Data Factory', 'Kafka'],
      },
    ],
    howWeHelp: [
      'We map the pipeline: sources, transformations, schedule and where things break.',
      'We look for an engineer experienced with your specific orchestration and warehouse tools.',
      'You discuss the pipeline and proposed fix or design with them before proceeding.',
    ],
    considerations: {
      title: 'Why dependable pipelines matter',
      points: [
        'Reports and dashboards inherit every delay or error in the pipelines upstream.',
        'Clear orchestration and monitoring make failures visible instead of silent.',
        'Well-modelled data is easier for analysts and data scientists to trust and reuse.',
      ],
    },
    related: ['data-analytics-bi', 'database-development', 'cloud-services'],
    faqs: [
      {
        q: 'Can you help troubleshoot an existing pipeline rather than build a new one?',
        a: 'Yes. Investigating failures, delays and performance problems in existing pipelines is a common data engineering requirement.',
      },
      {
        q: 'Which data platforms can you support?',
        a: 'Our network commonly works with tools such as Airflow, dbt, Databricks, Snowflake and Azure Data Factory. Share your stack and we will confirm whether suitable expertise is available.',
      },
    ],
    cta: 'Discuss Data Engineering Support',
  },
  {
    id: 'data-analytics-bi',
    group: 'data',
    title: 'Data Analytics & BI',
    shortTitle: 'Data Analytics and BI',
    icon: BarChart3,
    summary: 'Turn raw data into reporting and dashboards people can rely on.',
    capabilities: ['Data analysis', 'Reporting and dashboards', 'SQL and data modelling', 'Business intelligence'],
    h1: 'Data Analytics and Business Intelligence for Better Visibility',
    intro:
      'Help stakeholders understand financial, operational, customer and project performance through accurate metrics, clear dashboards and reporting that does not need rebuilding every week.',
    seoTitle: 'Data Analytics & BI Support | Power BI, Tableau, SQL | Corpolance',
    seoDescription:
      'Data analytics and business intelligence support — reporting, business metrics, dashboards, SQL analysis, data preparation and automated reporting with Power BI, Tableau and Looker.',
    problems: [
      'Different reports showing different numbers for the same metric',
      'Dashboards that are slow, cluttered or rarely used',
      'Manual spreadsheet reporting that consumes hours every week',
      'Leadership lacking a clear view of operational or financial performance',
    ],
    capabilityDetail: [
      { title: 'Metric definition', text: 'Agreeing clear, consistent definitions for the numbers the business relies on.' },
      { title: 'Dashboard development', text: 'Designing dashboards around decisions rather than around available data.' },
      { title: 'SQL analysis', text: 'Writing and tuning analytical queries against warehouses and databases.' },
      { title: 'Data preparation', text: 'Shaping and validating data so reports are accurate.' },
      { title: 'Automated reporting', text: 'Replacing manual report assembly with scheduled, refreshable outputs.' },
    ],
    useCases: [
      'Reconciling revenue figures that differ between finance and sales reports',
      'Rebuilding a slow Power BI report with a cleaner data model',
      'Creating an operations dashboard that tracks project delivery status',
      'Automating a weekly Excel report from a SQL source',
    ],
    tools: [{ items: ['Power BI', 'Tableau', 'Looker', 'SQL', 'Excel', 'Python'] }],
    howWeHelp: [
      'We start with the questions stakeholders need answered and the data currently available.',
      'We propose an analyst or BI specialist familiar with your reporting tool and data sources.',
      'You review their approach to metrics and dashboard design before engagement.',
    ],
    related: ['data-engineering', 'data-science-machine-learning', 'database-development'],
    faqs: [
      {
        q: 'Can you improve dashboards we already have?',
        a: 'Yes. Improving performance, data models, accuracy and usability of existing dashboards is a frequent requirement.',
      },
      {
        q: 'What if the underlying data is the problem?',
        a: 'Reporting issues often start upstream. In those cases we may suggest data engineering support alongside, or instead of, dashboard work.',
      },
    ],
    cta: 'Discuss Analytics Requirements',
  },
  {
    id: 'data-science-machine-learning',
    group: 'data',
    title: 'Data Science & Machine Learning',
    shortTitle: 'Data Science and Machine Learning',
    icon: BrainCircuit,
    summary: 'Practical modelling support, from exploratory analysis to evaluated ML workflows.',
    capabilities: ['Exploratory analysis', 'Predictive modelling', 'Machine learning workflows', 'Model evaluation'],
    h1: 'Data Science and Machine Learning for Business Problems',
    intro:
      'Support for framing a business question as a data problem, exploring what the data can tell you, and building and evaluating models with sound methodology.',
    seoTitle: 'Data Science & Machine Learning Support | Corpolance Technologies',
    seoDescription:
      'Data science and machine learning support — exploratory analysis, statistics, predictive modelling, trend analysis and model evaluation with Python, pandas, scikit-learn and MLflow.',
    problems: [
      'Plenty of data, but no clear view of which factors drive an outcome',
      'A model that performed well in testing but disappoints in practice',
      'Forecasts produced manually with little visibility into accuracy',
      'Uncertainty about whether a problem is suitable for machine learning at all',
    ],
    capabilityDetail: [
      { title: 'Exploratory analysis', text: 'Understanding distributions, relationships and data quality before modelling.' },
      { title: 'Statistics and trend analysis', text: 'Testing assumptions and quantifying patterns over time.' },
      { title: 'Predictive modelling', text: 'Classification, regression and forecasting approaches suited to the problem.' },
      { title: 'Model evaluation', text: 'Choosing appropriate metrics and validation to judge real-world performance.' },
      { title: 'ML workflows', text: 'Reproducible training, experiment tracking and handover of models.' },
    ],
    useCases: [
      'Exploring which customer attributes relate to churn',
      'Building a demand forecast and measuring its error against history',
      'Improving the evaluation approach for an existing classification model',
      'Setting up experiment tracking for a team training several models',
    ],
    tools: [{ items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Jupyter', 'MLflow'] }],
    howWeHelp: [
      'We discuss the business question, the data available and how success would be measured.',
      'We propose a data scientist with experience in similar problem types and tooling.',
      'You can explore their proposed approach — and its limits — before engagement.',
    ],
    considerations: {
      title: 'What determines results',
      points: [
        'Feasibility and outcomes depend on the quality and relevance of the data available.',
        'A well-defined business problem matters more than the choice of algorithm.',
        'Models should be judged on careful evaluation, not on a single headline accuracy figure.',
      ],
    },
    related: ['data-analytics-bi', 'ai-development', 'data-engineering'],
    faqs: [
      {
        q: 'Can you tell us whether machine learning is the right approach?',
        a: 'We can discuss your problem and data during the initial meeting. Sometimes a simpler analytical approach is more appropriate, and we will say so.',
      },
      {
        q: 'Do you guarantee model accuracy?',
        a: 'No. Model performance depends on the data and the problem. What we focus on is sound methodology and honest evaluation.',
      },
    ],
    cta: 'Discuss a Data Science Requirement',
  },
  {
    id: 'ai-development',
    group: 'ai-enterprise',
    title: 'AI Development & Integration',
    shortTitle: 'AI Development',
    icon: Sparkles,
    summary: 'Bring generative AI and LLM capabilities into real applications and workflows.',
    capabilities: ['AI application development', 'Generative AI integrations', 'LLM-powered applications', 'Workflow automation'],
    h1: 'AI Development and Integration for Practical Business Workflows',
    intro:
      'Support for adding AI capabilities where they genuinely help — document processing, internal knowledge search, assistants and automation — built with attention to privacy, reliability and cost.',
    seoTitle: 'AI Development & Integration | LLM & RAG Applications | Corpolance',
    seoDescription:
      'AI development and integration support — LLM-powered features, generative AI, document processing, knowledge search with embeddings and retrieval-augmented generation, and workflow automation.',
    problems: [
      'Staff spending hours searching documents and internal knowledge',
      'Repetitive document handling that could be partly automated',
      'An AI prototype that works in a demo but is unreliable with real data',
      'Uncertainty about how to add AI features without exposing sensitive data',
    ],
    capabilityDetail: [
      { title: 'LLM-powered features', text: 'Integrating model APIs into existing applications and products.' },
      { title: 'Knowledge search (RAG)', text: 'Retrieval-augmented generation over internal documents using embeddings and vector search.' },
      { title: 'Document processing', text: 'Extracting, classifying and summarising information from documents.' },
      { title: 'Workflow automation', text: 'Using AI for well-defined steps, with human review where it matters.' },
      { title: 'Evaluation and guardrails', text: 'Testing output quality and adding checks for reliability.' },
    ],
    useCases: [
      'An internal assistant that answers questions from company policy documents',
      'Extracting key fields from invoices or contracts for review',
      'Adding an AI summarisation feature to an existing web application',
      'Improving the answer quality of an existing RAG prototype',
    ],
    tools: [{ items: ['LLM APIs', 'Python', 'Embeddings', 'Vector databases', 'Retrieval-augmented generation', 'REST APIs'] }],
    howWeHelp: [
      'We clarify the workflow, the data involved and what a useful result looks like.',
      'We propose a developer with practical experience building and integrating AI features.',
      'You discuss the design, risks and evaluation approach with them before proceeding.',
    ],
    considerations: {
      title: 'Considerations we discuss up front',
      points: [
        'Privacy and security: what data may be sent to which model provider.',
        'Human review: where AI output must be checked before it is acted on.',
        'Reliability: how answer quality will be tested and monitored.',
        'Cost: expected usage and how model choice affects running costs.',
      ],
    },
    related: ['data-science-machine-learning', 'software-development', 'cloud-services'],
    faqs: [
      {
        q: 'Can AI be added to our existing application?',
        a: 'Often, yes. Many requirements involve integrating model APIs or retrieval into an application you already run.',
      },
      {
        q: 'How do you handle sensitive data in AI projects?',
        a: 'Data handling is discussed at the start, including which data can be processed and by which services. Please do not share sensitive data through the enquiry form.',
      },
    ],
    cta: 'Discuss an AI Requirement',
  },
  {
    id: 'sap-enterprise-technologies',
    group: 'ai-enterprise',
    title: 'SAP & Enterprise Technologies',
    shortTitle: 'SAP and Enterprise Technologies',
    icon: Boxes,
    summary: 'Technical support for enterprise platforms where specialised knowledge matters.',
    capabilities: ['SAP technical support', 'Enterprise application support', 'Integration and development'],
    h1: 'Technical Support for SAP and Enterprise Systems',
    intro:
      'Enterprise platforms reward specialised experience. We help you find professionals with relevant SAP and enterprise application knowledge for development, integration and troubleshooting work.',
    seoTitle: 'SAP & Enterprise Technology Support | Corpolance Technologies',
    seoDescription:
      'SAP-related development, integration and troubleshooting support, plus technical support for other enterprise applications — matched to your system and requirement.',
    problems: [
      'Custom developments that need enhancement or debugging',
      'Interfaces between SAP and other systems that fail or need extending',
      'Specialist knowledge needed for a short period that is hard to source internally',
      'Issues in an enterprise application that the internal team cannot isolate',
    ],
    capabilityDetail: [
      { title: 'SAP development', text: 'Custom development and enhancements, such as ABAP work, where expertise is available.' },
      { title: 'Integration', text: 'Connecting SAP and other enterprise systems with surrounding applications.' },
      { title: 'Troubleshooting', text: 'Investigating errors, performance issues and unexpected behaviour.' },
      { title: 'Enterprise application support', text: 'Technical help with other enterprise platforms, depending on the system.' },
    ],
    useCases: [
      'Debugging a custom report or enhancement that returns incorrect results',
      'Investigating a failing interface between SAP and an external system',
      'Supporting a technical change during a wider enterprise project',
      'Understanding an unfamiliar custom module before modifying it',
    ],
    tools: [{ items: ['SAP (technical)', 'ABAP', 'Enterprise integrations', 'SQL'] }],
    howWeHelp: [
      'Enterprise requirements vary widely, so we start by understanding the system, module and change involved.',
      'We confirm whether suitable expertise for your specific product or module is available before proposing anyone.',
      'You evaluate the proposed professional before allocation.',
    ],
    related: ['mainframe-support', 'database-development', 'software-development'],
    faqs: [
      {
        q: 'Which SAP modules do you support?',
        a: 'Availability depends on the specific product and module. Tell us what you need and we will confirm honestly whether suitable expertise is available.',
      },
    ],
    cta: 'Discuss Enterprise Technology Requirements',
  },
  {
    id: 'mainframe-support',
    group: 'ai-enterprise',
    title: 'Mainframe Support',
    shortTitle: 'Mainframe Support',
    icon: Server,
    summary: 'Experienced help for the legacy systems that still run critical operations.',
    capabilities: ['Legacy application maintenance', 'Mainframe development', 'Debugging and troubleshooting'],
    h1: 'Mainframe Development and Application Support',
    intro:
      'Mainframe applications still run critical operations in many organizations. We help you access professionals who can maintain, enhance and troubleshoot them.',
    seoTitle: 'Mainframe Development & Application Support | Corpolance',
    seoDescription:
      'Mainframe application support — legacy maintenance, development, enhancements and debugging, including COBOL, JCL and DB2 work where suitable expertise is available.',
    problems: [
      'Batch jobs that abend and delay downstream processing',
      'Legacy programs that few people still understand',
      'Enhancements needed in systems with limited internal expertise',
      'Knowledge gaps ahead of modernisation discussions',
    ],
    capabilityDetail: [
      { title: 'Application maintenance', text: 'Keeping existing programs running and up to date.' },
      { title: 'Development and enhancements', text: 'Modifying programs and job flows to meet new requirements.' },
      { title: 'Debugging', text: 'Investigating abends, data issues and unexpected batch results.' },
      { title: 'Knowledge transfer', text: 'Explaining program logic to support documentation or modernisation.' },
    ],
    useCases: [
      'Investigating a recurring batch job failure',
      'Changing COBOL program logic for a new business rule',
      'Analysing JCL and program dependencies before a change',
      'Documenting legacy logic ahead of a modernisation project',
    ],
    tools: [{ items: ['COBOL', 'JCL', 'DB2', 'CICS', 'z/OS'] }],
    howWeHelp: [
      'We understand the environment, the programs involved and the change or issue.',
      'We confirm whether a professional with the relevant mainframe skills is available.',
      'You speak with them before any allocation.',
    ],
    related: ['sap-enterprise-technologies', 'database-development', 'software-testing-qa'],
    faqs: [
      {
        q: 'Can you support short-term mainframe requirements?',
        a: 'We can discuss short-term or ongoing requirements. Availability of specific mainframe skills is confirmed for each requirement.',
      },
    ],
    cta: 'Discuss Mainframe Requirements',
  },
  {
    id: 'database-development',
    group: 'ai-enterprise',
    title: 'Database Development',
    shortTitle: 'Database Development',
    icon: Database,
    summary: 'Well-designed schemas and efficient queries that keep applications responsive.',
    capabilities: ['Database design', 'SQL development', 'Query optimization', 'Migration support'],
    h1: 'Database Development and Optimization Support',
    intro:
      'Applications and reports slow down when the database underneath struggles. We help with schema design, SQL development, performance tuning and migrations.',
    seoTitle: 'Database Development & Query Optimization | Corpolance Technologies',
    seoDescription:
      'Database development support — schema design, SQL and stored procedures, query optimization, data modelling and migration support for SQL Server, PostgreSQL, Oracle and MySQL.',
    problems: [
      'Queries that were fast once and now time out',
      'A schema that makes every new feature harder to build',
      'Stored procedures with business logic nobody wants to touch',
      'An upcoming migration between database platforms or versions',
    ],
    capabilityDetail: [
      { title: 'Database design', text: 'Schemas and data models that reflect how the application uses its data.' },
      { title: 'SQL development', text: 'Queries, views, functions and stored procedures.' },
      { title: 'Query optimization', text: 'Reading execution plans, indexing and rewriting slow queries.' },
      { title: 'Migration support', text: 'Planning, validating and reconciling data moved between systems.' },
    ],
    useCases: [
      'Tuning a slow reporting query using its execution plan',
      'Redesigning tables to support a new product feature',
      'Refactoring a large stored procedure into maintainable parts',
      'Validating row counts and totals after a database migration',
    ],
    tools: [{ items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Oracle', 'T-SQL', 'PL/SQL'] }],
    howWeHelp: [
      'We look at the database platform, the workload and the specific performance or design concern.',
      'We propose a database developer with experience on your platform.',
      'You review their analysis approach before work begins.',
    ],
    related: ['data-engineering', 'software-development', 'data-analytics-bi'],
    faqs: [
      {
        q: 'Can you help with database performance problems?',
        a: 'Yes. Investigating slow queries, indexing and design issues is a common database requirement.',
      },
    ],
    cta: 'Discuss a Database Requirement',
  },
  {
    id: 'cloud-services',
    group: 'ai-enterprise',
    title: 'Cloud Services',
    shortTitle: 'Cloud Services',
    icon: Cloud,
    summary: 'Deploy, run and optimise workloads across AWS, Azure and Google Cloud.',
    capabilities: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Deployment and optimization'],
    h1: 'Cloud Development and Technical Support Across AWS, Azure, and GCP',
    intro:
      'Support for deploying, integrating and troubleshooting workloads in the cloud — with attention to suitability, maintainability, performance and cost awareness.',
    seoTitle: 'Cloud Services Support | AWS, Azure & GCP | Corpolance Technologies',
    seoDescription:
      'Cloud technical support across AWS, Microsoft Azure and Google Cloud — application deployment, integrations, data platforms, troubleshooting, migration support and optimization.',
    problems: [
      'Deployments that fail or behave differently between environments',
      'Cloud costs rising without a clear understanding of why',
      'Permissions and networking issues blocking a release',
      'Workloads moved to the cloud without being adapted for it',
    ],
    capabilityDetail: [
      { title: 'Application deployment', text: 'Deploying and configuring applications, containers and serverless functions.' },
      { title: 'Infrastructure as code', text: 'Repeatable environments with tools such as Terraform.' },
      { title: 'Cloud data platforms', text: 'Supporting data services and pipelines running in the cloud.' },
      { title: 'Troubleshooting', text: 'Diagnosing deployment, permission, networking and performance issues.' },
      { title: 'Migration support', text: 'Planning and supporting workload moves into or between clouds.' },
      { title: 'Optimization', text: 'Reviewing resource use for performance and cost awareness.' },
    ],
    useCases: [
      'Fixing a CI/CD pipeline that fails when deploying to AWS',
      'Containerising an application and deploying it to Azure',
      'Investigating an unexpected increase in a GCP bill',
      'Setting up Terraform for environments that were configured by hand',
    ],
    tools: [
      { label: 'AWS', items: ['EC2', 'S3', 'Lambda', 'RDS', 'IAM'] },
      { label: 'Microsoft Azure', items: ['App Service', 'Azure Functions', 'Data Factory', 'Azure SQL'] },
      { label: 'Google Cloud', items: ['Compute Engine', 'Cloud Run', 'BigQuery', 'Cloud Storage'] },
      { label: 'Across clouds', items: ['Terraform', 'Docker', 'Kubernetes', 'CI/CD'] },
    ],
    howWeHelp: [
      'We clarify the cloud provider, the services in use and the problem or goal.',
      'We propose a cloud professional with hands-on experience on that provider.',
      'You discuss the approach and its trade-offs before work is allocated.',
    ],
    considerations: {
      title: 'How we think about cloud work',
      points: [
        'Suitability: the right service for the workload, not the newest one.',
        'Maintainability: configuration your team can understand and change later.',
        'Performance and cost awareness: reviewing usage without promising specific savings.',
      ],
    },
    related: ['software-development', 'data-engineering', 'ai-development'],
    faqs: [
      {
        q: 'Do you support all three major cloud providers?',
        a: 'Our network includes professionals working with AWS, Microsoft Azure and Google Cloud. Availability for a specific service is confirmed per requirement.',
      },
      {
        q: 'Can you guarantee cost savings?',
        a: 'No. We can help review usage and configuration with cost in mind, but savings depend on the workload and the decisions you make.',
      },
    ],
    cta: 'Discuss a Cloud Requirement',
  },
]

export const SERVICE_OPTIONS = [...SERVICES.map((s) => s.shortTitle), 'Other / Not sure yet']

export function serviceById(id: string | null | undefined): Service | undefined {
  return SERVICES.find((s) => s.id === id)
}

export const servicePath = (id: string) => `/services/${id}`

/** Contact link that preselects an enquiry type and/or service. */
export function contactHref(opts: { type?: EnquiryTypeId; service?: string } = {}): string {
  const params = new URLSearchParams()
  if (opts.type) params.set('type', opts.type)
  if (opts.service) params.set('service', opts.service)
  const q = params.toString()
  return `/contact${q ? `?${q}` : ''}#enquiry`
}
