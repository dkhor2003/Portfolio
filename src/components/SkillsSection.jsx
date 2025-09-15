import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils"
import { SkillCard } from "@/components/SkillCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const skills = [
    {name: "HTML", level: 80, category: "Frontend", logo: "/logos/html.svg"},
    {name: "CSS", level: 80, category: "Frontend", logo: "/logos/css.svg"},
    {name: "React", level: 85, category: "Frontend", logo: "/logos/react.svg"},
    {name: "Tailwind CSS", level: 85, category: "Frontend", logo: "/logos/tailwind-css.svg"},
    {name: "Three.js", level: 50, category: "Frontend", logo: "/logos/three.svg"},

    {name: "Python", level: 90, category: "Language", logo: "/logos/python.svg"},
    {name: "TypeScript", level: 80, category: "Language", logo: "/logos/typescript.svg"},
    {name: "JavaScript", level: 90, category: "Language", logo: "/logos/javascript.svg"},
    {name: "Java", level: 70, category: "Language", logo: "/logos/java.svg"},
    {name: "C++", level: 70, category: "Language", logo: "/logos/c++.svg"},
    {name: "Bash", level: 85, category: "Language", logo: "/logos/bash.svg"},
    {name: "SQL", level: 60, category: "Language", logo: "/logos/sql.svg"},

    {name: "Azure", level: 85, category: "Cloud", logo: "/logos/azure.svg"},
    {name: "AWS", level: 75, category: "Cloud", logo: "/logos/aws.svg"},
    {name: "Terraform", level: 85, category: "Cloud", logo: "/logos/terraform.svg"},

    {name: "Git", level: 85, category: "Tool", logo: "/logos/git.svg"},
    {name: "Docker", level: 70, category: "Tool", logo: "/logos/docker.svg"},
    {name: "Vulkan", level: 40, category: "Tool", logo: "/logos/vulkan.svg"},
    {name: "PyTorch", level: 90, category: "Tool", logo: "/logos/pytorch.svg"},
    {name: "OpenCV", level: 90, category: "Tool", logo: "/logos/opencv.svg"},
];

const categories = ["All", "Frontend", "Language", "Cloud", "Tool"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    const sectionRef= useRef(null);
    const titleRef = useRef(null); 
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            titleRef.current,
            {y: -300, opacity: 0},
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 30%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(
            contentRef.current,
            {y: 100, opacity: 0, filter: "blur(10px)"},
            {
                y: 0,
                opacity: 1,
                duration: 1.0,
                filter: "blur(0px)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 10%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(
            sectionRef.current,
            {backgroundPosition: "50% 0%"},
            {
                backgroundPosition: "50% 100%",
                ease: "none", 
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

        // Cleanup, remove trigger from this section when the component unmounts
        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (t.vars.trigger === sectionRef.current) {
                    t.kill(); 
                }
            })
        }
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div ref={contentRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <SkillCard key={key} skill={skill}/>
                    ))}
                </div>
            </div>
        </section>
)

};