import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import ScrollingServices from '@/components/ScrollingServices'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaAward, FaGraduationCap, FaCode, FaChalkboardTeacher, FaHandshake, FaUserTie, FaLaptopCode } from 'react-icons/fa'

export default function Home() {
  const skills = {
    key: [
      'DevOps Strategy & Transformation',
      'CI/CD Pipeline Design & Management',
      'Cloud Architecture & Engineering',
      'Infrastructure as Code (IaC)',
      'Containerization & Orchestration',
      'Automation & Scripting',
      'Monitoring & Incident Management',
      'Security & Compliance',
      'Version Control & Collaboration',
      'Agile & Lean Methodologies',
      'Cross-Functional Team Leadership',
      'Infrastructure Scaling & Optimization',
      'Disaster Recovery & High Availability',
      'Client Engagement & Technical Consulting',
      'Performance Tuning & Cost Optimization',
    ],
    tools: {
      'IaC': ['Terraform', 'Terragrunt'],
      'Cloud': ['AWS', 'Azure', 'GCP'],
      'CI/CD': ['Jenkins', 'GitLab', 'ArgoCD', 'GitHub Actions'],
      'Containers': ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
      'Monitoring': ['Prometheus', 'Grafana', 'CloudWatch'],
      'Languages': ['Python', 'Ruby', 'Go', 'Java', 'JS (basic)'],
      'Version Control': ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
      'SysAdmin': ['Linux (Ubuntu, RHEL)', 'Bash', 'sed', 'awk'],
      'Container Security': ['Notary', 'Aqua', 'Docker Bench', 'Harbor', 'JFrog Xray', 'Snyk', 'Sysdig'],
      'AppSec': ['IBM AppScan', 'SonarQube'],
    },
  }

  const certifications = [
    'AWS Certified Solutions Architect – Professional (SAP-C02)',
    'AWS Certified Developer – Associate',
    'AWS Certified Solutions Architect – Associate',
    'AWS Certified SysOps Administrator – Associate',
    'Microsoft Azure Fundamentals (AZ-900)',
    'Certified Kubernetes Administrator (CKA)',
    'Certified Kubernetes Security Specialist (CKS)',
    'Certified Kubernetes Application Developer (CKAD)',
    'ITIL Foundation Certified',
  ]

  const experience = [
    {
      title: 'Lead AI Infrastructure Engineer',
      company: 'ThoughtWorks',
      period: 'Oct 2025 – Present',
      client: 'Client: RAG application platform development',
      location: 'Remote',
      achievements: [
        'Individually architected, led and delivered 0→1 platform engineering initiatives, transforming ambiguous requirements into scalable, secure infrastructure solutions used across engineering and research organizations for RAG workload.',
        'Built automated GitHub Actions pipelines and unified observability with Prometheus, OpenTelemetry, and OpenLens.',
        'Designed end-to-end autoscaling, high availability, disaster recovery, and resilience workflows for a secure, cost-efficient ML inference platform.',
        'Built cloud abstractions using Terraform, Terragrunt, and multi-cloud architectures, enabling self-service provisioning and consistent, reproducible environments.',
        'Supported AI/ML research teams by deploying high-throughput training environments, identifying bottlenecks, and optimizing performance for distributed training.',
        'Mentored engineers and contributed to a diverse, inclusive, high-performance engineering culture with strong emphasis on technical excellence and collaboration.',
        'Implemented RBAC, secrets management, and operational excellence practices, reducing deployment time from hours to minutes and improving reliability, performance, and inference throughput at scale.',
        'Engineered a self-healing, one-click multi-cloud platform for RAG agents with automated provisioning, deployment, and monitoring.',
      ],
    },
    {
      title: 'Lead Platform Engineer',
      company: 'ThoughtWorks',
      period: 'June 2025 – Sep 2025',
      client: 'Client: UK Betting & Gaming Company',
      location: 'Remote',
      achievements: [
        'Delivered a cloud-native gaming platform by converting ambiguous requirements into architecture, Jira epics/stories, and Confluence documentation.',
        'Launched a modular, scalable, production-ready platform within 4 months.',
        'Built secure, automated CI/CD and GitOps workflows (Nexus, HashiCorp Vault, ArgoCD) enabling declarative deployments, drift detection, and zero-downtime blue-green releases.',
        'Delivered production-like development and integration environments in under 2 weeks, accelerating testing cycles and game feature iteration.',
      ],
    },
    {
      title: 'Lead DevOps Engineer',
      company: 'AWS Professional Services (via ThoughtWorks)',
      period: 'Oct 2023 – May 2025',
      client: "Client: Germany's Leading Loyalty Provider",
      location: 'Remote',
      achievements: [
        'Led on-prem to AWS migration, reducing infrastructure cost by 35% and increasing deployment throughput by 60%.',
        'Built 80% reusable Terraform/Terragrunt modules and refactored monorepo into DRY, production-ready components, cutting provisioning time from hours to minutes.',
        'Implemented Shift-Left security (SonarQube, Trivy, Snyk), reducing security incidents by 45%.',
        'Built observability with CloudWatch and Prometheus, improving issue detection and resolution by 30%.',
        'Created SLA/SLO frameworks backed by AWS telemetry, strengthening reliability governance.',
        'Optimized Docker base images, reducing CVEs by 60%.',
        'Delivered global Terraform, Cloud, and DevSecOps workshops, upskilling 50+ engineers and standardizing best practices.',
      ],
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'ThoughtWorks',
      period: 'Apr 2021 – Aug 2023',
      client: 'Client: Global Top-3 International Bank',
      location: 'Singapore (Remote)',
      achievements: [
        'Automated Helm-based EKS/OpenShift deployments for 56 microservices, enabling zero-downtime releases.',
        'Achieved 100% regulatory compliance (MAS, GDPR, HIPAA) via automated security checks.',
        'Reduced CI/CD times by 65% through Docker, Gradle, and pipeline optimizations.',
        'Built umbrella CI/CD pipelines for 50+ microservices and delivered on-demand sandbox environments, reducing validation time by 40%.',
        'Scaled observability using Prometheus & Grafana; mentored SREs, improving incident resolution by 35%.',
      ],
    },
    {
      title: 'Cloud Engineer',
      company: 'Hitachi Data Systems (REAN Cloud)',
      period: 'Apr 2018 – May 2021',
      location: '',
      achievements: [
        'Engineered automation for RADAR & Assess platforms using Terraform, Ruby/Rake, Docker Compose, Artifactory, and REST APIs.',
        'Built STIG-compliant AMIs and containerized products with Packer, Terraform, and Jenkins, enabling secure, end-to-end CI/CD.',
        'Automated one-click provisioning of EKS/AKS/GKE clusters with HCAP using VDSS/VDMS architecture.',
        'Reduced deployment time by 80% using IaC automation and Helm-based cloud-native workflows.',
        'Standardized cloud processes and onboarded clients through demos and consulting.',
        'Supported REAN-Opex initiatives, accelerating DevSecOps adoption and delivering significant cost and time efficiencies.',
      ],
    },
  ]

  const projects = [
    {
      name: 'three-tier-webapp-deployment',
      url: 'https://github.com/rajendraladkat1919/three-tier-webapp-deployment',
      description: 'Automated, scalable multi-tier web application deployment with IaC.',
    },
    {
      name: 'aws-vpc-api-service',
      url: 'https://github.com/rajendraladkat1919/aws-vpc-api-service',
      description: 'RESTful API for VPC automation with best security practices.',
    },
    {
      name: 'terraform-aws-module',
      url: 'https://github.com/rajendraladkat1919/terraform-aws-module',
      description: 'Reusable Terraform modules for AWS infrastructure.',
    },
    {
      name: 'python-helloworld',
      url: 'https://github.com/rajendraladkat1919/python-helloworld',
      description: 'Simple Python starter app with CI/CD and containerization.',
    },
    {
      name: 'MediaWikiOnEKS',
      url: 'https://github.com/rajendraladkat1919/MediaWikiOnEKS',
      description: 'Enterprise-grade MediaWiki deployment on EKS.',
    },
  ]

  const awards = [
    'Hitachi Pioneering Spirit Award – Innovation & Impact (2021)',
    'HSBC Code Grand Winner – 1st Place (2018)',
    'Top 10 Finalist, Hitachi Demo Jam (2020)',
    'Best Leadership Award, D.Y.P.C.E.T. (2012)',
    'Best Talented & Quick Learner, D.Y.P.C.E.T. (2013)',
    'Trainer, Thoughtworks – Led DevSecOps & Security Week programs',
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollingServices />
      
      {/* Hero Section */}
      <main className="pt-32">
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400 shadow-2xl ring-4 ring-primary-200 dark:ring-primary-800">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Rajendra Ladkat"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Rajendra Ladkat
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
              DevOps & Cloud Infrastructure Consultant | AI Infrastructure Engineer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              AI Infrastructure Engineer | Senior Infrastructure Consultant | DevSecOps Architect | Cloud Automation Specialist
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/rajendraladkat1919"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/rajendra-ladkat-b337a350"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:raladevops1@gmail.com"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <Section id="summary" title="Summary">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-primary-600 dark:text-primary-400">Cloud & AI Infrastructure Leader</strong> with a decade of experience architecting and scaling distributed systems, AI/ML training platforms, and mission-critical production environments across multi-cloud and hybrid setups. Proven in driving 0→1 platform engineering initiatives, modernizing cloud-native ecosystems, and delivering secure, highly available, cost-efficient infrastructure for global-scale applications. Skilled in leading cross-functional teams, defining technical strategy, and solving complex distributed-systems challenges with a focus on operational excellence and real-world impact. Eager to contribute to a dynamic team and learn from experienced professionals. I am excited to apply my skills and contribute to projects that make a real difference.
              </p>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" title="Services & Training" className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
              Offering professional services in infrastructure consultancy, freelancing, mentoring, and hands-on DevOps training
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Freelancing */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FaHandshake className="text-primary-600 dark:text-primary-400 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Freelancing</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Available for freelance projects in cloud infrastructure, DevOps automation, and platform engineering. I deliver end-to-end solutions from architecture design to implementation and optimization.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Cloud infrastructure design & implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>DevOps pipeline automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Infrastructure as Code (IaC) development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Cloud migration & modernization</span>
                  </li>
                </ul>
              </div>

              {/* Infrastructure Consultancy */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FaUserTie className="text-primary-600 dark:text-primary-400 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Infrastructure Consultancy</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Strategic consulting services to help organizations design, implement, and optimize their cloud-native infrastructure and DevOps practices.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Infrastructure architecture review & design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>DevSecOps strategy & implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Cost optimization & performance tuning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Security & compliance assessment</span>
                  </li>
                </ul>
              </div>

              {/* Mentoring */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FaChalkboardTeacher className="text-primary-600 dark:text-primary-400 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mentoring</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  One-on-one and team mentoring to accelerate your DevOps journey. Get personalized guidance on career growth, technical challenges, and best practices.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Career guidance & skill development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Technical problem-solving sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Architecture review & feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Team coaching & knowledge transfer</span>
                  </li>
                </ul>
              </div>

              {/* DevOps Training */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-primary-600 dark:text-primary-400 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">DevOps Training</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Hands-on training programs covering the complete cloud-native stack. Practical, real-world scenarios to build production-ready skills.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Interactive workshops & bootcamps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Customized training programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Lab exercises & real-world projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span>Certification preparation support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Training Topics */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Hands-On Training Topics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Infrastructure as Code */}
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FaCode className="text-primary-600 dark:text-primary-400 mr-2" />
                    Infrastructure as Code
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Terraform</li>
                    <li>• Terragrunt</li>
                    <li>• Module development</li>
                    <li>• State management</li>
                  </ul>
                </div>

                {/* Cloud Platforms */}
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FaCode className="text-primary-600 dark:text-primary-400 mr-2" />
                    Cloud Platforms
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• AWS (EC2, S3, VPC, IAM)</li>
                    <li>• Multi-cloud strategies</li>
                    <li>• Cloud architecture patterns</li>
                    <li>• Cost optimization</li>
                  </ul>
                </div>

                {/* Containerization */}
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FaCode className="text-primary-600 dark:text-primary-400 mr-2" />
                    Containerization
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Docker</li>
                    <li>• Kubernetes</li>
                    <li>• Container orchestration</li>
                    <li>• Helm charts</li>
                  </ul>
                </div>

                {/* Observability Stack */}
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FaCode className="text-primary-600 dark:text-primary-400 mr-2" />
                    Observability Stack
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Prometheus</li>
                    <li>• Grafana</li>
                    <li>• Metrics & alerting</li>
                    <li>• Dashboard creation</li>
                  </ul>
                </div>

                {/* CI/CD Pipelines */}
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FaCode className="text-primary-600 dark:text-primary-400 mr-2" />
                    CI/CD Pipelines
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• GitHub Actions</li>
                    <li>• Jenkins</li>
                    <li>• ArgoCD</li>
                    <li>• GitOps workflows</li>
                  </ul>
                </div>

                {/* Logging Solutions */}
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FaCode className="text-primary-600 dark:text-primary-400 mr-2" />
                    Logging Solutions
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• ELK Stack (Elasticsearch, Logstash, Kibana)</li>
                    <li>• Loki</li>
                    <li>• Log aggregation & analysis</li>
                    <li>• Centralized logging</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Interested in working together or learning more about my services?
              </p>
              <a
                href="#contact"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Key Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.key.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Tools & Technology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills.tools).map(([category, items]) => (
                  <div
                    key={category}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-semibold mb-3 text-primary-600 dark:text-primary-400">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaAward className="mr-2 text-primary-600 dark:text-primary-400" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary-600"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Professional Experience">
          <div className="max-w-5xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary-600 dark:text-primary-400 mb-1">
                      {exp.company}
                    </p>
                    {exp.client && (
                      <p className="text-gray-600 dark:text-gray-400 italic mb-1">
                        {exp.client}
                      </p>
                    )}
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      {exp.period}
                    </p>
                    {exp.location && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education" className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-start">
                <FaGraduationCap className="text-primary-600 dark:text-primary-400 text-3xl mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Bachelor of Engineering (Information Technology)
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    D.Y. Patil College of Engineering — 2013
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Awards Section */}
        <Section id="awards" title="Awards & Recognition">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-yellow-500"
                >
                  <div className="flex items-start">
                    <FaAward className="text-yellow-500 text-2xl mr-3 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">{award}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Featured Projects" className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start mb-3">
                    <FaCode className="text-primary-600 dark:text-primary-400 text-2xl mr-3 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Connect with Me" className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Let&apos;s connect and discuss how we can work together!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/rajendra-ladkat-b337a350"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-lg"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/rajendraladkat1919"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center space-x-2 text-lg"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:raladevops1@gmail.com"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 text-lg"
              >
                <FaEnvelope size={24} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

