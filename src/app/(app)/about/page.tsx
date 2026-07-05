import AboutCounter from "@/components/AboutCounter";
import AboutSection from "@/components/AboutSection";
import Teams from "@/components/TeamsSection";

export default function About() {

    return(
          <>
            <div className="relative isolate overflow-hidden">
                <AboutSection />
            </div>
            <div className="relative isolate pb-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <AboutCounter />
                    <Teams />
                </div>
            </div>
        </>
    )
}
