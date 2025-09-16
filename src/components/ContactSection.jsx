import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type";


export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
 
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Sorry, this button doesn't send emails just yet as I have yet to set up the email service. Please use the other links on my site to get in touch."
            });
            setIsSubmitting(false);
        }, 1500);
    };

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
                    start: "top 10%",
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
        <section ref={sectionRef} id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p ref={sentenceRef} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Let's connect—whether it's work, collaboration, or just something random. 
                </p>

                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>

                        <div className="space-y-6 justify-center">
                            <div className="gradient-border p-6 border-glow">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary"/>
                                    </div>

                                    <div className="relative text-left group">
                                        <h4 className="font-medium neon-text"> Email </h4>
                                        <a href="mailto:khordylan2003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            khordylan2003@gmail.com
                                        </a>

                                        <div className="absolute left-0 mt-2 w-48 p-4 bg-card text-foreground text-sm rounded opacity-0 border border-foreground transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:z-50">
                                            I'm always happy to hear from you—just keep your messages free of spammy vibes so they actually land in my inbox 😉.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="gradient-border p-6 border-glow">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary"/>
                                    </div>

                                    <div className="relative group text-left">
                                        <h4 className="font-medium neon-text"> Phone </h4>
                                        <a href="tel:+15157157665" className="text-muted-foreground hover:text-primary transition-colors">
                                            +1 (515) 715-7665
                                        </a>

                                        <div className="absolute left-0 mt-2 w-48 p-4 bg-card text-foreground text-sm rounded opacity-0 border border-foreground transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:z-50">
                                            I have a mild fear of mystery calls. Voicemail is safe. Leave me one, and I'll definitely reach back out if you're not shady 😏!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 border-glow">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>

                                    <div className="relative group text-left">
                                        <h4 className="font-medium neon-text"> Location </h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Grimes, IA, USA
                                        </a>

                                        <div className="absolute left-0 mt-2 w-48 p-4 bg-card text-foreground text-sm rounded opacity-0 border border-foreground transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:z-50">
                                            Exact address: top secret 😎. In the area? Let's hang out!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/dylan-khor-a9a329234/" target="_blank">
                                    <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300"/>
                                </a>
                                <a href="https://www.instagram.com/do3o4/" target="_blank">
                                    <Instagram className="h-6 w-6 text-pink-400 group-hover:text-pink-300"/>
                                </a>
                                <a href="https://www.facebook.com/dylan.khor.505" target="_blank">
                                    <Facebook className="h-6 w-6 text-blue-500 group-hover:text-blue-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    required 
                                    className={cn(
                                        "w-full px-4 py-3 rounded-md border border-input bg-background",
                                        "focus:outline-hidden focus:ring-2 focus:ring-primary")}
                                    placeholder="John/Jane Doe..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    required 
                                    className={cn(
                                        "w-full px-4 py-3 rounded-md border border-input bg-background",
                                        "focus:outline-hidden focus:ring-2 focus:ring-primary")}
                                    placeholder="john/jane@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message" 
                                    name="message"
                                    required 
                                    className={cn(
                                        "w-full px-4 py-3 rounded-md border border-input bg-background",
                                        "focus:outline-hidden focus:ring-2 focus:ring-primary")}
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};