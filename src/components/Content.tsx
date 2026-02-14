import React, { memo, type PropsWithChildren } from "react";

/**
 * This is a wrapper for all the sections
 * that will be used in this website.
 * @returns React.JSX
 */
export const Content: React.FC<PropsWithChildren> = memo(({ children }) => {
    // pt-16 as the head spans a height of 16
    return <div className="h-screen pt-16 portfolio-width">
        {children}
    </div>;
})

Content.displayName = 'Content'