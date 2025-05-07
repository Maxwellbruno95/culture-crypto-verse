
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Maximize } from "lucide-react";

const Design = () => {
  const [selectedImage, setSelectedImage] = useState<{image: string, title: string} | null>(null);

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
      title: "History of Economic Bubbles",
      image: "/lovable-uploads/a768513d-8f85-450c-8bf6-9e2eb39fdb7b.png",
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
            onClick={() => setSelectedImage({image: project.image, title: project.title})}
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
                  <div className="absolute top-2 right-2 bg-black/30 rounded-full p-1">
                    <Maximize className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedImage?.title || "Design view"}
          </DialogTitle>
          {selectedImage && (
            <div className="max-h-[80vh] overflow-auto p-1">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionContainer>
  );
};

export default Design;
