import { useRef, useEffect } from "react"
import { gsap } from "gsap";

export const Cursor = () => {

  // Refs for cursor elements
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // hide cursor in mobile
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
  if (isMobile) {
    return null; 
  }
 
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current; 

    // Set element styles before any animation starts
    gsap.set([cursor, cursorBorder], {
        xPercent: -50,
        yPercent: -50
    });

    // Trailing effect with different speeds for both of them
    const xTo = gsap.quickTo(cursor, "x", {duration: 0.2, ease: "power3.out"})
    const yTo = gsap.quickTo(cursor, "y", {duration: 0.2, ease: "power3.out"})
    const xToBorder = gsap.quickTo(cursorBorder, "x", {duration: 0.3, ease: "power.out"})
    const yToBorder = gsap.quickTo(cursorBorder, "y", {duration: 0.3, ease: "power3.out"})

    // Mouse move handler
    const handleMouseMove = (e) => {
        xTo(e.clientX);
        yTo(e.clientY); 
        xToBorder(e.clientX);
        yToBorder(e.clientY); 
    }

    // Mouse move listener
    window.addEventListener("mousemove", handleMouseMove); 

    // Click animation
    document.addEventListener("mousedown", () => {
        gsap.to([cursor, cursorBorder], {
            scale: 0.6,
            duration: 0.2
        })
    })
    document.addEventListener("mouseup", () => {
        gsap.to([cursor, cursorBorder], {
            scale: 1,
            duration: 0.2
        })
    })

  }, []);

  return (
    <>
        {/* Center dot */}
        <div 
            ref={cursorRef} 
            className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
        />

        {/* Surrounding ring */}
        <div 
            ref={cursorBorderRef}
            className="fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50"
        />
    </>
  )
}
