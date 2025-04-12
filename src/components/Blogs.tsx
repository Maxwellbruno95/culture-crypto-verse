
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const articles = [
    {
      title: "Introduction to Non Fungible Culture",
      publication: "Medium",
      date: "2021",
      url: "https://maxwellbruno.medium.com/introduction-to-tokenized-cultures-and-non-fungible-culture-9e907530f174",
      tags: ["NFTs", "Culture", "Web3"],
    },
    {
      title: "TrustED - Academic Credentials Verification On Blockchain",
      publication: "Steemit",
      date: "2018",
      url: "https://steemit.com/education/@maxwell95/trusted-academic-credentials-verification-on-blockchain",
      tags: ["Education", "Blockchain", "Verification"],
    },
    {
      title: "Bitsong - A Music Streaming Platform Built on the Blockchain",
      publication: "Steemit",
      date: "2018",
      url: "https://steemit.com/blockchain/@maxwell95/bitsong-a-music-streaming-platform-on-the-blockchain",
      tags: ["Music", "Blockchain", "Streaming"],
    },
    {
      title: "Universal Reward Protocol - A New Rewarding System",
      publication: "Steemit",
      date: "2018",
      url: "https://steemit.com/blockchain/@maxwell95/universal-reward-protocol-a-new-rewarding-system",
      tags: ["Rewards", "Blockchain", "Protocol"],
    },
    {
      title: "Bounty Hunters - The Next Generation Bounty Platform",
      publication: "Steemit",
      date: "2018",
      url: "https://steemit.com/cryptocurrency/@maxwell95/bounty-hunters-the-next-generation-bounty-plaform",
      tags: ["Bounty", "Cryptocurrency", "Platform"],
    },
  ];

  return (
    <SectionContainer id="blogs">
      <div className="text-center mb-10">
        <h2 className="section-heading">Blogs & Articles</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Published writings on blockchain technology, Web3 innovation, and cultural preservation.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <a href={article.url} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-crypto-purple hover:text-crypto-darkpurple" 
                   aria-label="External link">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-crypto-purple/10 text-crypto-purple border-crypto-purple/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex justify-between">
              <span>{article.publication}</span>
              <span>{article.date}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Blogs;
