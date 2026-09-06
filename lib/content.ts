export type DecisionOption = {
  name: string
  verdict: 'chosen' | 'rejected'
  reasoning: string
}

export type ImpactGroup = {
  category: string
  points: string[]
}

export type CaseStudy = {
  id: string
  tab: string
  eyebrow: string
  title: string
  challenge: string
  constraints: string[]
  options: DecisionOption[]
  tradeoffs: string[]
  architecture: string[]
  impact: ImpactGroup[]
  lessons: string
  stack: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai',
    tab: 'Agentic platform',
    eyebrow: 'Technical lead · GCP production',
    title: 'Domain-expert skills, shared across the organization in the IDE',
    challenge:
      'Useful instructions lived as skill.md files in finance, retail, gaming, travel and other domains. They were not validated, not shared, and not reusable. The product exists to take skills that domain experts have validated, store them centrally, and share them across the organization so an engineer in any domain can load a proven skill in the IDE and build the next application faster.',
    constraints: [
      'Technical lead from an infrastructure background, guiding frontend and backend teams',
      'Architecture, tools, frameworks and delivery roadmaps sat with me',
      'Had to reach production on GCP, not stall as an internal demo',
      'Only domain-expert-validated skill.md files enter the catalog',
      'Skills must be shareable across domains and teams, not locked in one project',
      'Engineers consume those skills inside the IDE, not from a wiki',
      'Had to be operable without a dedicated Kubernetes crew',
      'Delivery continued after I was staffed onto a separate billable engagement',
    ],
    options: [
      {
        name: 'Leave skill.md files in each domain repository',
        verdict: 'rejected',
        reasoning:
          'No expert validation, no organizational share. The next project in another domain would write the same instructions again.',
      },
      {
        name: 'Run the catalog on Kubernetes',
        verdict: 'rejected',
        reasoning:
          'The right runtime for a dedicated platform team. The wrong one here: operating a cluster would have pulled the technical lead and the product teams away from shipping.',
      },
      {
        name: 'Serverless Cloud Run on GCP, with a clear architecture and roadmap',
        verdict: 'chosen',
        reasoning:
          'Gave the frontend and backend teams a runtime they could ship on, while I owned architecture decisions, tooling, frameworks and the path to production.',
      },
    ],
    tradeoffs: [
      'Cloud Run gives up cluster-level control. We accepted that so the team could operate production without a Kubernetes crew.',
      'Some layers were staged for later releases. Getting the catalog into production first mattered more than building every capability up front.',
    ],
    architecture: [
      'skill.md',
      'Domain expert validation',
      'Catalog by domain',
      'Share across org',
      'IDE',
      'Application',
    ],
    impact: [
      {
        category: 'Speed & delivery',
        points: [
          'Deployed to production on GCP: FastAPI, Next.js, Terraform, GitHub Actions on Cloud Run',
          'End-to-end technical leadership: architecture, tools, frameworks and roadmap',
          'Running in production and evolving on a release roadmap',
        ],
      },
      {
        category: 'Leverage',
        points: [
          'skill.md files validated by domain experts in finance, retail, gaming, travel',
          'Shared across the organization so any team can reuse them in the IDE',
          'Guided frontend and backend teams as technical lead from an infrastructure background',
        ],
      },
      {
        category: 'Operating model',
        points: [
          'Kept delivery moving while concurrently staffed on billable work',
          'Sequenced scope so the product shipped instead of expanding indefinitely',
        ],
      },
    ],
    lessons:
      'The failure mode on a new product is over-engineering it before anyone uses it. Ship the catalog and the production path first, then let real usage decide the next layer. Evolutionary architecture is how this reached production rather than staying a design.',
    stack: [
      'FastAPI',
      'Next.js',
      'LangChain',
      'RAG',
      'MCP',
      'Okta',
      'GCP Cloud Run',
      'Terraform',
      'GitHub Actions',
      'Elasticsearch',
      'Redis',
    ],
  },
  {
    id: 'retail',
    tab: 'Retail marketplace',
    eyebrow: 'Lead platform engineer · seller portal split',
    title: 'From a Medusa seller portal to a microservices platform',
    challenge:
      'The customer could not scale or customize the seller portal because it sat on Medusa: a modular framework that still behaved as a monolith. Product teams were blocked on the framework itself, not on missing features.',
    constraints: [
      'Reuse the existing customer platform rather than introduce a new stack',
      'A single Lead Platform Engineer enabling 30 developers, the customer platform team, and Tencent engineering',
      'Dev, QA and Production had to follow the microservice decisions immediately',
    ],
    options: [
      {
        name: 'Keep extending the Medusa seller portal',
        verdict: 'rejected',
        reasoning:
          'Customization and scale were already constrained by the framework. More modules on the same monolith would have made the next release harder, not easier.',
      },
      {
        name: 'Rewrite the portal on a greenfield stack',
        verdict: 'rejected',
        reasoning:
          'A new stack would have discarded the existing platform and delayed the 30 developers who already needed environments to split services.',
      },
      {
        name: 'Decompose onto the existing platform as microservices',
        verdict: 'chosen',
        reasoning:
          'The platform already existed. The job was to make it usable: environments, security, pipelines and Terraform so the product team could split the portal without waiting on infrastructure.',
      },
    ],
    tradeoffs: [
      'Decomposition cost more than another Medusa release, but it unblocked scale and customization permanently.',
      'Tencent provider gaps became platform work: escalate upstream instead of carrying local workarounds.',
    ],
    architecture: [
      'Medusa seller portal',
      'Microservice decisions',
      'Platform + Terraform',
      'Dev in 13 days',
      'QA in 13 days',
      'Production',
    ],
    impact: [
      {
        category: 'Speed & delivery',
        points: [
          'Dev environment 13 days after the microservice decisions; QA in the next 13 days',
          'CI from ~2 hours to ~30 minutes; Kafka rollouts from 1–2 hours to 14 minutes',
          '30 developers unblocked to split the seller portal',
        ],
      },
      {
        category: 'Security & governance',
        points: [
          '~130 of 160 security findings remediated',
          'SAST/DAST and production-readiness adopted into the core release path',
          'Docker scanning and hardened Terraform modules as platform defaults',
        ],
      },
      {
        category: 'Vendor collaboration',
        points: [
          '7 of 9 Tencent Terraform provider issues closed upstream',
          'Cognito OIDC and Route53 provisioning automated—no manual environment setup',
        ],
      },
    ],
    lessons:
      'A framework can look modular and still be the bottleneck. The leverage was not rewriting the seller portal myself—it was making the existing platform fast, secure and repeatable so 30 developers could convert it.',
    stack: [
      'Medusa',
      'Microservices',
      'Tencent Cloud',
      'AWS',
      'Terraform',
      'Kafka',
      'Cognito OIDC',
      'Route53',
      'SAST/DAST',
    ],
  },
  {
    id: 'gaming',
    tab: 'Gaming platform',
    eyebrow: 'Lead platform engineer · prototype to production',
    title: 'A production gaming platform from a local prototype',
    challenge:
      'A local game environment had to become a secure, high-performance production platform. Requirements were still operational; there was no production architecture spanning datacenter, VMware and AWS.',
    constraints: [
      'End-to-end ownership as consultant and Lead Platform Engineer, with minimal supervision',
      'Workloads spanning datacenter, VMware and AWS—not cloud-only',
      'Reliability and performance for real-time gaming traffic',
    ],
    options: [
      {
        name: 'Lift and shift existing workloads',
        verdict: 'rejected',
        reasoning:
          'Carries current operational problems into a new environment while consuming the same delivery window.',
      },
      {
        name: 'Fully managed PaaS',
        verdict: 'rejected',
        reasoning:
          'Fast initial delivery, but insufficient control over secrets, artifacts and release strategy for a regulated product.',
      },
      {
        name: 'Secure EKS foundation with GitOps delivery',
        verdict: 'chosen',
        reasoning:
          'Declarative delivery gives auditability and drift detection, which the compliance conversation depends on.',
      },
    ],
    tradeoffs: [
      'GitOps added a learning curve for the team in return for reviewable, reversible deployments.',
      'Investing two weeks in environment automation reduced every later feedback loop.',
    ],
    architecture: [
      'Local prototype',
      'Datacenter & VMware',
      'AWS production',
      'GitOps delivery',
      'Real-time operations',
    ],
    impact: [
      {
        category: 'Speed & delivery',
        points: [
          'End-to-end ownership from prototype to production',
          'Environment readiness from months to two weeks',
        ],
      },
      {
        category: 'Reliability',
        points: ['Automated zero-downtime deployments with centralized secrets'],
      },
    ],
    lessons:
      'Discovery workshops are architecture work. Translating stakeholder goals into explicit standards early prevented the requirement churn that usually consumes a four-month window.',
    stack: ['AWS', 'VMware', 'EKS', 'ArgoCD', 'HashiCorp Vault', 'Terraform', 'Terragrunt'],
  },
  {
    id: 'loyalty',
    tab: 'Cloud modernization',
    eyebrow: 'Modernization & FinOps',
    title: 'Modernization where cost was a design constraint',
    challenge:
      'A leading loyalty provider needed legacy workloads modernized into AWS microservices across two production cutovers, without trading away delivery speed, cost or governance.',
    constraints: [
      'Two production go-lives with no regression in reliability',
      'Distributed engineering teams with varied cloud maturity',
      'Enterprise governance across AWS Organizations and Control Tower',
    ],
    options: [
      {
        name: 'Rehost only',
        verdict: 'rejected',
        reasoning:
          'Preserves the existing cost profile and operational model, so the business case disappears.',
      },
      {
        name: 'Full rewrite',
        verdict: 'rejected',
        reasoning:
          'Highest theoretical ceiling, unacceptable timeline risk against committed cutover dates.',
      },
      {
        name: 'Modular infrastructure with modernization per workload',
        verdict: 'chosen',
        reasoning:
          'Reusable foundations covering ~80% of platform components let teams modernize incrementally on shared defaults.',
      },
    ],
    tradeoffs: [
      'Standardizing modules slowed the first delivery and paid back on every subsequent team.',
      'Security gates in the pipeline add friction that is cheaper than late-stage remediation.',
    ],
    architecture: [
      'Landing zone',
      'Reusable modules',
      'Security gates',
      'EKS workloads',
      'SLO observability',
    ],
    impact: [
      {
        category: 'FinOps & delivery',
        points: [
          '35% lower cloud infrastructure cost',
          '60% higher deployment throughput',
          'Two enterprise production go-lives',
        ],
      },
      {
        category: 'Security & governance',
        points: [
          '45% fewer security incidents via shift-left scanning',
          '60% fewer CVEs in Docker base images',
        ],
      },
      {
        category: 'Leverage',
        points: [
          '~80% of platform components as reusable Terraform/Terragrunt modules',
          '50+ engineers enabled through architecture and DevSecOps workshops',
        ],
      },
    ],
    lessons:
      'Enablement is part of the platform. Reusable modules only reduced drift once the teams using them understood the reasoning, which made workshops a delivery mechanism rather than a nice-to-have.',
    stack: ['AWS', 'Control Tower', 'Terragrunt', 'SonarQube', 'Trivy', 'Snyk', 'Prometheus'],
  },
  {
    id: 'banking',
    tab: 'Regulated banking',
    eyebrow: 'Platform engineering at scale',
    title: 'Paved roads inside a regulated bank',
    challenge:
      'A global top-3 bank needed faster releases for 56 microservices across Amazon EKS and OpenShift while satisfying MAS, GDPR and HIPAA-aligned controls.',
    constraints: [
      'Continuous compliance across regulated workloads',
      'OpenShift 3 to 4 migration running in parallel',
      'Many teams releasing independently',
    ],
    options: [
      {
        name: 'Let each team own its pipeline',
        verdict: 'rejected',
        reasoning:
          'Maximum autonomy, but no consistent evidence trail for regulators and duplicated effort per team.',
      },
      {
        name: 'One centralized monolithic pipeline',
        verdict: 'rejected',
        reasoning:
          'Consistent but tightly coupled; a single change queue for 56 services becomes the bottleneck.',
      },
      {
        name: 'Standardized Helm and GitLab frameworks with self-service',
        verdict: 'chosen',
        reasoning:
          'Shared golden paths carry the controls, while teams keep independent release cadence.',
      },
    ],
    tradeoffs: [
      'An opinionated platform reduces team-level freedom and buys compliance plus release speed.',
      'Automated governance required upfront investment before any delivery gain appeared.',
    ],
    architecture: [
      'Service template',
      'Helm framework',
      'Automated controls',
      'EKS / OpenShift',
      'Self-service environments',
    ],
    impact: [
      {
        category: 'Speed & delivery',
        points: [
          'Release cycles from 8 hours to 3 hours (65%)',
          '40% shorter environment provisioning lead time',
        ],
      },
      {
        category: 'Security & governance',
        points: ['Continuous compliance across 56 regulated microservices'],
      },
    ],
    lessons:
      'Compliance automation is an accelerator, not a tax. Once controls ran in the pipeline, approval conversations moved from debate to evidence.',
    stack: ['AWS', 'EKS', 'OpenShift', 'Helm', 'GitLab CI/CD', 'Grafana'],
  },
]

