import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { CVData } from "../lib/markdown";
import { Separator } from "./ui/separator";
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Globe,
    Download,
    Square,
    Circle,
} from "lucide-react";
import { Button } from "./ui/button";
import cvMarkdown from "../content/cv.md?raw";
import matter from "gray-matter";

export const CV: React.FC<{ onExportPDF?: () => void }> = ({ onExportPDF }) => {
    const [cvData, setCvData] = useState<CVData | null>(null);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const { data, content } = matter(cvMarkdown);
        setCvData({
            metadata: data as any,
            content,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["summary", "experience", "projects", "education", "certifications", "awards"];
            const scrollPosition = window.scrollY + 100;

            // Find the current section by checking which section's top is closest to current scroll position
            let currentSection = sections[0];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition) {
                    currentSection = section;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (!cvData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-black animate-pulse"></div>
                    <div
                        className="w-3 h-3 bg-black animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                        className="w-3 h-3 bg-black animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                    ></div>
                </div>
            </div>
        );
    }

    const { metadata, content } = cvData;

    const sections = [
        { id: "summary", label: "Summary" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "certifications", label: "Certifications" },
        { id: "awards", label: "Awards" },
    ];

    return (
        <div className="min-h-screen bg-white relative">
            {/* Subtle grid background */}
            <div className="fixed inset-0 grid-bg"></div>

            {/* Table of Contents - Left Sidebar */}
            <nav className="no-print fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
                <div className="border-2 border-black bg-white p-4">
                    <div className="space-y-1">
                        {sections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`block w-full text-left px-3 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                                    activeSection === section.id
                                        ? "bg-black text-white font-bold"
                                        : "hover:bg-black hover:text-white"
                                }`}
                            >
                                <span className="opacity-50 mr-2">{String(index + 1).padStart(2, "0")}</span>
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Export Button */}
            <div className="no-print fixed top-8 right-8 z-50">
                <Button
                    onClick={onExportPDF}
                    className="brutalist-border bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-bold uppercase tracking-wider group"
                >
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                </Button>
            </div>

            {/* Main Container */}
            <div id="cv-content" className="max-w-4xl mx-auto px-8 py-16 relative z-10">
                {/* Hero Header */}
                <header className="mb-16 animate-fade-in">
                    <div className="border-4 border-black p-12 bg-white relative">
                        {/* Decorative corners */}
                        <Square className="absolute -top-2 -left-2 w-4 h-4 fill-white stroke-black stroke-2" />
                        <Square className="absolute -top-2 -right-2 w-4 h-4 fill-white stroke-black stroke-2" />
                        <Square className="absolute -bottom-2 -left-2 w-4 h-4 fill-white stroke-black stroke-2" />
                        <Square className="absolute -bottom-2 -right-2 w-4 h-4 fill-white stroke-black stroke-2" />

                        <div className="mb-8">
                            <div className="inline-block border-2 border-black px-4 py-1 mb-4 bg-black text-white">
                                <span className="text-xs font-mono uppercase tracking-widest">
                                    ENGINEER
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                                {metadata.name}
                            </h1>
                            <div className="h-1 w-32 bg-black mb-4"></div>
                            <p className="text-2xl font-bold uppercase tracking-wide">
                                {metadata.title}
                            </p>
                        </div>

                        {/* Contact Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {metadata.location && (
                                <div className="flex items-center gap-3 border-2 border-black p-4">
                                    <Circle className="w-2 h-2 fill-black" />
                                    <span className="font-mono text-sm">{metadata.location}</span>
                                </div>
                            )}
                            {metadata.email && (
                                <a
                                    href={`mailto:${metadata.email}`}
                                    className="flex items-center gap-3 border-2 border-black p-4 hover:bg-black hover:text-white transition-all group"
                                >
                                    <Circle className="w-2 h-2 fill-black group-hover:fill-white" />
                                    <span className="font-mono text-sm">{metadata.email}</span>
                                </a>
                            )}
                            {metadata.phone && (
                                <a
                                    href={`tel:${metadata.phone}`}
                                    className="flex items-center gap-3 border-2 border-black p-4 hover:bg-black hover:text-white transition-all group"
                                >
                                    <Circle className="w-2 h-2 fill-black group-hover:fill-white" />
                                    <span className="font-mono text-sm">{metadata.phone}</span>
                                </a>
                            )}
                            {metadata.github && (
                                <a
                                    href={`https://${metadata.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 border-2 border-black p-4 hover:bg-black hover:text-white transition-all group"
                                >
                                    <Circle className="w-2 h-2 fill-black group-hover:fill-white" />
                                    <span className="font-mono text-sm">{metadata.github}</span>
                                </a>
                            )}
                            {metadata.linkedin && (
                                <a
                                    href={`https://${metadata.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 border-2 border-black p-4 hover:bg-black hover:text-white transition-all group"
                                >
                                    <Circle className="w-2 h-2 fill-black group-hover:fill-white" />
                                    <span className="font-mono text-sm">{metadata.linkedin}</span>
                                </a>
                            )}
                            {metadata.website && (
                                <a
                                    href={`https://${metadata.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 border-2 border-black p-4 hover:bg-black hover:text-white transition-all group"
                                >
                                    <Circle className="w-2 h-2 fill-black group-hover:fill-white" />
                                    <span className="font-mono text-sm">{metadata.website}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="animate-slide-up space-y-8">
                    <ReactMarkdown
                        components={{
                            h2: ({ children }) => {
                                const text = String(children).toLowerCase();
                                // Map section titles to IDs
                                let sectionId = text;
                                if (text.includes("summary")) sectionId = "summary";
                                else if (text.includes("experience")) sectionId = "experience";
                                else if (text.includes("projects")) sectionId = "projects";
                                else if (text.includes("education")) sectionId = "education";
                                else if (text.includes("certifications")) sectionId = "certifications";
                                else if (text.includes("awards")) sectionId = "awards";

                                return (
                                    <div id={sectionId} className="mt-12 mb-6 first:mt-0 scroll-mt-20">
                                        <div className="border-l-4 border-black pl-6 py-2">
                                            <h2 className="text-4xl font-black uppercase tracking-tight">
                                                {children}
                                            </h2>
                                        </div>
                                        <div className="h-0.5 w-full bg-black mt-3"></div>
                                    </div>
                                );
                            },
                            h3: ({ children }) => (
                                <h3 className="text-xl font-bold uppercase tracking-wide mt-6 mb-2 flex items-baseline gap-3">
                                    <span className="w-2 h-2 bg-black inline-block"></span>
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-gray-700 leading-snug mb-3 text-base">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => <ul className="space-y-2 my-4">{children}</ul>,
                            li: ({ children }) => (
                                <li className="flex items-baseline gap-4 group">
                                    <span className="text-black font-bold text-base flex-shrink-0">
                                        —
                                    </span>
                                    <span className="flex-1 text-gray-700 leading-tight group-hover:text-black transition-colors">
                                        {children}
                                    </span>
                                </li>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-bold text-black">{children}</strong>
                            ),
                            code: ({ children }) => (
                                <code className="border-2 border-black bg-white px-2 py-1 font-mono text-sm">
                                    {children}
                                </code>
                            ),
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};
