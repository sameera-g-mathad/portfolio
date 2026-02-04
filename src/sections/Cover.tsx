import React from "react";
import { Carousel } from "@/components";
/**
 * This will be the Cover section of 
 * the portfolio.
 * @returns React.JSX
 */
export const Cover: React.FC = () => {
    return <div className="w-full h-screen" id='cover'>
        <Carousel />
    </div>;
};

Cover.displayName = 'Cover'