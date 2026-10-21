import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  Globe2,
  Handshake,
  Layers,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
  UserRound,
  UserRoundCheck,
  Users,
  Video,
  Repeat,
} from 'lucide-react'
import type { EnquiryTypeId } from '../lib/whatsapp'

export interface EngagementModel {
  id: EnquiryTypeId
  anchor: string
  eyebrow: string
  title: string
  audience: string
  summary: string
  icon: LucideIcon
  points: string[]
  cta: string
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: 'agency',
    anchor: 'agency-partnerships',
    eyebrow: 'B2B',
    title: 'Agency Partnerships',
    audience: 'For agencies, consulting firms, job-support and service providers',
    summary:
      'Extend your technical delivery capacity with a dependable resource partner that understands your requirements and helps identify suitable professionals.',
    icon: Handshake,
    points: [
      'We understand each requirement your customer brings to you',
      'Suitable professionals are identified and evaluated with you',
      'Allocation is coordinated once the resource is approved',
      'Built for ongoing, long-term working relationships',
    ],
    cta: 'Discuss a partnership',
  },
  {
    id: 'individual',
    anchor: 'individual-support',
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
  },
  {
    id: 'organization',
    anchor: 'freelance-resources',
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
  },
]

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
      'We begin with a scheduled meeting to understand your objectives, technology stack, project scope, expected deliverables, timeline, experience requirements, and resource preferences.',
    icon: CalendarClock,
    outcome: 'A clear, shared understanding of the requirement',
  },
  {
    title: 'Specialist Matching',
    description:
      'Based on our discussion, our team identifies a suitable developer or technical specialist whose relevant skills and experience align with your requirement.',
    icon: ScanSearch,
    outcome: 'A proposed professional matched on relevant skills',
  },
  {
    title: 'Technical Demo & Evaluation',
    description:
      'We arrange a meeting with the proposed professional so you can discuss the requirement, evaluate their relevant technical capabilities, and determine whether the resource is a suitable match.',
    icon: Video,
    outcome: 'You decide — before anything is allocated',
  },
  {
    title: 'Resource Allocation',
    description:
      'After mutual approval, we coordinate the allocation and confirm the engagement scope, communication arrangements, availability, and next steps.',
    icon: UserRoundCheck,
    outcome: 'An agreed scope and a confirmed start',
  },
]

export interface Benefit {
  title: string
  description: string
  icon: LucideIcon
}

export const BENEFITS: Benefit[] = [
  {
    title: 'Skill-based matching',
    description: 'Professionals are proposed for the specific technologies and experience your requirement calls for.',
    icon: BadgeCheck,
  },
  {
    title: 'Evaluate before allocation',
    description: 'Meet the proposed resource and assess their relevant capabilities before you commit.',
    icon: Video,
  },
  {
    title: 'Direct communication',
    description: 'Talk to our team directly about your requirement, without layers of intermediaries.',
    icon: MessagesSquare,
  },
  {
    title: 'Multiple specializations',
    description: 'Development, testing, data, AI, SAP, mainframe, database and cloud expertise in one place.',
    icon: Layers,
  },
  {
    title: 'Flexible engagements',
    description: 'Freelance resources for project-based or ongoing work, shaped around your needs.',
    icon: Repeat,
  },
  {
    title: 'Agency partnerships',
    description: 'A B2B resource partner for agencies and service providers supporting their own customers.',
    icon: Handshake,
  },
  {
    title: 'Support for individuals',
    description: 'Working professionals can engage us directly for personalized technical assistance.',
    icon: Users,
  },
  {
    title: 'India-based, globally available',
    description: 'Delivery from India for clients internationally, with meetings coordinated across time zones.',
    icon: Globe2,
  },
  {
    title: 'Professional, confidential handling',
    description: 'Requirements and project context are handled with discretion and care.',
    icon: ShieldCheck,
  },
]

export interface Faq {
  q: string
  a: string
}

export const FAQS: Faq[] = [
  {
    q: 'What technical services does Corpolance provide?',
    a: 'We provide technical support and IT resources across software development, testing and QA, data engineering, data analytics, data science and machine learning, AI development, SAP and enterprise technologies, mainframe, database development and cloud services (AWS, Azure and GCP).',
  },
  {
    q: 'How does the resource matching process work?',
    a: 'We start with a requirement discussion to understand your objectives, technology stack, scope and preferences. Our team then identifies a professional whose relevant skills and experience align with the requirement and arranges a meeting so you can evaluate them. Allocation is coordinated only after mutual approval.',
  },
  {
    q: 'Can we evaluate a developer before allocation?',
    a: 'Yes. Before any allocation, we arrange a technical discussion with the proposed professional so you can assess whether their capabilities suit your requirement.',
  },
  {
    q: 'Do you work with individual professionals?',
    a: 'Yes. Working professionals can engage us directly for project-related guidance, programming help, debugging, code reviews and other technology-specific assistance. Each requirement is understood individually and matched with a suitable professional.',
  },
  {
    q: 'Do you partner with agencies?',
    a: 'Yes. We work with agencies, consulting firms, job-support providers and other service businesses that need technical resources for their customers, and we currently work with 4+ agency partners.',
  },
  {
    q: 'Can organizations engage freelance IT resources?',
    a: 'Yes. Organizations can engage developers, testers, data specialists, cloud professionals and other technical resources on a freelance or contract basis. Scope, expertise, availability and engagement preferences are discussed with our team first.',
  },
  {
    q: 'Which technologies do you support?',
    a: 'Our network covers frontend, backend and full-stack development, automation and API testing, ETL/ELT and data warehousing, BI and SQL, machine learning, generative AI and LLM applications, SAP, mainframe, relational databases, and AWS, Azure and GCP. If your stack is not listed, ask us — we will tell you honestly whether we can help.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. Our team operates from India and supports clients in the United States, Europe, Canada, India and other markets. Meetings are coordinated with your time zone in mind.',
  },
  {
    q: 'How can I schedule a requirement discussion?',
    a: 'Use the enquiry form on our Contact page, or message us directly on WhatsApp. Share a short description of your requirement and preferred meeting time, and our team will follow up to arrange a discussion.',
  },
  {
    q: 'How do you handle client information?',
    a: 'Information you share is used to understand and respond to your requirement and to arrange suitable support. We treat requirement details and project context as confidential. Our Privacy Policy explains this in more detail.',
  },
]

export interface Testimonial {
  quote: string
  name: string
  role?: string
  /** Confirms the client approved publication of this feedback */
  approved: true
}

/**
 * Only genuine, client-approved testimonials belong here. The section is hidden
 * while this list is empty. The testimonials on the previous website could not
 * be verified, so they have intentionally not been carried over.
 */
export const TESTIMONIALS: Testimonial[] = []
