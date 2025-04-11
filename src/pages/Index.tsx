
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Design from "@/components/Design";
import Music from "@/components/Music";
import Reviews from "@/components/Reviews";
import Tweets from "@/components/Tweets";
import Websites from "@/components/Websites";
import Projects from "@/components/Projects";
import Translation from "@/components/Translation";
import Blogs from "@/components/Blogs";
import Memes from "@/components/Memes";
import Interviews from "@/components/Interviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Design />
        <Music />
        <Translation />
        <Blogs />
        <Memes />
        <Interviews />
        <Reviews />
        <Tweets />
        <Websites />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
