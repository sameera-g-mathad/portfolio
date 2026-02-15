import React from "react";
import type { badgeInterface } from "@/interface";

export const Badge: React.FC<badgeInterface> = ({ className, icon, title, active }) => {
    return <div className={`bg-accent-foreground text-gradient text-muted-foreground border-2 rounded-lg flex justify-center gap-1.5 lg:p-2 p-1 items-center ${className}`}>
        {icon && icon}
        <span className="tracking-wide capitalize">{title}</span>
        {active && <div className="w-3 h-3 rounded-full bg-glow animate-pulse" />}
    </div>;
};

Badge.displayName = 'Badge'