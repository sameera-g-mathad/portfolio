import React from "react";
import { Content } from "@/components";
import { GithubSvg, LinkedInSvg } from "@/svgs";
import { Badge } from "@/components/Badge";

export const Hero: React.FC = () => {
    return <Content>
        <div id="hero" className="w-full h-full flex justify-between">
            <div className="flex flex-col justify-center lg:py-15 py-4 lg:gap-10 gap-4 flex-2">
                <span className="text-accent tracking-wider animate-fade-up lg:text-lg text-sm">Hi, I am</span>
                <div className="flex flex-col gap-2 ">
                    <div className="lg:text-8xl text-5xl font-bold capitalize text-gradient animate-fade-up stagger-1">sameer gururaj mathad.</div>
                    <span className="lg:text-4xl text-2xl text-forground animate-fade-up stagger-2">I build things for the web & AI.</span>
                </div>
                <span className="lg:w-[80%] w-full lg:text-lg text-sm text-muted-foreground leading-7 animate-fade-up stagger-4">
                    Full-Stack Developer & AI Engineer with a Master's in Artificial Intelligence (4.0 GPA) from DePaul University.
                    I specialize in building scalable web applications and intelligent systems using the PERN/MERN stack, PyTorch, and LLMs.
                </span>
                <div className="animate-fade-up stagger-5 flex flex-wrap lg:gap-10 gap-5 items-center">
                    <a
                        href="./Sameer_Gururaj_Mathad_Resume_AI_V7.pdf"
                        target='_blank'
                        className="inline-flex capitalize tracking-wide items-center gap-2 border-2 border-primary! text-primary px-6 py-2 rounded font-mono hover:bg-primary/10 transition-all duration-300"
                    >
                        resume
                    </a>
                    <a
                        href="https://github.com/sameera-g-mathad"
                        target='_blank'
                        className="hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <GithubSvg className="stroke-muted-foreground fill-none w-7 h-7" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sameer-gururaj-mathad/"
                        target='_blank'
                        className=" hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <LinkedInSvg className="stroke-muted-foreground fill-none w-7 h-7" />
                    </a>
                    <Badge title="Open to Work" active={true} />
                </div>
            </div>
            <div className="lg:flex hidden justify-end items-center mb-25 flex-1 animate-fade-up stagger-1">
                <div className="w-70 h-70 relative group">
                    <div className="absolute inset-0 bg-accent animate-scale-in stagger-3 rounded-lg -z-10 translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-primary animate-scale-in stagger-3 rounded-lg -z-10 -translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                    <img className="w-full h-full rounded-lg" alt="Sameer_Gururaj_Mathad_Image_Placeholder" src={`https://i.imgur.com/oggNY6E.jpeg`} />
                </div>
            </div>
        </div>
    </Content>;
};

Hero.displayName = 'Hero'