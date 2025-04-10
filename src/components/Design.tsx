
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Design = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const designProjects = [
    {
      title: "Project Milkbox Discord",
      image: "/lovable-uploads/d7651ad9-fc5d-4b5f-a668-013748fa881c.png",
      category: "Web3 Campaign",
    },
    {
      title: "Project Milkbox",
      image: "/lovable-uploads/c8add918-b8a0-49ec-84f1-5ffcd3044f54.png",
      category: "Blockchain Project",
    },
    {
      title: "Project Milkbox - Pet Search",
      image: "/lovable-uploads/4aece45a-0ffd-4fb7-8545-9c2fceeb790f.png",
      category: "Product Poster",
    },
    {
      title: "IRYO Healthcare Network",
      image: "/lovable-uploads/bfcb5b3d-2328-4fe8-a9e4-aa44a927aba4.png",
      category: "DApp Promotion",
    },
    {
      title: "NFT Merch Store",
      image: "/lovable-uploads/b3e4ba6e-f6a5-4df1-94d2-af12b5a28301.png",
      category: "Marketing Material",
    },
    {
      title: "Blockchain Infographic",
      image: "/lovable-uploads/bd0997c2-16d0-4763-91c2-9c62d398628a.png",
      category: "Educational Content",
    },
  ];

  return (
    <SectionContainer id="design" className="bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h2 className="section-heading">Graphic Design Portfolio</h2>
        <p className="text-lg max-w-3xl mx-auto">
          A collection of digital artwork and designs I've created for Web3 campaigns, events, 
          and cultural blockchain initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designProjects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden card-hover cursor-pointer"
            onClick={() => setSelectedImage(project.image)}
          >
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-xs font-medium text-crypto-gold mb-1">{project.category}</span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Full size design" 
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </SectionContainer>
  );
};

export default Design;