export const maturityLadder = [
  { stage: 'Manual operations', state: 'baseline' },
  { stage: 'Infrastructure as code', state: 'delivered' },
  { stage: 'Self-service provisioning', state: 'delivered' },
  { stage: 'Golden paths', state: 'delivered' },
  { stage: 'Developer portal', state: 'delivered' },
  { stage: 'Platform as a product', state: 'current' },
] as const

export const engagementModels = [
  {
    title: 'Platform & Cloud Advisory',
    description:
      'Strategic guidance to help engineering leaders modernize architecture, reduce delivery friction, and control platform spend.',
    points: [
      'Multi-cloud architecture review and platform roadmapping',
      'Cost optimization (FinOps) and production readiness reviews',
    ],
  },
  {
    title: 'Architecture & Delivery Engagements',
    description:
      'Hands-on architectural leadership to design, bootstrap, and deliver critical platform and AI capabilities.',
    points: [
      'Internal developer platform and golden path design',
      'Monolith decomposition and zero-downtime migration',
    ],
  },
  {
    title: 'Engineering Workshops & Training',
    description:
      'Outcome-driven intensive sessions designed to upskill engineering organizations on modern platform paradigms.',
    points: [
      'Kubernetes, Terraform and secure delivery bootcamps',
      'AI infrastructure patterns for engineering teams',
    ],
  },
  {
    title: 'Technical Leadership Mentoring',
    description:
      'One-on-one coaching for senior engineers and aspiring platform leads navigating complex architectural ownership.',
    points: [
      'ADR practice and architecture review frameworks',
      'Individual contributor to Staff-plus influence',
    ],
  },
]

