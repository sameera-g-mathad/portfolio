import React from "react";
import { CoverImage } from "./CoverImage";

/**
 * This component will be used for 
 * carousel.
 * @returns React.FC
 */
export const Carousel: React.FC = () => {
    return <div className="h-full overflow-hidden">
        <div className="carousel-horizontal flex flex-col" style={{ ...({ '--animationDuration': '5s' }) as React.CSSProperties }}>
            <div className="carousel-group gap-2 flex flex-col pb-2">
                <CoverImage />
                <CoverImage />
                <CoverImage />
                <CoverImage />
            </div>
            <div className="carousel-group gap-2 flex flex-col pb-2">
                <CoverImage />
                <CoverImage />
                <CoverImage />
                <CoverImage />
            </div>
        </div>
    </div>;
};

Carousel.displayName = 'Carousel';
