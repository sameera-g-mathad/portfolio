import type { projectCardInterface } from "@/interface";
import React, { useMemo } from "react";
import { Badge } from "./Badge";
import { GithubSvg, StarSvg } from "@/svgs";


export const ProjectCard: React.FC<projectCardInterface> = ({ project }) => {
    const { title, content, skills, featured, live, githubLink } = project
    const memoisedCard = useMemo(() =>
        <div className={`flex flex-col border-3 gap-3 rounded-xl p-4 max-w-92 lg:h-72 animate-fade-in ${featured ? 'border-primary!' : 'border-border'}`}>
            <div className="flex justify-between items-center">
                <span className="lg:text-xl text-primary capitalize tracking-wide">{title}</span>
                {featured && <StarSvg className="stroke-primary fill-primary w-4 h-4" />}
            </div>
            <div className="flex gap-3 items-center">
                <a href={githubLink} target="_top">
                    <GithubSvg className="w-5 h-5 stroke-muted-foreground fill-none" />
                </a>
                {live && <a href={live} target="_top">
                    <Badge className="text-accent! border-accent!  p-0.5! px-1! text-xs" active={true} title="live" />
                </a>}
            </div>
            <span className="lg:text-sm text-xs min-h-26">{content}</span>
            <div className="flex">
                <span className="h-0.5! flex-1 rounded bg-gradient animate-grow-width" />
            </div>
            <span className="flex gap-2 flex-wrap">
                {
                    skills.map((el, i) => <Badge key={i} className="p-0.5! text-xs! rounded-full" active={false} title={el} />)
                }
            </span>
        </div>
        , [])

    return live ? <a href={live} target="_top">{memoisedCard}</a> : memoisedCard
};

ProjectCard.displayName = 'ProjectCard'