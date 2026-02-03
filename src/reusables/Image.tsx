import React from "react";
import { type imageInterface } from "@/interfaces";

export const Image: React.FC<imageInterface> = ({ className, alt, src }) => {
    return <img className={className} alt={alt} src={src} />

};

Image.displayName = 'Image'