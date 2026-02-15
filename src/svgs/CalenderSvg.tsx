import React from "react";
import { type className } from '@/interface'

export const CalenderSvg: React.FC<className> = ({ className }) => {
    return <svg className={className} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
    </svg>
};

CalenderSvg.displayName = 'CalenderSvg'
