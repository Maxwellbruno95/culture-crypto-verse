
import SectionContainer from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ExternalLink } from "lucide-react";

const Websites = () => {
  const websites = [
    {
      title: "BloQubits",
      description: "A platform to discover Blockchain projects focused on Quantum computing and quantum tech.",
      image: "/lovable-uploads/4d162030-ff3e-475a-b6b2-16d384cb33b4.png",
      url: "https://bloqubits.com",
      status: "Live",
    },
    {
      title: "SuperchainAI",
      description: "A project to discover AI projects built on the Superchain ecosystem.",
      image: "/lovable-uploads/58133cfa-786e-4b33-9bdb-f122ef3c4266.png",
      url: "https://superchainai.com",
      status: "Live",
    },
    {
      title: "MA-3.fun",
      description: "A platform celebrating Kenyan Matatu culture through NFTs and blockchain technology.",
      image: "/lovable-uploads/da36598e-34de-43ff-9a4c-7964a8dd1a63.png",
      url: "https://ma-3.fun",
      status: "Live",
    },
    {
      title: "AbstractchainAI.com",
      description: "Exploring the intersection of blockchain, artificial intelligence, and abstract art.",
      image: "/lovable-uploads/9c3e4660-503d-466a-a8a5-548195e5c19c.png",
      url: "https://abstractchainai.com",
      status: "Live",
    },
  ];

  return (
    <SectionContainer id="websites" className="bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h2 className="section-heading">Websites I've Created</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Web platforms showcasing blockchain technology, cultural preservation, and innovative digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {websites.map((website, index) => (
          <Card key={index} className="card-hover overflow-hidden flex flex-col">
            <div className="aspect-video relative">
              <img 
                src={website.image} 
                alt={website.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  website.status === "Live" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-amber-100 text-amber-800"
                }`}>
                  {website.status}
                </span>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-crypto-purple" />
                {website.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{website.description}</p>
            </CardContent>
            <CardFooter>
              {website.status === "Live" ? (
                <a 
                  href={website.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    variant="outline"
                    className="w-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </a>
              ) : (
                <Button 
                  variant="outline"
                  className="w-full"
                  disabled
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Coming Soon
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Websites;
