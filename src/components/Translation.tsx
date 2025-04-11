
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages } from "lucide-react";

const Translation = () => {
  const translationProjects = [
    {
      title: "Web3 Educational Content",
      description: "Translation of blockchain tutorials and educational materials from English to French",
      client: "Blockchain Academy",
      year: "2023",
    },
    {
      title: "NFT Project Documentation",
      description: "Technical documentation and whitepaper translation for NFT marketplace",
      client: "NFT Collective",
      year: "2022",
    },
    {
      title: "DeFi Platform Interface",
      description: "UI/UX localization and translation for decentralized finance application",
      client: "DeFi Labs",
      year: "2023",
    },
    {
      title: "Cryptocurrency Exchange",
      description: "Website content and user guide translation from English to French",
      client: "Crypto Exchange",
      year: "2022",
    },
  ];

  return (
    <SectionContainer id="translation" className="bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h2 className="section-heading">Translation Work</h2>
        <p className="text-lg max-w-3xl mx-auto">
          English to French translation specializing in blockchain, cryptocurrency, and Web3 content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {translationProjects.map((project, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Languages className="h-6 w-6 text-crypto-purple" />
                <CardTitle>{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex justify-between">
              <span>Client: {project.client}</span>
              <span>{project.year}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Translation;
