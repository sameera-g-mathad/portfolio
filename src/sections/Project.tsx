import React from "react";
import { Content, SectionHeading } from '@/components'

export const Project: React.FC = () => {
    return <Content>
        <div id='projects' className="w-full h-full">
            <SectionHeading sectionHeading="projects" sectionNumber="03" />

            projects
        </div>
    </Content>
};


Project.displayName = 'Project';