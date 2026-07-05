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

export default function Home() {
  return (
   <>
      <div className="relative isolate overflow-hidden">
        <Hero />
        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
          <Features />  
        </FadeContent>
      </div>
       <div className="relative overflow-hidden">
          <ComparisonSection />
        </div> 
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          
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
