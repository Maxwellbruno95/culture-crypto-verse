
import SectionContainer from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { 
  Twitter, 
  Instagram, 
  Mail, 
  Send, 
  Youtube, 
  ExternalLink, 
  MessageSquare,
  Linkedin,
  Facebook
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      platform: "Twitter/X",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://x.com/maxwellbrunoX",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://www.instagram.com/maxwellbruno.eth/",
    },
    {
      platform: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      url: "https://www.facebook.com/maxwellbruno/",
    },
    {
      platform: "Telegram",
      icon: <MessageSquare className="h-6 w-6" />,
      url: "https://t.me/maxwellbruno",
    },
    {
      platform: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:maxwellbruno52@gmail.com",
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/maxwell-bruno-244ba8141/",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      url: "https://www.youtube.com/channel/UCHSH81HCDZBL99c6D7zjUfQ",
    },
  ];

  return (
    <SectionContainer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
        <p className="text-xl text-slate-300">
          OUL Estates is mainly focused on empowering artists, musicians, developers, builders, innovators and sustainable living.
          Reach out through any of these platforms.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-slate-800 hover:bg-crypto-purple transition-colors duration-200"
            >
              {link.icon}
              <span className="font-medium">{link.platform}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <a href="/contact">
            <Button 
              size="lg"
              className="bg-crypto-purple hover:bg-crypto-darkpurple group"
            >
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Get In Touch
            </Button>
          </a>
          <p className="mt-4 text-sm text-slate-400">
            Available for collaborations, speaking engagements, and community building.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
