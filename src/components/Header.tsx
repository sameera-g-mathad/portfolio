import React, { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
    const navLinks = [
        { label: "About", href: "about", num: "01" },
        { label: "Experience", href: "experience", num: "02" },
        { label: "Projects", href: "projects", num: "03" },
        { label: "Skills", href: "skills", num: "04" },
        { label: "Contact", href: "contact", num: "05" },
    ]
    const [open, setOpen] = useState(false);

    const memoisedLinks = useMemo(() => {
        return navLinks.map((el, i) =>
            <ul key={i}>
                <a className="flex gap-1.5 cursor-pointer font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(el.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    }
                >
                    <span className="text-accent">{el.num}.</span>
                    <span>{el.label}</span>
                </a>
            </ul>
        )
    }, [])

    return <div className="fixed w-full">
        <div className="w-full h-16 z-50 backdrop-blur-md flex items-center justify-between border-b border-border">
            <a className="font-mono text-gradient cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
                }}
            >SM</a>
            <nav className="gap-5 lg:flex hidden">
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
    </div>;
};


Header.displayName = 'Header'