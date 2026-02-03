import React from "react";
import { Image } from "@/reusables";
/**
 * This will be the Cover section of 
 * the portfolio.
 * @returns React.JSX
 */
export const Cover: React.FC = () => {
    return <div className="w-full h-screen bg-blue-500" id='cover'>
        <Image className="w-64 h-64" src={"https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"} alt={"placeholder"} />
    </div>;
};

Cover.displayName = 'Cover'