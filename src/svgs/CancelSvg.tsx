import React from "react";
import { type className } from '@/interface'

export const CancelSvg: React.FC<className> = ({ className }) => {
    return <svg className={className} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
};

CancelSvg.displayName = 'CancelSvg'
