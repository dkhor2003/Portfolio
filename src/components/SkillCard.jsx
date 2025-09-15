import { useState, useEffect } from "react";

const IsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkScreen = () => setIsMobile(window.innerWidth < 768); 
      checkScreen();
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }, []);
  
    return isMobile;
  };

export const SkillCard = ({key, skill}) => {

    const [isClicked, setIsClicked] = useState(false);
    const isMobile = IsMobile();

    const handleClick = () => {
        if (!isMobile) return;
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 2000);
    };

    return (
        <div className="group card-hover perspective-1000" onClick={handleClick}>
            <div 
                className={`relative transition-transform duration-1000 preserve-3d 
                            ${isClicked ? "rotate-y-180" : "group-hover:rotate-y-180"}
                           `}
            >
                <div key={key} className="absolute inset-0 skill-card backface-hidden flex items-center justify-center">
                    <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain"/>
                </div>

                <div key={key} className="inset-0 skill-card rotate-y-180 backface-hidden">
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-sm sm:text-lg">{skill.name}</h3>
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
    )
};
