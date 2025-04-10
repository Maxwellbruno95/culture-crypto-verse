
import SectionContainer from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { 
  Twitter, 
  Instagram, 
  Mail, 
  Send, 
  Youtube, 
  ExternalLink, 
  MessageSquare 
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      platform: "Twitter/X",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://twitter.com/web3educator",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://instagram.com/web3educator",
    },
    {
      platform: "Telegram",
      icon: <MessageSquare className="h-6 w-6" />,
      url: "https://t.me/web3educator",
    },
    {
      platform: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:contact@web3educator.com",
    },
    {
      platform: "Lens",
      icon: <ExternalLink className="h-6 w-6" />,
      url: "https://lens.xyz/web3educator",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      url: "https://youtube.com/web3educator",
    },
  ];

  return (
    <SectionContainer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
        <p className="text-xl text-slate-300">
          Interested in collaborating on blockchain projects, cultural NFTs, or Web3 education?
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
          <Button 
            size="lg"
            className="bg-crypto-purple hover:bg-crypto-darkpurple group"
          >
            <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            Get In Touch
          </Button>
          <p className="mt-4 text-sm text-slate-400">
            Available for collaborations, speaking engagements, and community building.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
