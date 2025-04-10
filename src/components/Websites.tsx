
import SectionContainer from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ExternalLink } from "lucide-react";

const Websites = () => {
  const websites = [
    {
      title: "MA-3.fun",
      description: "A platform celebrating Kenyan Matatu culture through NFTs and blockchain technology.",
      image: "https://images.unsplash.com/photo-1642351202898-db81b11fec6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2VueWF8ZW58MHx8MHx8fDA%3D",
      url: "https://ma-3.fun",
      status: "Live",
    },
    {
      title: "AbstractchainAI.com",
      description: "Exploring the intersection of blockchain, artificial intelligence, and abstract art.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3QlMjBhaXxlbnwwfHwwfHx8MA%3D%3D",
      url: "https://abstractchainai.com",
      status: "Live",
    },
    {
      title: "Superchain AI x Blockchain",
      description: "Upcoming project connecting AI capabilities with blockchain verification and transparency.",
      image: "https://images.unsplash.com/photo-1642751227050-feb02d648136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvY2tjaGFpbiUyMGFpfGVufDB8fDB8fHww",
      url: "#",
      status: "Coming Soon",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Button 
                variant="outline"
                className="w-full"
                disabled={website.status !== "Live"}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Websites;
