import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  Globe2,
  Handshake,
  Layers,
  MessagesSquare,
  Repeat,
  ScanSearch,
  ShieldCheck,
  UserRound,
  UserRoundCheck,
  Video,
} from 'lucide-react'
import type { EnquiryTypeId } from '../lib/whatsapp'

export interface Faq {
  q: string
  a: string
}

/* ------------------------------------------------------------------ */
/* Audiences / engagement models                                        */
/* ------------------------------------------------------------------ */

export interface EngagementModel {
  id: EnquiryTypeId
  /** Dedicated audience page */
  path: string
  /** Short label used in navigation and home cards */
  navLabel: string
  eyebrow: string
  title: string
  audience: string
  summary: string
  icon: LucideIcon
  points: string[]
  cta: string
  /** Home "Who We Help" card */
  homeTitle: string
  homeSummary: string
  homeCta: string
}

/** Ordered as presented on the homepage: professionals, agencies, organizations. */
export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: 'individual',
    path: '/professional-technical-support',
    navLabel: 'For Professionals',
    eyebrow: 'B2C',
    title: 'Individual Technical Support',
    audience: 'For working professionals who need expert technical assistance',
    summary:
      'Get personalized technical guidance and practical assistance from professionals experienced in your required technology stack.',
    icon: UserRound,
    points: [
      'Project-related guidance, programming help and debugging',
      'Code reviews and technology-specific problem-solving',
      'Data engineering, analytics, cloud and database guidance',
      'One-time help or ongoing technical assistance',
    ],
    cta: 'Get technical support',
    homeTitle: 'For Professionals',
    homeSummary:
      'Get requirement-focused technical assistance from professionals whose relevant skills align with your technology stack and technical challenges.',
    homeCta: 'Explore Technical Support',
  },
  {
    id: 'agency',
    path: '/agency-partnerships',
    navLabel: 'For Agencies',
    eyebrow: 'B2B',
    title: 'Agency Partnerships',
    audience: 'For agencies, consulting firms and service providers',
    summary:
      'Extend your technical delivery capacity with a dependable resource partner that understands your requirements and helps identify suitable professionals.',
    icon: Handshake,
    points: [
      'We understand each requirement your client brings to you',
      'Suitable professionals are identified and evaluated with you',
      'Allocation is coordinated once the resource is approved',
      'Built for ongoing, long-term working relationships',
    ],
    cta: 'Discuss a partnership',
    homeTitle: 'For Agencies',
    homeSummary:
      'Extend your technical delivery capacity with suitable expertise that helps your agency support client engagements and pursue additional business opportunities.',
    homeCta: 'Explore Agency Partnerships',
  },
  {
    id: 'organization',
    path: '/hire-it-resources',
    navLabel: 'Hire IT Resources',
    eyebrow: 'Organizations',
    title: 'Freelance IT Resources',
    audience: 'For organizations that need additional technical capacity',
    summary:
      "Connect with technical professionals for project-based or ongoing engagements aligned with your organization's requirements.",
    icon: Building2,
    points: [
      'Developers, testers, data specialists and cloud professionals',
      'Discuss scope, expertise, availability and engagement preferences',
      'Evaluate the proposed professional before allocation',
      'Project-based or ongoing freelance and contract engagements',
    ],
    cta: 'Request IT resources',
    homeTitle: 'For Organizations',
    homeSummary:
      'Explore freelance IT resources to address project requirements, specialized skill gaps, and additional delivery capacity.',
    homeCta: 'Hire IT Resources',
  },
]

export const modelById = (id: EnquiryTypeId) => ENGAGEMENT_MODELS.find((m) => m.id === id)!

/* ------------------------------------------------------------------ */
/* Process                                                              */
/* ------------------------------------------------------------------ */

export interface ProcessStep {
  title: string
  description: string
  icon: LucideIcon
  outcome: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Requirement Discovery',
    description:
      'We begin with a scheduled meeting to understand your objectives, technology stack, scope, required skills, timeline, and engagement expectations.',
    icon: CalendarClock,
    outcome: 'A clear, shared understanding of the requirement',
  },
  {
    title: 'Specialist Matching',
    description:
      'Our team identifies a suitable potential professional whose relevant skills and experience align with the requirement.',
    icon: ScanSearch,
    outcome: 'A proposed professional matched on relevant skills',
  },
  {
    title: 'Technical Demo & Evaluation',
    description:
      'We arrange a meeting with the proposed professional so you can discuss the requirement, ask technical questions, and evaluate suitability before proceeding.',
    icon: Video,
    outcome: 'You decide — before anything is allocated',
  },
  {
    title: 'Allocation & Kick-off',
    description:
      'After mutual approval, we coordinate resource allocation, confirm the agreed scope and working arrangements, and establish the next steps.',
    icon: UserRoundCheck,
    outcome: 'An agreed scope and a confirmed start',
  },
]

