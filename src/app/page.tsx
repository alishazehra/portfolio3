import React from "react";
import Home from "./home/page";
import Services from "./services/page";
import About from "./about/page";
import Contact from "./contact/page";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const page = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger><img className="w-11 h-11 sm:text-xl md:text-2xl lg:text-4xl " src="https://icon-library.com/images/white-menu-icon/white-menu-icon-15.jpg" alt="" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Skills</SheetTitle>
      <SheetDescription>
        Typescript, Javascript, Html, CSS and Python
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

      <Home/>
      
      <Services/>
      <About/>
      <Contact/>
     
    </div>
  )
}

export default page
