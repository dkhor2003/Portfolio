import { cn } from "@/lib/utils"
import { Cloud, Code, User, Lightbulb, Users, Search, Target, BookOpen, Eye} from "lucide-react";
import resume from "@/assets/Resume_Dylan.pdf"
import Typewriter from "typewriter-effect"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react";

export const AboutSection = () => {

    const sectionRef= useRef(null);
    const titleRef = useRef(null); 
    const contentRef = useRef(null);
    const sentenceRef = useRef(null);

    const traits = [
        { text: "Naturally Curious", icon: Search },
        { text: "Self-Driven", icon: Target },
        { text: "Problem Solver", icon: Lightbulb },
        { text: "Always Learning", icon: BookOpen },
        { text: "Collaborative", icon: Users },
        { text: "Detail-Oriented", icon: Eye }
    ];

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

        gsap.fromTo(
            sentenceRef.current,
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

        // Animate trait cards individually
        gsap.fromTo(
            ".trait-card",
            {
                scale: 0,
                opacity: 0,
                y: 20
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (t.vars.trigger === sectionRef.current) {
                    t.kill(); 
                }
            })
        }
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0">
                    About <span className="text-primary">Me</span>
                </h2>

                <div 
                    ref={sentenceRef}
                    className={cn(
                    "text-2xl font-bold flex flex-col md:flex-row items-center justify-center gap-2",
                    "text-muted-foreground mx-auto opacity-0 pb-12"
                )}> 
                    <div>
                        <span className={cn(
                            "font-mono"
                        )}>
                            I enjoy building 
                        </span>
                    </div>
                    <div>
                        <span className="text-cyan-300/90 font-mono text-[21px] xs:text-2xl">
                            <Typewriter options={{
                                strings: ["Scalable Applications",
                                        "Interactive UI", 
                                        "Responsive Layouts",
                                        "Intelligent Systems"],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                                pauseFor: 1000
                            }}/>
                        </span>
                    </div>
                </div>

                <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            {traits.map((trait, index) => {
                                const Icon = trait.icon;
                                return (
                                    <div
                                        key={index}
                                        className="trait-card group relative p-4 bg-gradient-to-br from-background/50 to-background/30 
                                                 backdrop-blur-sm border border-primary/10 hover:border-primary/30 
                                                 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                                    >
                                        <div className="flex flex-col items-center text-center gap-2">
                                            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                                <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300">
                                                {trait.text}
                                            </span>
                                        </div>
                                        
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="cosmic-button flex-1 text-center">
                                Get In Touch
                            </a>

                            <a 
                                href={resume} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "flex-1 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 text-center",
                                    "transition-colors duration-300"
                                )
                            }>
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right side - Skill cards */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left"> 
                                    <h4 className="font-semibold text-lg"> Frontend Development </h4>
                                    <p className="text-muted-foreground">
                                    Building interactive user interfaces with modern frameworks and responsive design principles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left"> 
                                    <h4 className="font-semibold text-lg"> Backend Development </h4>
                                    <p className="text-muted-foreground">
                                        Developing secure, scalable server-side applications with robust API design and database optimization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cloud className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left"> 
                                    <h4 className="font-semibold text-lg"> Cloud & DevOps </h4>
                                    <p className="text-muted-foreground">
                                        Deploying scalable cloud infrastructure and automated deployment pipelines for modern applications. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};