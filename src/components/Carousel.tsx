import React, { type PropsWithChildren } from "react";
import { type carouselInterface } from "@/interface";
/**
 * This component will be used for 
 * carousel.
 * @returns React.FC
 */

// Inspired from tutorial: https://www.youtube.com/watch?v=mF9yOwlunWk
export const Carousel: React.FC<carouselInterface & PropsWithChildren> = ({ children, height, reverse, slider, width }) => {
    // Will be used to adjust the width of each item
    // based on the number of elements.
    const quantity = React.Children.count(children);
    const sliderClassName = slider === 'horizontal' ? 'horizontalSlider' : 'verticalSlider'
    return <div className={`${sliderClassName}`} data-reverse={reverse} style={{ ...({ "--carousel-width": width, "--carousel-height": height }) as React.CSSProperties }}>
        <div className="list" style={{ ...({ "--carousel-quantity": quantity }) as React.CSSProperties }}>
            {
                React.Children.map(children, (child, index) => {
                    return <div className="item" key={index} style={{ ...({ "--position": index }) as React.CSSProperties }}>
                        {child}
                    </div>
                })
            }
        </div>
    </div >;
};

Carousel.displayName = 'Carousel';