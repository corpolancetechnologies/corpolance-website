import type { LucideIcon } from 'lucide-react'
import {
  CalendarClock,
  ClipboardList,
  Crosshair,
  Globe2,
  Handshake,
  Layers,
  LockKeyhole,
  RefreshCw,
  Scale,
  ScanSearch,
  UserRoundCheck,
  Users,
  Video,
} from 'lucide-react'
import type { ProcessStep } from './content'

export const MISSION_STATEMENT =
  'To connect individuals, agencies, and organizations with relevant technical expertise through personalized technical support, thoughtful resource matching, and flexible IT service partnerships — understanding each requirement, identifying suitable skills, and facilitating professional collaboration that helps our clients address technical challenges and advance their objectives.'

export const MISSION_SUPPORT =
  'Our mission is rooted in understanding before recommending. Whether a client needs individual technical guidance, a specialized developer, an agency resource partner, or additional project capacity, we aim to find the right approach for the actual requirement rather than offering a one-size-fits-all solution.'

/** How the mission shows up in day-to-day work — current practices, not aspirations. */
export const MISSION_COMMITMENTS = [
  'Understanding the requirement before proposing a solution or resource',
  'Matching technical capabilities to the needs of the project',
  'Letting clients evaluate a proposed professional before allocation',
  'Supporting both direct client engagements and B2B agency partnerships',
  'Arranging flexible freelance IT resource engagements',
  'Communicating clearly and handling client information professionally',
]

export const VISION_STATEMENT =
  'To become a trusted global partner for accessible technical expertise and flexible IT resource solutions — recognized for understanding client needs, connecting the right skills with the right opportunities, and fostering lasting professional relationships across technology domains and international markets.'

export const VISION_SUPPORT =
  'We aspire to build a professional network that makes specialized technical support and capable IT resources easier to access. By continually improving how we understand requirements, match expertise, and collaborate with clients, we aim to contribute to stronger technical delivery and sustainable business relationships.'

export interface Ambition {
  title: string
  text: string
  icon: LucideIcon
}

/** Future direction — intended areas of development, not achieved milestones. */
export const AMBITIONS: Ambition[] = [
  {
    title: 'Global accessibility',
    text: 'Make it easier for clients in different geographies to reach relevant technical expertise through a dependable India-based delivery model.',
    icon: Globe2,
  },
  {
    title: 'Meaningful partnerships',
    text: 'Grow long-term working relationships with individual professionals, agencies, and organizations through clear communication and a requirement-focused approach.',
    icon: Handshake,
  },
  {
    title: 'Evolving technical capabilities',
    text: 'Keep deepening expertise across established technologies and emerging areas such as AI, cloud platforms, data engineering, and modern software development.',
    icon: Layers,
  },
]

export interface Value {
  title: string
  text: string
  icon: LucideIcon
}

export const VALUES: Value[] = [
  {
    title: 'Requirement-first thinking',
    text: "We start with the actual technical requirement, the client's objectives, and the surrounding context — before proposing any approach.",
    icon: ClipboardList,
  },
  {
    title: 'Technical relevance',
    text: "We prioritize a close fit between what the requirement calls for and a professional's relevant skills and experience.",
    icon: Crosshair,
  },
  {
    title: 'Professional integrity',
    text: 'We value honest communication, realistic expectations, and an accurate representation of what we can and cannot do.',
    icon: Scale,
  },
  {
    title: 'Collaboration',
    text: 'Good outcomes depend on clear communication and constructive working relationships between clients, partners, and technical professionals.',
    icon: Users,
  },
  {
    title: 'Confidentiality and trust',
    text: 'We handle client information and project details responsibly, with appropriate regard for any agreed confidentiality requirements.',
    icon: LockKeyhole,
  },
  {
    title: 'Continuous improvement',
    text: 'We learn from changing client needs, evolving technologies, and every collaboration to improve how we work over time.',
    icon: RefreshCw,
  },
]

/** The standard engagement process, framed through the mission. */
export const MISSION_STEPS: ProcessStep[] = [
  {
    title: 'Understand',
    description:
      "We arrange a discussion to understand your goals, required skills, technology stack, scope, timeline, and engagement expectations.",
    icon: CalendarClock,
    outcome: 'Requirement-first thinking',
  },
  {
    title: 'Match',
    description: 'Our team identifies a suitable technical professional whose relevant capabilities align with the requirement.',
    icon: ScanSearch,
    outcome: 'Technical relevance',
  },
  {
    title: 'Evaluate',
    description:
      "We arrange a meeting or technical discussion so you can assess the proposed professional's suitability before proceeding.",
    icon: Video,
    outcome: 'You decide before allocation',
  },
  {
    title: 'Collaborate',
    description: "After mutual approval, we coordinate resource allocation and agree the engagement's next steps.",
    icon: UserRoundCheck,
    outcome: 'Clear, collaborative next steps',
  },
]

/** Audience copy for this page; icons, anchors and enquiry types come from ENGAGEMENT_MODELS. */
export const AUDIENCE_COPY = {
  agency: {
    title: 'Agencies and service partners',
    text: 'We work with partner organizations to understand their requirements, identify suitable technical resources, and coordinate professional engagements.',
    link: 'Explore agency partnerships',
  },
  individual: {
    title: 'Individual professionals',
    text: "We offer requirement-focused technical assistance and guidance based on each professional's stated needs and technology stack.",
    link: 'Explore individual support',
  },
  organization: {
    title: 'Organizations',
    text: 'We help organizations explore freelance IT resources and technical expertise suited to their project and delivery requirements.',
    link: 'Explore freelance IT resources',
  },
} as const