/* ------------------------------------------------------------------ */
/* Home: why us, scenarios, approach                                    */
/* ------------------------------------------------------------------ */

export interface Benefit {
  title: string
  description: string
  icon: LucideIcon
}

export const BENEFITS: Benefit[] = [
  {
    title: 'Requirement-focused discussions',
    description: 'Every engagement starts with a conversation about your actual problem, stack and constraints.',
    icon: MessagesSquare,
  },
  {
    title: 'Skill-based resource matching',
    description: 'Professionals are proposed for the specific technologies and experience your requirement calls for.',
    icon: BadgeCheck,
  },
  {
    title: 'Evaluate before allocation',
    description: 'Meet the proposed professional and assess their relevant capabilities before you commit.',
    icon: Video,
  },
  {
    title: 'Broad technology coverage',
    description: 'Development, testing, data, AI, SAP, mainframe, database and cloud expertise through one partner.',
    icon: Layers,
  },
  {
    title: 'Flexible freelance arrangements',
    description: 'Project-based or ongoing resource engagements, discussed around your needs.',
    icon: Repeat,
  },
  {
    title: 'Agency partnership opportunities',
    description: 'A B2B resource partner for agencies and service providers supporting their own clients.',
    icon: Handshake,
  },
  {
    title: 'Professional handling of requirements',
    description: 'Requirement details and project context are handled with discretion and care.',
    icon: ShieldCheck,
  },
  {
    title: 'India-based delivery, global clients',
    description: 'Delivery from India for clients internationally, with meetings coordinated across time zones.',
    icon: Globe2,
  },
]

export interface Scenario {
  title: string
  text: string
  /** Service page or audience page it relates to */
  to: string
  linkLabel: string
}

/** Representative requirement types — not descriptions of specific client projects. */
export const SCENARIOS: Scenario[] = [
  {
    title: 'Investigating data pipeline failures',
    text: 'Jobs failing overnight, data arriving late, or transformations running slower every week.',
    to: '/services/data-engineering',
    linkLabel: 'Data engineering',
  },
  {
    title: 'Improving dashboards and reporting',
    text: 'Slow or confusing dashboards, and reports that need to answer clearer business questions.',
    to: '/services/data-analytics-bi',
    linkLabel: 'Analytics & BI',
  },
  {
    title: 'Data quality and reconciliation issues',
    text: 'Numbers that do not match between systems, and checks to catch problems earlier.',
    to: '/services/database-development',
    linkLabel: 'Database development',
  },
  {
    title: 'Integrating AI into applications',
    text: 'Adding LLM-powered search, summarisation or document processing to an existing product.',
    to: '/services/ai-development',
    linkLabel: 'AI development',
  },
  {
    title: 'Supporting development and testing',
    text: 'Extra hands for features, bug fixes, test automation and release preparation.',
    to: '/services/software-development',
    linkLabel: 'Software development',
  },
  {
    title: 'Fulfilling agency resource requirements',
    text: "Finding a suitable specialist when an agency's client project needs skills it lacks in-house.",
    to: '/agency-partnerships',
    linkLabel: 'Agency partnerships',
  },
]

export const APPROACH = [
  { title: 'Understand the challenge', text: 'We clarify the actual business or technical problem, not just the job title.' },
  { title: 'Identify the relevant skills', text: 'We translate the requirement into the specific technologies and experience it needs.' },
  { title: 'Match a suitable professional', text: 'We look for someone whose background fits the requirement as closely as possible.' },
  { title: 'Enable technical evaluation', text: 'You meet the professional and assess their suitability for yourself.' },
  { title: 'Agree scope before allocation', text: 'Scope, availability and next steps are agreed before work begins.' },
]

/* ------------------------------------------------------------------ */
/* FAQs                                                                 */
/* ------------------------------------------------------------------ */

