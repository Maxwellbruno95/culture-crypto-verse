
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Mail, Twitter, Instagram, Telegram } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      url: "mailto:contact@web3educator.com",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      url: "https://twitter.com/web3educator",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      url: "https://instagram.com/web3educator",
    },
    {
      icon: <Telegram className="h-5 w-5" />,
      label: "Telegram",
      url: "https://t.me/web3educator",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {isOpen && (
        <div className="flex flex-col space-y-2 items-end animate-fade-in">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg hover:bg-crypto-purple hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">{link.label}</span>
              {link.icon}
            </a>
          ))}
        </div>
      )}

      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg ${
          isOpen ? "bg-slate-700 hover:bg-slate-900" : "bg-crypto-purple hover:bg-crypto-darkpurple"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingContact;
