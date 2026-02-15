import React from "react";
import { ArrowRightSvg, CalenderSvg, DegreeSvg, EducationSvg, LocationSvg, PointerSvg, WorkSvg } from "@/svgs";
import { type experienceCardInterface } from "@/interface";
import { Badge } from "./Badge";

export const ExperienceCard: React.FC<experienceCardInterface> = ({ title, type, place, location, duration, gpa, duties }) => {
    return <div className="flex flex-col gap-4 lg:pt-5">
        <div className="flex flex-wrap lg:text-xl text-md gap-2">
            <PointerSvg className="w-6 h-6 stroke-accent fill-accent" />
            <span>{title}</span>
            <span className="text-accent">@ {place}</span>
        </div>

        <div className="flex flex-wrap text-xs gap-2">
            <Badge
                active={false}
                icon={
                    type === "education" ?
                        <EducationSvg className="w-5 h-5 stroke-muted-foreground" /> :
                        <WorkSvg className="w-5 h-5 stroke-muted-foreground fill-none" />

                } title={type} />
            <Badge active={false} icon={<LocationSvg className="lg:w-5 lg:h-5 w-4 h-4 stroke-muted-foreground" />} title={location} />
            <Badge active={false} icon={<CalenderSvg className="w-5 h-5 stroke-muted-foreground" />} title={duration} />
            {
                type === 'education' && gpa ?
                    <Badge active={false} icon={<DegreeSvg className="w-5 h-5 stroke-muted-foreground" />} title={gpa} /> : ''
            }
        </div>

        <div className="pl-4 flex flex-col gap-3">
            {
                duties?.map((el, i) => <div key={i} className="flex text items-start gap-2">
                    <span className="flex">
                        <ArrowRightSvg className="w-4 h-4 stroke-primary" />
                    </span>
                    <div className="flex flex-1 text-sm" key={i}>{el}</div>
                </div>)
            }
        </div>
    </div>;
};
