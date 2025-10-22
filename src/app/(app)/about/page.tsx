import AboutCounter from "@/components/AboutCounter";
import AboutSection from "@/components/AboutSection";
import Teams from "@/components/TeamsSection";

export default function About() {

    return(
          <>
            <div className="font-sans relative isolate bg-gray-900 overflow-hidden items-center justify-items-center">
                <AboutSection />
            </div>
            <div className="relative isolate bg-gray-900 pt-4 pb-6 sm:pt-32 md:pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <AboutCounter />
                    <Teams />
                </div>
            </div>
        </>
    )
}