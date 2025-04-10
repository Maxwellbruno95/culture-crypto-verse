
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Users, Music, Code, PenTool, Gem } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MA-3 Token",
      description: "A blockchain token preserving and celebrating Kenyan Matatu culture through digital assets and NFTs.",
      icon: <Gem className="h-10 w-10 text-crypto-purple" />,
      tags: ["Token Creation", "Cultural NFTs", "Community"],
    },
    {
      title: "Non-Fungible Culture (NFC)",
      description: "Initiative to onboard global traditions and cultural heritage onto the blockchain for preservation and celebration.",
      icon: <Layers className="h-10 w-10 text-crypto-purple" />,
      tags: ["Cultural Preservation", "NFTs", "Global Communities"],
    },
    {
      title: "Mbogi Ya NFT",
      description: "Community management for a Kenyan NFT collective, fostering local artists and blockchain adoption.",
      icon: <Users className="h-10 w-10 text-crypto-purple" />,
      tags: ["Community Management", "Artist Support", "Education"],
    },
    {
      title: "OUL Estates",
      description: "Content creation and community engagement for a virtual real estate project in the metaverse.",
      icon: <PenTool className="h-10 w-10 text-crypto-purple" />,
      tags: ["Content Creation", "Metaverse", "Virtual Real Estate"],
    },
    {
      title: "Web3 Edutainment",
      description: "Combining music, art and education to make blockchain learning accessible and enjoyable.",
      icon: <Music className="h-10 w-10 text-crypto-purple" />,
      tags: ["Education", "Music", "Blockchain Literacy"],
    },
    {
      title: "Digital NFT Collaborations",
      description: "Artistic collaborations creating NFT collections that bridge traditional art forms with blockchain technology.",
      icon: <Code className="h-10 w-10 text-crypto-purple" />,
      tags: ["NFT Art", "Collaborations", "Digital Art"],
    },
  ];

  return (
    <SectionContainer id="projects">
      <div className="text-center mb-10">
        <h2 className="section-heading">Projects I've Worked On</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Blockchain, art, and community-driven projects connecting traditional culture with emerging technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="card-hover h-full flex flex-col">
            <CardHeader>
              <div className="mb-4">{project.icon}</div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-crypto-purple/10 text-crypto-purple border-crypto-purple/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
