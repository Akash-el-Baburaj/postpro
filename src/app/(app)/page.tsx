"use client"
import AboutCounter from "@/components/AboutCounter";
import Clients from "@/components/Clients";
import ComparisonSection from "@/components/ComparisonSection";
import FadeContent from "@/components/FadeContent";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Processes";
import HorizontalScrollAnimation from '@/components/ServiceScroll'
import Teams from "@/components/TeamsSection";
import HorizontalScrollSection from "@/components/VerticalScrollCards";
import Image from "next/image";

export default function Home() {
  return (
   <>
      <div className="font-sans relative isolate bg-gray-900 overflow-hidden items-center justify-items-center">
        <Hero />
        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
          <Features />  
        </FadeContent>
      </div>
       <div className="relative min-h-screen min-w-full overflow-hidden">
          <ComparisonSection />
        </div> 
      <div className="relative isolate bg-gray-900 pt-4 pb-6 sm:pt-32 md:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <div >
                <HorizontalScrollAnimation />
            </div>
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <AboutCounter />
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <Process />
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <Clients />
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <Teams />
          </FadeContent>
        </div>
      </div>
    </>
  );
}