export const productionWork = [
  {
    title: 'Training & GPU',
    items: ['Distributed training', 'GPU infrastructure'],
  },
  {
    title: 'Serving',
    items: [
      'Inference optimization',
      'Model serving at scale',
      'Multi-model serving',
      'Model / LLM gateways',
      'Canary / blue-green ML deployments',
    ],
  },
  {
    title: 'Lifecycle & cost',
    items: [
      'Feature stores',
      'Data / model lineage',
      'Automated retraining',
      'Cost optimization',
    ],
  },
  {
    title: 'Trust & LLMOps',
    items: [
      'ML security',
      'Responsible AI',
      'LLMOps',
      'RAG evaluation',
      'LLM observability',
    ],
  },
]

export const optimizeFor = [
  'Developer experience',
  'Security',
  'Reliability',
  'Cost',
  'Observability',
  'Maintainability',
  'Business outcomes',
]

export const capabilities = [
  {
    title: 'Platform as a product',
    description:
      'Internal developer platforms, golden paths and self-service provisioning on AWS, GCP and Tencent Cloud—EKS, OpenShift, Cloud Run, Helm, Terraform and Terragrunt.',
    points: [
      'Golden paths and self-service environments teams adopt without me',
      'Reusable enterprise modules instead of per-team infrastructure',
    ],
  },
  {
    title: 'Technical leadership',
    description:
      'Architecture direction, ADR practice and cross-team consensus so decisions outlive the engagement.',
    points: [
      'Architecture reviews, roadmaps and written decision records',
      'Guiding frontend, backend and platform teams under ambiguity',
    ],
  },
  {
    title: 'AI platform engineering',
    description:
      'Production AI infrastructure: retrieval, inference, and validated skill catalogs served where engineers already work.',
    points: [
      'Skill catalogs and RAG discovery in production',
      'Security and isolation for AI workloads',
    ],
  },
  {
    title: 'Secure, reliable, cost-aware delivery',
    description:
      'DevSecOps defaults, SLO-driven observability and FinOps as design inputs—Trivy, SonarQube, Snyk, Vault, OpenTelemetry, Prometheus and Datadog under MAS, GDPR and HIPAA-aligned controls.',
    points: [
      'Shift-left scanning and continuous compliance evidence',
      'SLOs, incident readiness and spend that shows up on the invoice',
    ],
  },
]

