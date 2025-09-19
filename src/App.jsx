import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function App() {

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh(); // refresh ScrollTrigger when page is fully loaded
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); 
      }
  }, []);

  return (
    <>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>          {/*Route for main page*/}
          <Route path="/*" element={<NotFound/>}/>    {/*Route for 404 not found page on any other pages*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
