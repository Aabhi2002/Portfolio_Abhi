'use client';

import { resume } from '@/data/resume';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechTag } from '@/components/ui/TechTag';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { DotsPattern } from '@/components/ui/patterns/DotsPattern';

export default function Projects() {
    if (!resume.projects || resume.projects.length === 0) {
        return null;
    }

    return (
        <section id="projects" className="relative bg-[#08080C] py-20">
            {/* Dots pattern */}
            <DotsPattern />

            <div className="max-w-7xl mx-auto px-20 relative z-10">
                <FadeInSection>
                    <SectionHeader label="PROJECTS" className="mb-10" />
                </FadeInSection>

                <div className="grid lg:grid-cols-2 gap-8">
                    {resume.projects.map((project, index) => (
                        <FadeInSection key={index} delay={index * 0.1}>
                            <div className="border border-zinc-800 bg-[#0A0A0F] p-8 hover:border-cyan-500/30 transition-colors duration-300">
                                <h3 className="text-2xl font-light text-white mb-4">{project.name}</h3>
                                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">{project.description}</p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <TechTag key={i} tech={tech} />
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
