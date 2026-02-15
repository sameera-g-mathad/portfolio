import React from "react";
import { Content, SectionHeading } from '@/components'

export const Contact: React.FC = () => {
    return <Content>
        <div id='contact' className="w-full h-full">
            <SectionHeading sectionHeading="get in touch" sectionNumber="05" />
            <div className="flex justify-center items-center h-[90%] ">
                <div className="flex flex-col justify-center items-center pb-30 gap-5">
                    <span className="text-accent capitalize text-lg animate-fade-up stagger-2">whats next?</span>
                    <span className="text-4xl font-bold capitalize animate-fade-up stagger-3">get in touch</span>
                    <span className="lg:w-[35%] w-[90%] lg:text-lg text-muted-foreground animate-fade-up stagger-4">
                        I'm currently looking for new opportunities.
                        Whether you have a question or just want to say hi,
                        my inbox is always open and I'll do my best to get back to you!
                    </span>
                    <a
                        href="mailto:sameeragmathad@outlook.com"
                        className="inline-flex capitalize tracking-wide items-center gap-2 border-2 
                        border-primary! text-primary px-6 py-2 rounded hover:bg-primary/10 transition-all duration-300 
                        animate-fade-up stagger-5"
                    >
                        Say Hello
                    </a>
                </div>
            </div>

        </div>
    </Content>
};


Contact.displayName = 'Contact';