"use client"

import { Hero } from "../_components/Hero";
import { Navbar } from "../_components/Navbar";

export default function Home() {
  
  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <Hero />
      
    </div>
  );
}
