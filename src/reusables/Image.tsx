import React from "react";
import { type imageInterface } from "@/interfaces";

/**
 * Reusalbe Image component to display the image using
 * img tag.
 * @param alt - Alt text used in img tag.
 * @param className - Tailwind css classes as a string.
 * @param src - Url for the img tag.
 * 
 * @returns React.JSX
 */
export const Image: React.FC<imageInterface> = ({ alt, className, src }) => {
    return <img className={className} alt={alt} src={src} />

};

Image.displayName = 'Image'