'use client';

import { resume } from '@/data/resume';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechTag } from '@/components/ui/TechTag';
import { FadeInSection } from '@/components/ui/FadeInSection';
import { GeometricPattern } from '@/components/ui/patterns/GeometricPattern';

export default function AutomationProjects() {
    if (!resume.automationProjects || resume.automationProjects.length === 0) {
        return null;
    }

    return (
        <section id="automation" className="relative bg-[#0A0A0F] py-20">
            {/* Decorative geometric shape */}
            <GeometricPattern className="right-16 top-32" />

            <div className="max-w-7xl mx-auto px-20 relative z-10">
                <FadeInSection>
                    <SectionHeader label="AUTOMATION PROJECTS (n8n + AI)" className="mb-10" />
                </FadeInSection>

                <div className="space-y-8">
                    {resume.automationProjects.map((project, index) => (
                        <FadeInSection key={index} delay={index * 0.1}>
                            <div className="border border-zinc-800 bg-[#08080C] p-8 hover:border-cyan-500/30 transition-colors duration-300">
                                <h3 className="text-2xl font-light text-white mb-4">{project.name}</h3>
                                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                                {/* Achievements */}
                                {project.achievements && project.achievements.length > 0 && (
                                    <div className="mb-6 space-y-3">
                                        {project.achievements.map((achievement, i) => (
                                            <div key={i} className="text-sm text-zinc-500 flex items-start gap-3">
                                                <span className="text-cyan-500 mt-1">◆</span>
                                                <span>{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

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
