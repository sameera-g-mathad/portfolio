import React from "react";
import { Content, Image, SectionHeading } from "@/components";

export const About: React.FC = () => {
    return <Content>
        <div id='about' className="w-full h-full">
            <SectionHeading sectionHeading="about me" sectionNumber="01" />

            <div className="flex justify-between items-center pt-30">
                <div className="lg:flex hidden flex-1">
                    <Image alt="Sameer_Gururaj_Mathad_Graduation_Image_Placeholder" url="https://i.imgur.com/TEIZcHF.jpeg" />
                </div>
                <div className="flex flex-2 flex-col gap-5 py-10">
                    <div className="subtext leading-9!">
                        I'm a developer and AI practitioner who enjoys building things that live on the internet and think intelligently.
                        My interest in development started when I joined Tata Consultancy Services, where I automated critical business workflows
                        integrating fraud detection APIs and Oracle systems.
                    </div>
                    <div className="subtext leading-9!">
                        After gaining industry experience, I pursued a Master's in Artificial Intelligence at DePaul University,
                        where I dove deep into Transformers, RAG pipelines, and full-stack AI applications.
                        I've built everything from English-Hindi translation models to production-ready PDF Q&A systems.
                    </div>
                </div>
            </div>
        </div>
    </Content>
};


About.displayName = 'About'