export interface FaqGroup {
  id: string
  title: string
  items: Faq[]
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        q: 'What services does Corpolance Technologies provide?',
        a: 'We provide technical support and IT resources through three engagement models: individual technical support for working professionals, agency partnerships for service providers, and freelance IT resources for organizations.',
      },
      {
        q: 'Which technology domains can you support?',
        a: 'Software development, software testing and QA, data engineering, data analytics and BI, data science and machine learning, AI development and integration, SAP and enterprise technologies, mainframe, database development, and cloud services on AWS, Azure and GCP. Availability for a specific tool is confirmed for each requirement.',
      },
      {
        q: 'Do you work with international clients?',
        a: 'Yes. Our team operates from India and works with clients in the United States, Europe, Canada, India and other markets. Meetings are arranged with your time zone in mind.',
      },
      {
        q: 'How can I contact your team?',
        a: 'Use the enquiry form on our Contact page, which prepares a message for you to send on WhatsApp or by email, or message us directly on WhatsApp at +91 72057 06992.',
      },
    ],
  },
  {
    id: 'individual',
    title: 'Individual Technical Support',
    items: [
      {
        q: 'How does individual technical support work?',
        a: 'You share your technical challenge and technology stack, we arrange a discussion to understand it, identify a potentially suitable specialist, and agree the approach, scope and terms before proceeding.',
      },
      {
        q: 'Can I discuss my requirement before proceeding?',
        a: 'Yes. Every engagement starts with a discussion, and nothing proceeds until the approach and terms have been agreed.',
      },
      {
        q: 'What details should I provide when requesting assistance?',
        a: 'A short summary of the problem, the expected behaviour, any relevant error messages, and the technologies involved. Please do not share passwords, production credentials or confidential employer data in the enquiry form.',
      },
    ],
  },
  {
    id: 'agency',
    title: 'Agency Partnerships',
    items: [
      {
        q: 'How does an agency partnership work?',
        a: "We learn about your agency's requirement and your client's scope, identify suitable professionals, arrange a technical evaluation, and coordinate allocation after mutual approval and agreement on terms.",
      },
      {
        q: 'Can agencies discuss technical requirements for specific projects?',
        a: 'Yes. Agencies can bring individual project requirements to us, one at a time or as part of an ongoing relationship.',
      },
      {
        q: 'Can you help address specialized technical skill gaps?',
        a: 'Often, yes. Share the technology and experience required, and we will confirm whether suitable expertise is available in our network.',
      },
      {
        q: 'Can we evaluate a proposed professional before allocation?',
        a: 'Yes. A technical discussion with the proposed professional is part of every engagement before anything is allocated.',
      },
    ],
  },
  {
    id: 'organization',
    title: 'Freelance IT Resources',
    items: [
      {
        q: 'Can organizations request freelance resources?',
        a: 'Yes. Organizations can discuss freelance or contract technical professionals for specific projects, specialized skills or additional capacity.',
      },
      {
        q: 'Which technical roles can be requested?',
        a: 'Commonly requested roles include software developers, QA and automation testers, data engineers, data analysts, data scientists, AI developers, cloud professionals, database developers, SAP specialists and mainframe professionals.',
      },
      {
        q: 'How are availability and engagement terms confirmed?',
        a: 'Availability depends on the specific requirement and is confirmed during the matching stage. Scope, timing and terms are agreed with you before allocation.',
      },
    ],
  },
  {
    id: 'process',
    title: 'Engagement Process',
    items: [
      {
        q: 'What happens during the initial meeting?',
        a: 'We discuss your objectives, technology stack, scope, required skills, timeline and engagement expectations, so that we understand the requirement before proposing anyone.',
      },
      {
        q: 'How is technical suitability evaluated?',
        a: 'We arrange a meeting with the proposed professional where you can discuss the requirement and ask technical questions to judge their suitability.',
      },
      {
        q: 'How is the engagement scope agreed upon?',
        a: 'After a suitable professional has been approved, we confirm the scope, working arrangements, availability and next steps with you before allocation.',
      },
      {
        q: 'How is client information handled?',
        a: 'Information you share is used to understand and respond to your requirement and is shared only as needed to arrange suitable support. Our Privacy Policy explains this in more detail.',
      },
    ],
  },
]

export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.items)

/** Selection for the homepage preview. */
export const HOME_FAQS: Faq[] = [
  FAQ_GROUPS[0].items[0],
  FAQ_GROUPS[4].items[1],
  FAQ_GROUPS[2].items[0],
  FAQ_GROUPS[3].items[2],
  FAQ_GROUPS[0].items[2],
]
