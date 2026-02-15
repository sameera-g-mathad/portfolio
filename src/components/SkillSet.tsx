import React, { useMemo } from "react";
import { Badge } from "./Badge";
import { Carousel } from "./Carousel";
import { PointerSvg } from "@/svgs";
import { type skillSetInterface } from "@/interface";

export const SkillSet: React.FC<skillSetInterface> = ({ items, title, reverse, width }) => {
    const memoisedItems = useMemo(() =>
        items.map((el, i) =>
            <Badge className="m-2! px-2 hover:text-primary hover:border-primary! hover:bg-accent!" key={i} active={false} title={el} />
        )
        , [])
    return <div className="flex flex-col py-2 gap-5">
        <div className="flex flex-wrap lg:text-xl text-md gap-2">
            <PointerSvg className="w-6 h-6 stroke-accent fill-accent" />
            <span>{title}</span>
        </div>
        <div className="lg:flex hidden">
            <Carousel height='70px' width={width} reverse={reverse} slider="horizontal">
                {
                    memoisedItems
                }
            </Carousel>
        </div>
        <div className="lg:hidden flex flex-wrap">
            {
                memoisedItems
            }
        </div>
    </div>
};
