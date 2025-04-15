
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FloatingContact from "@/components/FloatingContact";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    // Load EmailJS script if not already loaded
    if (!(window as any).emailjs) {
      const script = document.createElement("script");
      script.src = "https://cdn.emailjs.com/sdk/2.3.2/email.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
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
