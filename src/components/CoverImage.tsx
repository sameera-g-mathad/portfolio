import React from "react";
import { Image } from "@/reusables";

/**
 * Cover image that will be displayed
 * mostly on the cover section of the 
 * portfolio.
 * @returns React.JSX
 */
export const CoverImage: React.FC = () => {
    return <div>
        <Image className='w-64 h-64 border rounded-lg' src={"https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"} alt={"placeholder"} />
    </div>;
};


CoverImage.displayName = 'CoverImage'