import React from "react";
import { Content, SectionHeading, SkillSet } from "@/components";

export const Skill: React.FC = () => {
    return <Content>
        <div id='skills' className="w-full h-full">
            <SectionHeading sectionHeading="skills" sectionNumber="04" />

            <div className="flex flex-col pt-4">
                <SkillSet
                    title='AI & Machine Learning'
                    items={['PyTorch', 'TensorFlow', 'LangChain', 'Hugging Face', 'RAG Pipelines', 'LoRA', 'Transformers', 'NLP']}
                    reverse={false}
                    width="150px"
                />

                <SkillSet
                    title='Full Stack & Databases'
                    items={['React', 'TypeScript', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis']}
                    reverse={true}
                    width="150px" />

                <SkillSet
                    title='DevOps & Cloud'
                    items={['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions', 'CI/CD']}
                    reverse={false}
                    width="200px"
                />

                <SkillSet
                    title='Languages'
                    items={['Python', 'TypeScript', 'JavaScript', 'C', 'C++']}
                    reverse={true}
                    width="250px"
                />
            </div>
        </div>
    </Content>
};


Skill.displayName = 'Skill'