import React, { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * The Header for the entire website.
 * This will be fixed on top of the screen
 * and handles both desktop and mobile views.
 * @returns React.JSX
 */
export const Header: React.FC = () => {
    const navLinks = [
        { label: "About", href: "about", num: "01" },
        { label: "Experience", href: "experience", num: "02" },
        { label: "Projects", href: "projects", num: "03" },
        { label: "Skills", href: "skills", num: "04" },
        { label: "Contact", href: "contact", num: "05" },
    ]
    const [open, setOpen] = useState(false);

    const onNavClick = (e: React.MouseEvent, url: string) => {
        e.preventDefault();
        // for scrolling there.
        const target = document.getElementById(url);

        if (target) {
            // Scroll to the section
            target.scrollIntoView({ behavior: 'smooth', block: "start" });

            // Find the line element within the section
            const lineElement = target.querySelector('.animate-grow-width') as HTMLElement;

            if (lineElement) {
                // Remove and re-add animation class to replay
                lineElement.classList.remove('animate-grow-width');
                void lineElement.offsetWidth; // Trigger reflow
                lineElement.classList.add('animate-grow-width');
            }


            // Remove animation class if it exists (to replay)
            target.classList.remove('animate-fade-up');

            // Trigger reflow to restart animation
            void target.offsetWidth;

            // Add animation class back
            target.classList.add('animate-fade-up');

        }
    }

    const memoisedLinks = useMemo(() => {
        return navLinks.map((el, i) =>
            <ul key={i}>
                <a className="flex gap-1.5 cursor-pointer text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    // this prevents the need of of
                    // `href`, as we can use js to handle 
                    // links and href wont be part of urls.
                    onClick={(e) => onNavClick(e, el.href)
                    }
                >
                    <span className="text-accent">{el.num}.</span>
                    <span>{el.label}</span>
                </a>
            </ul>
        )
    }, [])

    return <div className="w-full flex justify-center">
        <div className="fixed portfolio-width z-50 backdrop-blur-lg">
            <div className="w-full h-16 flex items-center justify-between border-b border-border">
                <a className="text-gradient lg:text-3xl text-lg tracking-wide cursor-pointer"
                    onClick={(e) => onNavClick(e, 'hero')}
                >{"sg = math(ad)"}</a>
                <nav className="gap-10 lg:flex hidden">
                    {
                        memoisedLinks
                    }
                </nav>
                <button
                    className="md:hidden text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {
                open && <div className="animate-fade-up bg-card border-b border-border lg:hidden">
                    <nav className="flex flex-col justify-between gap-2 py-4">
                        {
                            memoisedLinks
                        }
                    </nav>
                </div>
            }
        </div>
    </div>;
};


Header.displayName = 'Header'