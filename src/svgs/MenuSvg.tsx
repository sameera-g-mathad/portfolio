import React from "react";
import { type className } from '@/interface'

export const MenuSvg: React.FC<className> = ({ className }) => {
    return <svg className={className} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16" /><path d="M4 12h16" />
        <path d="M4 19h16" />
    </svg>
};

MenuSvg.displayName = 'MenuSvg'
