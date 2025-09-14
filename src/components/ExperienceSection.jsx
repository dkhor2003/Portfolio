import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { CanvasLoader } from "@/components/CanvasLoader"
import { Developer } from "@/components/Developer"

const workExperiences = [
    {
        id: 1,
        name: "Iowa State University",
        pos: "Graduate Research Assistant",
        duration: "Jan 2025 - Present",
        title: "Advancing adaptive discretization techniques, legged robot safety testing and bridging the Sim2Real gap to enhance real-world applicability and efficiency.",
        icon: "/company-logos/isu-logo.jpg",
        animation: "cheer"
    },
    {
        id: 2,
        name: "Source Allies",
        pos: "Apprentice Software Engineer",
        duration: "May 2025 - Aug 2025",
        title: "Improved onboarding system through better observability, security, scalability \
                and maintainability, while also expanded internal chatbot with multi-session \
                support and an expanded knowledge base to improve user experience and response accuaracy.",
        icon: "/company-logos/source-allies-logo.webp",
        animation: "salute"
    },
    {
        id: 3,
        name: "Iowa State University",
        pos: "Graduate Teaching Assistant",
        duration: "Aug 2023 - Dec 2024",
        title: "Teaching Assistant for Python, Algorithms, and Machine Learning courses. Awarded Teaching Excellence Award in Fall 2024.",
        icon: "/company-logos/isu-logo.jpg",
        animation: "shake"
    },
]

export const ExperienceSection = () => {

  const [animationName, setAnimationName] = useState("idle")

  return (
    <section className="c-space relative">
        <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                My <span className="text-primary">Work Experience</span>
            </h2>
            <div className="work-container">
                <div className="work-canvas">
                    <Canvas>
                        <ambientLight intensity={3} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1}/>
                        <OrbitControls 
                            enableZoom={false} 
                            maxPolarAngle={Math.PI / 2}   
                            minAzimuthAngle={-Math.PI / 4}
                            maxAzimuthAngle={Math.PI / 4} 
                        />  {/* prevents looking model from below, rotating too far left or right */}
                        <Suspense fallback={<CanvasLoader />}>
                            <Developer position-y={-3} scale={3} animationName={animationName}/>
                        </Suspense>
                    </Canvas>
                </div>

                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map(({id, name, pos, icon, duration, title, animation}) => (
                            <div 
                                key={id} 
                                className="work-content_container group" 
                                onClick={() => setAnimationName(animation.toLowerCase())}
                                onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                onPointerOut={() => setAnimationName("idle")}
                            >
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="work-content_logo">
                                        <img src={icon} alt="logo" className="w-full h-full" />
                                    </div>
                                    <div className="work-content_bar"/>
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold">{name}</p>
                                    <p className="text-sm mb-5 text-foreground/50">{pos} -- <span className="italic">{duration}</span></p>
                                    <p className="text-foreground/80 group-hover:text-foreground transition ease-in-out duration-500">{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}