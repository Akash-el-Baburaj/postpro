'use client'

import Footer from "@/components/Footer"
// import Footer from "@/components/Footer"
import Header from "@/components/Header"

export function ApplicationLayout({children}:{children: React.ReactNode}){

    return (
    <div className="site-shell relative min-h-screen">
        <Header />
        <main className="relative z-0">{children}</main>
        <Footer />
    </div>
    )
}
