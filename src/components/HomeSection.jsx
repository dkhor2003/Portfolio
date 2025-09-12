import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Typewriter from "typewriter-effect"

export const HomeSection = () => {
    return (
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-9">

            <div className="text-3xl sm:text-5xl font-bold font-mono tracking-tight flex flex-col md:flex-row items-center justify-center gap-2 whitespace-nowrap">
              <div>
                <span className="opacity-0 animate-fade-in"> 
                    <Typewriter options={{
                      strings: ["Hi,", "你好,", "Apa khabar?", "こんにちは、"],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 50,
                      pauseFor: 1500
                    }}/>
                </span> 
              </div>
              <div>
                <span className="opacity-0 animate-fade-in">I'm</span> 
                <span className="text-primary mx-2 opacity-0 animate-fade-in-delay-1"> Dylan</span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Khor</span>
              </div>
            </div>


            <h3 className={cn(
                "text-2xl md:text-3xl font-bold flex items-center justify-center gap-2",
                "text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3"
            )}> 
                <span className={cn(
                    "font-semibold italic"
                )}>
                  (FullStack || Software || Web || AI) Developer
                </span>

            </h3>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
      </section>
    );
   };