export const metrics = [
  {
    value: '13 days',
    label: 'Dev environment after the split decision',
    context: 'QA in the next 13 days · no manual provisioning',
  },
  {
    value: '75%',
    label: 'faster CI/CD pipelines',
    context: 'GitLab execution from ~2 hours to ~30 minutes',
  },
  {
    value: '35%',
    label: 'lower cloud infrastructure cost',
    context: 'AWS modernization with AWS Professional Services',
  },
  {
    value: '56',
    label: 'regulated microservices supported',
    context: 'EKS and OpenShift in a global top-3 bank',
  },
  {
    value: '3 months',
    label: 'to a production AI platform',
    context: 'Domain-expert skill.md shared across the organization on GCP Cloud Run',
  },
  {
    value: '50+',
    label: 'engineers enabled',
    context: 'AWS, Terraform and DevSecOps workshops',
  },
]

export const credentials = [
  'AWS Solutions Architect – Professional',
  'AWS Advanced Networking – Specialty',
  'AWS AI Practitioner',
  'CKA',
  'CKS',
  'CKAD',
  'Azure Fundamentals',
  'ITIL Foundation',
]

/**
 * Real quotes only. Populate from LinkedIn recommendations or written customer
 * feedback; the Engineering Impact section renders only when this is non-empty.
 */
export type ImpactQuote = {
  audience: 'Customer' | 'Engineering team' | 'Leadership'
  attribution: string
  engagement: string
  quote: string
  outcome: string
}

export const impactQuotes: ImpactQuote[] = []
