
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-purple/10 via-transparent to-crypto-blue/10 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-crypto-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-crypto-blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-3xl space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
          <span className="gradient-text">Maxwell</span> Bruno
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          8+ years cultivating a diverse career in the crypto and Web3 space as a community manager, 
          artist, builder, and educator.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="https://humdrum-beluga-31b.notion.site/Maxwell-Bruno-1d3b332ae8e280ac8b2aff6a452d43c0?pvs=4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-crypto-purple hover:bg-crypto-darkpurple">
              Resume
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </div>
    </div>
  );
};

export default Hero;

