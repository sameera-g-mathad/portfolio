import React from "react";
import { type sectionHeadingInterface } from "@/interface";

export const SectionHeading: React.FC<sectionHeadingInterface> = ({ sectionHeading, sectionNumber }) => {
    return <div className="flex items-center gap-3 pt-30">
        <span className="text-primary text-xl">{sectionNumber}.</span>
        <span className="capitalize font-bold text-3xl tracking-wide text-accent">{sectionHeading}</span>
        <span className="h-0.5 rounded bg-gradient animate-grow-width flex-1" />
    </div>;
};

SectionHeading.displayName = 'SectionHeading'