import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArchitectureExplorer from '@/components/ArchitectureExplorer'
import Image from 'next/image'
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'
import {
  productionWork,
  capabilities,
  caseStudies,
  credentials,
  engagementModels,
  maturityLadder,
  metrics,
  optimizeFor,
} from '@/lib/content'

const architectureFlow = [
  'Developer',
  'Golden path',
  'Automated delivery',
  'Controls & evidence',
  'Observability',
  'Business outcome',
]

const maturityStateLabel: Record<string, string> = {
  baseline: 'Starting point',
  delivered: 'Delivered',
  current: 'Current focus',
  target: 'Direction',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f3] text-[#171713]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-black/10 pt-36">
          <div className="page-shell pb-20 pt-12 md:pb-28 md:pt-20">
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5b5b52]">
              <span className="h-2 w-2 rounded-full bg-[#4f6b45]" />
              Rajendra Ladkat · Platform Engineer
            </div>

            <div className="grid items-end gap-14 lg:grid-cols-[1.12fr_0.88fr]">
              <div>
                <p className="mb-5 text-lg font-medium text-[#4f6b45]">
                  Lead platform engineering — Staff, FDE and Customer Solutions.
                </p>
                <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.75rem]">
                  Building cloud platforms developers love—and businesses trust.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5b5b52] md:text-xl">
                  11+ years designing and scaling enterprise platforms across AWS, GCP and
                  Tencent Cloud—from regulated Kubernetes and FinOps to production AI
                  infrastructure and governed agentic skills in the IDE.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a className="button button-primary" href="#architecture">
                    Explore architecture decisions <FaArrowRight aria-hidden="true" />
                  </a>
                  <a className="button button-secondary" href="#leverage">
                    See how I create leverage
                  </a>
                </div>
              </div>

              <div className="architecture-map" aria-label="Platform architecture flow">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    Platform operating system
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                    Outcome-led
                  </span>
                </div>
                <div className="space-y-2.5">
                  {architectureFlow.map((item, index) => (
                    <div key={item} className="architecture-node">
                      <span className="text-xs text-white/40">0{index + 1}</span>
                      <span>{item}</span>
                      <span className="ml-auto text-[#b9ccae]">
                        {index === architectureFlow.length - 1 ? '●' : '↓'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="focus" className="mt-16 border-t border-black/10 pt-12 md:mt-20 md:pt-16">
              <p className="section-kicker">Exploring in production</p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] md:text-5xl">
                Exploring and working on these concepts at production level.
              </h2>
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
                {productionWork.map((area, index) => (
                  <article key={area.title} className="bg-white p-6 md:p-8">
                    <span className="font-mono text-xs text-[#8a8a80]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em]">
                      {area.title}
                    </h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-black/10 bg-[#f7f7f3] px-3 py-1 text-xs font-medium text-[#3f3f38]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-i-think" className="border-b border-black/10 bg-white">
          <div className="page-shell py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr]">
              <div>
                <p className="section-kicker">How I think</p>
                <figure className="mt-8 max-w-[15rem]">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Portrait of Rajendra Ladkat"
                    width={480}
                    height={480}
                    sizes="(max-width: 1024px) 60vw, 240px"
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                  <figcaption className="mt-4 text-sm leading-6 text-[#68685f]">
                    <span className="block font-semibold text-[#171713]">Rajendra Ladkat</span>
                    Platform Engineer · Lead platform work · India-Remote
                  </figcaption>
                </figure>
              </div>
              <div>
                <blockquote className="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.045em] md:text-6xl">
                  “Good platforms disappear. Developers should think about products—not
                  infrastructure.”
                </blockquote>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5b5b52]">
                  When solving a platform problem, I optimize for these—in this order—before
                  choosing any tool. The technology is an outcome of the constraints, never
                  the starting point.
                </p>
                <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
                  {optimizeFor.map((item, index) => (
                    <li key={item} className="bg-white p-5">
                      <span className="font-mono text-xs text-[#8a8a80]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="mt-6 font-semibold tracking-[-0.02em]">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="border-b border-black/10">
          <div className="page-shell py-16 md:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="section-kicker">Selected career impact</p>
              <h2 className="section-title">Evidence, not a technology inventory.</h2>
            </div>
            <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-b border-r border-black/10 p-6 md:p-8">
                  <p className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-semibold">{metric.label}</p>
                  <p className="mt-1 text-sm text-[#727269]">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="maturity" className="border-b border-black/10 bg-white">
          <div className="page-shell py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="section-kicker">Platform maturity</p>
              <h2 className="section-title">I build platforms, not infrastructure.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5b5b52]">
                Every engagement moves an organization up this ladder. The interesting work
                is not the tooling at each rung—it is knowing which rung a team is actually
                on.
              </p>
            </div>

            <ol className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {maturityLadder.map((rung, index) => (
                <li
                  key={rung.stage}
                  className={`p-6 ${rung.state === 'current' ? 'bg-[#dfe7d9]' : 'bg-[#f7f7f3]'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#727269]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4f6b45]">
                      {maturityStateLabel[rung.state]}
                    </span>
                  </div>
                  <p className="mt-8 text-xl font-semibold tracking-[-0.025em]">{rung.stage}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="architecture" className="border-b border-black/10 bg-[#1c211b] text-white">
          <div className="page-shell py-20 md:py-28">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="section-kicker text-[#b9ccae]">Architecture decision records</p>
                <h2 className="section-title max-w-2xl text-white">
                  The options I rejected matter more than the stack I chose.
                </h2>
              </div>
              <p className="max-w-xl self-end text-lg leading-8 text-white/60 lg:justify-self-end">
                Enterprise engagements are anonymized. Each record follows the same shape:
                challenge, constraints, options considered, trade-offs, impact and what I
                would do differently.
              </p>
            </div>

            <div className="mt-14">
              <ArchitectureExplorer studies={caseStudies} />
            </div>
          </div>
        </section>

        <section id="leverage" className="border-b border-black/10 bg-white">
          <div className="page-shell py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.6fr_1fr]">
              <div>
                <p className="section-kicker">Engineering scope</p>
                <h2 className="section-title">How I create engineering leverage.</h2>
                <p className="mt-6 max-w-md text-lg leading-8 text-[#5b5b52]">
                  Leverage comes from decisions that keep paying after I leave the
                  engagement: shared defaults, reviewable systems and teams that no longer
                  need me.
                </p>
              </div>
              <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <div key={capability.title} className="border-b border-r border-black/10 p-6 md:p-8">
                    <span className="font-mono text-xs text-[#8a8a80]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em]">
                      {capability.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#68685f]">{capability.description}</p>
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-[#5b5b52]">
                      {capability.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4f6b45]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="engage" className="border-b border-black/10 bg-white">
          <div className="page-shell py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="section-kicker">Engagement models</p>
              <h2 className="section-title">Advisory, Architecture & Enablement</h2>
              <p className="mt-6 text-lg leading-8 text-[#5b5b52]">
                Working with leadership teams and engineering organizations on high-stakes
                cloud, platform, and AI infrastructure initiatives.
              </p>
            </div>

            <div className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2">
              {engagementModels.map((model, index) => (
                <article
                  key={model.title}
                  className="flex flex-col border-b border-r border-black/10 p-6 md:p-8"
                >
                  <span className="font-mono text-xs text-[#8a8a80]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em]">
                    {model.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#68685f]">{model.description}</p>
                  <ul className="mt-6 space-y-2.5 text-sm leading-6 text-[#5b5b52]">
                    {model.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4f6b45]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#dfe7d9]">
          <div className="page-shell py-20 md:py-28">
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="section-kicker">Start a conversation</p>
                <h2 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">
                  Let’s build platforms developers love.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4f544b]">
                  The work is lead platform engineering: Staff-shaped platform, Forward
                  Deployed Engineering and Customer Solutions.
                </p>
              </div>
              <a className="button button-primary" href="mailto:raladevops1@gmail.com">
                Start a conversation <FaEnvelope aria-hidden="true" />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-7">
              <div className="flex gap-5">
                <a
                  className="social-link"
                  href="https://github.com/rajendraladkat1919"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/rajendra-ladkat-rala-b337a350"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin aria-hidden="true" /> LinkedIn
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#5f6459]">
                {credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
