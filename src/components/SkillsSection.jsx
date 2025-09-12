import { useState } from "react";
import { cn } from "@/lib/utils"

const skills = [
    {name: "HTML/CSS", level: 95, category: "Web Development"},
    {name: "React", level: 95, category: "Web Development"},
    {name: "Tailwind CSS", level: 95, category: "Web Development"},
    {name: "Three.js", level: 95, category: "Web Development"},
    {name: "React Three Fiber", level: 95, category: "Web Development"},

    {name: "Python", level: 95, category: "Language"},
    {name: "TypeScript", level: 95, category: "Language"},
    {name: "JavaScript", level: 95, category: "Language"},
    {name: "Java", level: 95, category: "Language"},
    {name: "C++", level: 95, category: "Language"},
    {name: "Bash", level: 95, category: "Language"},
    {name: "SQL", level: 95, category: "Language"},

    {name: "Azure", level: 95, category: "Cloud and Infrastructure"},
    {name: "AWS", level: 95, category: "Cloud and Infrastructure"},
    {name: "Terraform", level: 95, category: "Cloud and Infrastructure"},

    {name: "Git", level: 95, category: "Tool"},
    {name: "Docker", level: 95, category: "Tool"},
    {name: "Vulkan", level: 95, category: "Tool"},
    {name: "MuJoCo", level: 95, category: "Tool"},
    {name: "PyTorch", level: 95, category: "Tool"},
    {name: "OpenCV", level: 95, category: "Tool"},
];

const categories = ["All", "Web Development", "Language", "Cloud and Infrastructure", "Tool"];

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
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
)

};