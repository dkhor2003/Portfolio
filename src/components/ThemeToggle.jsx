import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    // When page renders
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || !storedTheme){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); // set theme variable to light so that when refresh it would keep light mode
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); // set theme variable to dark so that when refresh it would keep dark mode
            setIsDarkMode(true);
        }
        
    };

    return (
        <motion.button 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                delay: 1.5,
                duration: 0.8
            }}
            onClick={toggleTheme} 
            className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
            "transition-colors duration-300 focus:outline-hidden"
        )}> 
            {isDarkMode ? 
                <Sun className="h-6 w-6 text-yellow-300"/> 
                : 
                <Moon className="h-6 w-6 text-blue-900"/>
            }
        </motion.button>
    )
}