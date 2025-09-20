import { cn } from "@/lib/utils"
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logoMapping = {
    "C++": "/logos/c++.svg",
    "Vulkan": "/logos/vulkan.svg",
    "JavaScript": "/logos/javascript.svg",
    "React": "/logos/react.svg",
    "Tailwind": "/logos/tailwind-css.svg",
    "Three": "/logos/three.svg",
    "Java": "/logos/java.svg",
    "Python": "/logos/python.svg",
    "PyTorch": "/logos/pytorch.svg"
}

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
        title: "My Portfolio",
        description: `The place where I showcase myself, and you are currently looking at it. `,
        image: "/projects/portfolio.png",
        tags: ["JavaScript", "React", "Tailwind", "Three"],
        demoUrl: "https://dylan-khor-portfolio.vercel.app/",
        githubUrl: "https://github.com/dkhor2003/Portfolio"
    },
    {
        id: 3,
        title: "Checkers AI",
        description: `Single-player Checkers game featuring competitive AI and a user-friendly GUI.`,
        image: "/projects/checkers_ai.png",
        tags: ["Java"],
        demoUrl: "#",
        githubUrl: "https://github.com/dkhor2003/Checkers-AI"
    },
    {
        id: 4,
        title: "Randomized Progressive Deblurring",
        description: `Progressive training approach for image classification with improved generalization.`,
        image: "/projects/progressive_deblurring.png",
        tags: ["Python", "PyTorch"],
        demoUrl: "#",
        githubUrl: "https://github.com/dkhor2003/Progressive-Resizing-With-Randomized-Progressive-Deblurring"
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "50px",
    slidesToScroll: 1,
};

export const ProjectsSection = () => {
    const sectionRef= useRef(null);
    const titleRef = useRef(null); 
    const contentRef = useRef(null);
    const sentenceRef = useRef(null); 

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
                    start: "top 30%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        const split = new SplitType(sentenceRef.current, { types: "words" });

        gsap.from(split.words, {
        y: 20,
        opacity: 0,
        filter: "blur(4px)",
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.08, // each word appears one after another
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            toggleActions: "play none none reverse"
        }
        });

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

                <p ref={sentenceRef} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of projects I've built up over the years since I started learning about tech.
                </p>

                <Slider {...settings}>
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="h-80 p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className={cn(
                                            "px-2 py-1 text-xs font-medium rounded-full bg-primary/30 text-secondary-foreground",
                                            "border "
                                        )}>
                                            <img src={logoMapping[tag]} alt={tag} className="w-5 h-5 sm:w-10 sm:h-10 lg:w-15 lg:h-15"/>
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
                </Slider>

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