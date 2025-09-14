import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Typewriter from "typewriter-effect";

const titles = [
  "Full-Stack Developer",
  "AI Engineer",
  "Data Scientist"
]

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-9">

            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight flex flex-col md:flex-row items-center justify-center gap-2 whitespace-nowrap">
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
                <span className="text-5xl sm:text6xl lg:text-7xl text-primary mx-2 opacity-0 animate-fade-in-delay-1"> Dylan</span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Khor</span>
              </div>
            </div>


            <div
              className={cn(
                "text-2xl md:text-7xl font-bold flex flex-col md:flex-row items-center justify-center gap-2 mx-auto pt-10"
              )}
            >
              <span>Aspiring</span>
              <span className="slide text-primary inline-block min-w-max">
                <span className="wrapper">
                  <span className="neon-text">Full-Stack Developer</span>
                  <span className="neon-text">AI Engineer</span>
                  <span className="neon-text">Data Scientist</span>
                </span>
              </span>
            </div>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>

          </div>
        </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
