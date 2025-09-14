import { cn } from "@/lib/utils"
import { Briefcase, Cloud, Code, User} from "lucide-react";
import resume from "@/assets/Resume_Dylan.pdf"
import Typewriter from "typewriter-effect"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className={cn(
                    "text-2xl font-bold flex flex-col md:flex-row items-center justify-center gap-2",
                    "text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3 pb-6"
                )}> 
                    <div>
                        <span className={cn(
                            "font-mono"
                        )}>
                            I enjoy building 
                        </span>
                    </div>
                    <div>
                        <span className="text-cyan-300/90 font-mono text-sm sm:text-2xl">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Developer
                        </h3>

                        <p className="text-muted-foreground"> 
                            Always learning new stuffs 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a 
                                href={resume} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20",
                                    "transition-colors duration-300"
                                )
                            }>
                                Download CV
                            </a>
                        </div>
                    </div>

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