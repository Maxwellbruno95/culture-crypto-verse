
import SectionContainer from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Video, Radio, ExternalLink } from "lucide-react";

const Interviews = () => {
  const features = [
    {
      title: "Blockchain Africa Conference",
      description: "Discussion on the integration of traditional African art forms with blockchain technology",
      date: "February 2023",
      platform: "YouTube",
      type: "Video",
      icon: <Video className="h-6 w-6 text-crypto-purple" />,
      url: "#",
    },
    {
      title: "Web3 Daily Podcast",
      description: "Interview about building crypto communities in emerging markets",
      date: "November 2022",
      platform: "Spotify",
      type: "Podcast",
      icon: <Mic className="h-6 w-6 text-crypto-purple" />,
      url: "#",
    },
    {
      title: "NFT Culture Radio",
      description: "Guest feature exploring the intersection of culture and technology in the NFT space",
      date: "October 2022",
      platform: "Apple Podcasts",
      type: "Radio",
      icon: <Radio className="h-6 w-6 text-crypto-purple" />,
      url: "#",
    },
    {
      title: "Crypto Kenya TV",
      description: "Panel discussion on opportunities and challenges for blockchain adoption in East Africa",
      date: "August 2022",
      platform: "Television",
      type: "TV",
      icon: <Video className="h-6 w-6 text-crypto-purple" />,
      url: "#",
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
              <a href={feature.url} className="w-full">
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
