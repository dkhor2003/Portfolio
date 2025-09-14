import { useState } from "react";
import { cn } from "@/lib/utils"

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

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div className="group card-hover perspective-1000">
                            <div className="relative transition-transform duration-1000 preserve-3d group-hover:rotate-y-180">
                                <div key={key} className="absolute inset-0 skill-card backface-hidden flex items-center justify-center">
                                    <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain"/>
                                </div>

                                <div key={key} className="inset-0 skill-card rotate-y-180 backface-hidden">
                                    <div className="text-left mb-4">
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    </div>
                                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                        <div 
                                            className="bg-primary h-2 rounded-full origin-left animate-pulse-subtle"
                                            style={{width: skill.level + "%"}}
                                        />
                                    </div>
                                    <div className="text-right mt-1">
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
)

};