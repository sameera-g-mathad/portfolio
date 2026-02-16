import React from "react";
import { type className } from '@/interface'

export const ArrowRightSvg: React.FC<className> = ({ className }) => {
    return <svg className={className} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m10 8 4 4-4 4" />
    </svg>
};

ArrowRightSvg.displayName = 'ArrowRightSvg'
