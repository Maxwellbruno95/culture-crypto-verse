
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FloatingContact from "@/components/FloatingContact";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    // Initialize EmailJS directly
    const initEmailJs = async () => {
      if (typeof window !== "undefined" && !(window as any).emailjs?.initialized) {
        try {
          await import("emailjs-com").then((emailjsModule) => {
            emailjsModule.init("JgjR_Q1xberRW1o9N");
            (window as any).emailjs = { initialized: true };
          });
        } catch (error) {
          console.error("Failed to initialize EmailJS:", error);
        }
      }
    };
    
    initEmailJs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="container py-12 md:py-20 px-4 mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="group mb-6">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Whether you're interested in a collaboration, have questions about my work, or just want to say hello, I'd love to hear from you.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Contact;
