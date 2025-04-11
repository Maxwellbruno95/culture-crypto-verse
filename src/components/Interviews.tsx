
import SectionContainer from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Video, Radio, ExternalLink } from "lucide-react";

const Interviews = () => {
  const features = [
    {
      title: "MusicNFTs with Unstoppable Domains",
      description: "Discussion on MusicNFTs during UD Fam Spotlight on X spaces",
      date: "2023",
      platform: "YouTube",
      type: "Video",
      icon: <Video className="h-6 w-6 text-crypto-purple" />,
      url: "https://youtu.be/k19dyaX_PsU?si=3CKk58-hrQZjgwE1",
    },
    {
      title: "African Artists Showcase",
      description: "African Blockchain Week Virtual Summit 2021 (Morocco)",
      date: "2021",
      platform: "YouTube",
      type: "Video",
      icon: <Video className="h-6 w-6 text-crypto-purple" />,
      url: "https://youtu.be/JK1vV4F3nZQ?si=lcd9J0GKRffDRaWC",
    },
    {
      title: "Metaverse Soundcheck Podcast",
      description: "Personal insights about early interaction with blockchain-based music distribution from Nairobi, Kenya",
      date: "2022",
      platform: "Spotify",
      type: "Podcast",
      icon: <Mic className="h-6 w-6 text-crypto-purple" />,
      url: "https://open.spotify.com/episode/0XvgxrlrzLanFc2Nuu4AGt?si=oO4P8S90T2u_ntwm42gTmw",
    },
    {
      title: "Rarebirdshq Interview",
      description: "Creating Content on the Blockchain with Maxwell Bruno from Kenya",
      date: "February 2022",
      platform: "Website",
      type: "Article",
      icon: <Radio className="h-6 w-6 text-crypto-purple" />,
      url: "https://rarebirdshq.com/2022/02/04/creating-content-on-the-blockchain-with-maxwell-bruno-from-kenya/?lang=hi",
    },
  ];

  return (
    <SectionContainer id="interviews">
      <div className="text-center mb-10">
        <h2 className="section-heading">Media Features & Interviews</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Appearances on podcasts, videos, and other media platforms discussing blockchain technology, NFTs, and digital culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{feature.platform}</span>
                <span className="text-muted-foreground">{feature.date}</span>
              </div>
            </CardContent>
            <CardFooter>
              <a href={feature.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full group">
                  Watch/Listen
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Interviews;
