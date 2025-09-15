import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              setIsScrolled(window.scrollY > 10);
              ticking = false;
            });
            ticking = true;
          }
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      
        // cleanup in case component unmounts
        return () => document.body.classList.remove("overflow-hidden");
    }, [isMenuOpen]);

   
    return (
      <><nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
                )}
        >

            <div className="container flex items-center justify-between">

                <motion.a 
                    initial={{ opacity: 0, x: -50}}
                    animate={{ opacity: 1, x: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 200, 
                        damping: 25,
                        delay: 0.3,
                        duration: 2.0
                    }}
                    className="text-xl font-bold text-primary flex items-center gap-4" 
                    href="#home">
                    <img
                        src="/dylan.png"
                        alt="Dylan's Profile Picture"
                        className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300" />
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Dylan's </span> Portfolio
                    </span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-11">
                    {navItems.map((item, key) => (
                        <motion.a 
                            key={key}
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 200, 
                                damping: 25,
                                delay: 0.7 + key * 0.2,
                            }}
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </motion.a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Nav */}

                <motion.button
                    whileTap={{scale: 0.7}}
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label="Open Menu"
                >
                    <Menu size={24}/>
                </motion.button>
            </div>
        </nav>
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: isMenuOpen ? 1 : 0}}
            transition={{ duration: 0.5 , ease: "easeInOut"}}
            className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-md z-40 flex flex-col",
            "items-center justify-center transition-all duration-300 md:hidden overflow-hidden",
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}>
            <motion.button
                whileTap={{scale: 0.7}}
                onClick={() => setIsMenuOpen(false)}
                className=" fixed top-6 right-6 md:hidden p-2 text-foreground z-50"
                aria-label="Close Menu"
            >
                <X size={24} />
            </motion.button>
            <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)} // close navbar after clicking on a link in mobile
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </motion.div></>
    );
};