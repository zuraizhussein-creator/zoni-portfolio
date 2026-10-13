import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// The home page is built by stacking our section components in order.
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative overflow-hidden">
        {/* Soft background glows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-electric/20 blur-[140px]" />
          <div className="absolute top-[60rem] -left-40 h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-[120px]" />
          <div className="absolute top-[120rem] -right-40 h-[30rem] w-[30rem] rounded-full bg-electric/15 blur-[130px]" />
        </div>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
