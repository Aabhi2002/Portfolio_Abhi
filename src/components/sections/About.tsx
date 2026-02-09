'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { DotsPattern } from '@/components/ui/patterns/DotsPattern';
import { CirclesPattern } from '@/components/ui/patterns/CirclesPattern';

export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0A0F] py-20">
      {/* Dots pattern */}
      <DotsPattern />

      {/* Decorative circles */}
      <CirclesPattern className="right-20 top-24" />

      <div className="max-w-7xl mx-auto px-20 relative z-10">
        <div className="grid lg:grid-cols-[400px,1fr] gap-20">
          {/* Left - Title */}
          <FadeInSection>
            <div>
              <SectionHeader label="ABOUT" className="mb-12" />
              <h2 className="text-5xl font-extralight text-white leading-tight">
                Building AI-Driven Systems & Intelligent Applications
              </h2>
            </div>
          </FadeInSection>

          {/* Right - Content */}
          <FadeInSection delay={0.2}>
            <div className="space-y-8 text-lg font-light text-zinc-400 leading-relaxed">
              <p>
                I'm a <span className="text-white">Generative AI Engineer and Full Stack Developer</span> based in Bangalore,
                specializing in AI-driven systems, RAG pipelines, and LLM integrations.
              </p>
              <p>
                Experienced in building <span className="text-cyan-500">production-ready AI solutions, automation workflows,
                  and scalable backend architectures</span>. Currently developing AI-driven healthcare systems at NuShift Technology,
                designing RAG pipelines with vector databases for high-accuracy semantic search.
              </p>
              <p>
                Passionate about combining AI with real-world business use cases like <span className="text-cyan-500">healthcare,
                  lead automation, and conversational systems</span>. Building intelligent applications that solve actual problems,
                not just proof-of-concepts.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}