import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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

   
    return (
      <nav className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}>

        <div className="container flex items-center justify-between">

            <a className="text-xl font-bold text-primary flex items-center gap-4" href="#home"> 
                <img 
                    src="/dylan.png" 
                    alt="Dylan's Profile Picture"
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300"
                />
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> Dylan's </span> Portfolio
                </span>    
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-11">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile Nav */}

            <button 
                onClick={() => setIsMenuOpen((prev) => !prev)} 
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            > 
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>} 
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col",
                "items-center justify-center transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
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
            </div>

        </div>

      </nav>
    );
};