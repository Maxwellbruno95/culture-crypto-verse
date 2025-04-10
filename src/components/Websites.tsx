
import SectionContainer from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ExternalLink } from "lucide-react";

const Websites = () => {
  const websites = [
    {
      title: "MA-3.fun",
      description: "A platform celebrating Kenyan Matatu culture through NFTs and blockchain technology.",
      image: "/lovable-uploads/7f59d5f0-5cfd-4e91-a2d6-312976611857.png",
      url: "https://ma-3.fun",
      status: "Live",
    },
    {
      title: "AbstractchainAI.com",
      description: "Exploring the intersection of blockchain, artificial intelligence, and abstract art.",
      image: "/lovable-uploads/cc4d1092-00b5-4f5a-ade1-69f8b1581bcc.png",
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
