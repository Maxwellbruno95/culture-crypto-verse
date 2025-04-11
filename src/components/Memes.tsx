
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SmilePlus } from "lucide-react";

const Memes = () => {
  const [selectedMeme, setSelectedMeme] = useState<string | null>(null);

  const memes = [
    {
      title: "When Gas Fees Are Too High",
      image: "/placeholder.svg",
      category: "Crypto Humor",
    },
    {
      title: "NFT Market Rollercoaster",
      image: "/placeholder.svg",
      category: "NFT Culture",
    },
    {
      title: "Web3 Expectations vs Reality",
      image: "/placeholder.svg",
      category: "Tech Humor",
    },
    {
      title: "DeFi Yield Farming",
      image: "/placeholder.svg",
      category: "DeFi Jokes",
    },
    {
      title: "Blockchain Explained",
      image: "/placeholder.svg",
      category: "Educational Humor",
    },
    {
      title: "Crypto Winter Survival Guide",
      image: "/placeholder.svg",
      category: "Market Humor",
    },
  ];

  return (
    <SectionContainer id="memes" className="bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h2 className="section-heading">Meme Gallery</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Crypto and Web3 educational humor that makes complex concepts accessible and entertaining.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memes.map((meme, index) => (
          <Card 
            key={index} 
            className="overflow-hidden card-hover cursor-pointer"
            onClick={() => setSelectedMeme(meme.image)}
          >
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-[4/3] flex items-center justify-center bg-slate-200 dark:bg-slate-800">
                  <SmilePlus className="h-16 w-16 text-slate-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-xs font-medium text-crypto-gold mb-1">{meme.category}</span>
                  <h3 className="text-lg font-bold">{meme.title}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedMeme} onOpenChange={() => setSelectedMeme(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedMeme && (
            <img 
              src={selectedMeme} 
              alt="Meme full view" 
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </SectionContainer>
  );
};

export default Memes;
