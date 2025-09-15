import { cn } from "@/lib/utils"
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const projects = [
    {
        id: 1,
        title: "3D Modeler",
        description: `Interface for designing object and landscape models that is compatible with Blender and SolidWorks.`,
        image: "/projects/3d_modeler.png",
        tags: ["C++", "Vulkan"],
        demoUrl: "https://www.youtube.com/watch?v=WUpp72sRBaQ",
        githubUrl: "https://github.com/dkhor2003/3D_Modeler"
    },
    {
        id: 2,
        title: "Checkers AI",
        description: `Single-player Checkers game featuring competitive AI and a user-friendly GUI.`,
        image: "/projects/checkers_ai.png",
        tags: ["Java"],
        demoUrl: "#",
        githubUrl: "https://github.com/dkhor2003/Checkers-AI"
    },
    {
        id: 3,
        title: "Randomized Progressive Deblurring",
        description: `Progressive training approach for image classification with improved generalization.`,
        image: "/projects/progressive_deblurring.png",
        tags: ["Python", "PyTorch"],
        demoUrl: "#",
        githubUrl: "https://github.com/dkhor2003/Progressive-Resizing-With-Randomized-Progressive-Deblurring"
    },
];

export const ProjectsSection = () => {
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
        <section ref={sectionRef} id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of projects I've built up over the years since I started learning about tech.
                </p>

                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 pb-16">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className={cn(
                                            "px-2 py-1 text-xs font-medium rounded-full bg-primary/30 text-secondary-foreground",
                                            "border "
                                        )}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-2"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4 mx-2">{project.description}</p>
                            </div>

                            <div className="absolute bottom-4 left-4 flex space-x-3">
                                <a 
                                    href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <ExternalLink size={24}/>
                                </a>
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={24}/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/dkhor2003"
                    >
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
};