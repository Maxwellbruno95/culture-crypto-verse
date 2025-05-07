
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Maximize } from "lucide-react";

const Memes = () => {
  const [selectedMeme, setSelectedMeme] = useState<{image: string, title: string} | null>(null);

  const memes = [
    {
      title: "Crypto Market Rollercoaster",
      image: "/lovable-uploads/773cff69-af07-4b82-a80b-6023a1f91c7b.png",
      category: "Crypto Humor",
    },
    {
      title: "Bitcoin vs Ethereum vs EOS Traffic",
      image: "/lovable-uploads/fb15336b-ae1b-49b0-b971-8df0ff644822.png",
      category: "Blockchain Comparison",
    },
    {
      title: "Bitcoin 2017 vs 2018",
      image: "/lovable-uploads/495a0980-85ce-4f3d-882e-c432f211322f.png",
      category: "Market Humor",
    },
    {
      title: "Crypto Giveth and Taketh",
      image: "/lovable-uploads/3542b6c5-dbff-4fa3-ac41-49cbbdd41729.png",
      category: "Investment Humor",
    },
    {
      title: "Crypto's Sweet Technology",
      image: "/lovable-uploads/5cfb3def-c71d-43da-ab1c-7e3631c1cbeb.png",
      category: "Investment Reality",
    },
    {
      title: "Blockchain Networks Competition",
      image: "/lovable-uploads/ce4a9976-c2f6-451f-a8e0-4748c09c4ac3.png",
      category: "Network Comparison",
    }
  ];

  return (
    <SectionContainer id="memes" className="bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h2 className="section-heading">Meme Gallery</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Crypto, Blockchain and Web3 humor through meming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {memes.map((meme, index) => (
          <Card 
            key={index} 
            className="overflow-hidden card-hover cursor-pointer"
            onClick={() => setSelectedMeme({image: meme.image, title: meme.title})}
          >
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-video w-full">
                  <img 
                    src={meme.image} 
                    alt={meme.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-xs font-medium text-crypto-gold mb-1">{meme.category}</span>
                  <h3 className="text-lg font-bold">{meme.title}</h3>
                  <div className="absolute top-2 right-2 bg-black/30 rounded-full p-1">
                    <Maximize className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedMeme} onOpenChange={() => setSelectedMeme(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedMeme?.title || "Meme view"}
          </DialogTitle>
          {selectedMeme && (
            <div className="max-h-[80vh] overflow-auto p-1">
              <img 
                src={selectedMeme.image} 
                alt={selectedMeme.title} 
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

export default Memes;
