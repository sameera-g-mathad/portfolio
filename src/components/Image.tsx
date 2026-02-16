import type { imageInterface } from "@/interface";
import React from "react";

export const Image: React.FC<imageInterface> = ({ alt, url }) => {
    return <div className="w-70 h-70 relative group">
        <div className="absolute inset-0 bg-accent animate-scale-in stagger-3 rounded-lg -z-10 translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
        <div className="absolute inset-0 bg-primary animate-scale-in stagger-3 rounded-lg -z-10 -translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
        <img className="w-full h-full rounded-lg" alt={alt} src={url} />
    </div>
};

Image.displayName = 'Image'
