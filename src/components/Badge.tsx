import React from "react";
import type { badgeInterface } from "@/interface";

export const Badge: React.FC<badgeInterface> = ({ icon, title }) => {
    return <div className="bg-accent-foreground text-muted-foreground border-2 rounded-lg flex gap-1.5 lg:p-2 p-1 items-center">
        {icon && icon}
        <span className="tracking-wide capitalize">{title}</span>
    </div>;
};

Badge.displayName = 'Badge'