import { MotionConfig } from "framer-motion";
import { Dining } from "./components/Dining";
import { Events } from "./components/Events";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Marquee } from "./components/Marquee";
import { MobileActionBar } from "./components/MobileActionBar";
import { Navbar } from "./components/Navbar";
import { PoolSection } from "./components/PoolSection";
import { Story } from "./components/Story";

/**
 * WHISPERING DOVE — Garden & Pool, Mihang'o, Nairobi
 * A single-page editorial experience: See → Imagine → Explore → Plan → Visit
 */
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Experience />
        <PoolSection />
        <Dining />
        <Marquee />
        <Events />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
      {/* barely-there film grain for a printed-magazine feel */}
      <div className="grain" aria-hidden />
    </MotionConfig>
  );
}
