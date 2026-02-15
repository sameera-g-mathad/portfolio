import React from "react";
import { Content, ExperienceCard, SectionHeading } from '@/components'

export const Experience: React.FC = () => {
    return <Content>
        <div id='experience' className="w-full h-full">
            <SectionHeading sectionHeading="experience" sectionNumber="02" />

            <div className="flex flex-col gap-5 pt-4">
                <span className="animate-fade-up stagger-3">
                    <ExperienceCard
                        type='job'
                        title="Assistant System Engineer"
                        place="Tata Consultancy Services"
                        duration="April 2021 — September 2022"
                        location='Bengaluru, KA'
                        duties={[
                            `Automated SME onboarding and device insurance journeys by integrating CIPC validation and fraud detection APIs
                     into Siebel workflows, achieving 100% automated verification.`,
                            `Implemented Oracle MTN staff service journeys, reducing internal search and processing effort by ~25%.`,
                            `Built and optimized Oracle SQL-driven backend integrations, reducing integration errors by ~20% across customer and staff journeys.`
                        ]} />
                </span>
                <span className="animate-fade-up stagger-4">
                    <ExperienceCard
                        type='education'
                        title="Masters in Artificial Intelligence"
                        place="DePaul University"
                        duration="September 2023 — June 2025"
                        location='Chicago, IL'
                        gpa="4.0 GPA"
                        duties={[]}
                    />
                </span>
                <span className="animate-fade-up stagger-5">
                    <ExperienceCard
                        type='education'
                        title="Bachelor in Information Science & Engineering"
                        place="Global Academy of Technology"
                        duration="August 2016 — August 2020"
                        gpa="7.64 CGPA"
                        location='Bengaluru, KA'
                        duties={[]}
                    />
                </span>
            </div>

        </div>
    </Content>
};


Experience.displayName = 'Experience'