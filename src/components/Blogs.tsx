
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Blogs = () => {
  const articles = [
    {
      title: "The Evolution of NFTs in African Art",
      publication: "Crypto Africa",
      date: "March 2023",
      url: "#",
      tags: ["NFTs", "African Art", "Web3"],
    },
    {
      title: "Community Building in Web3: Lessons From Kenya",
      publication: "Blockchain Daily",
      date: "January 2023",
      url: "#",
      tags: ["Community", "Web3", "Kenya"],
    },
    {
      title: "Matatu Culture Meets Blockchain Technology",
      publication: "Tech Nairobi",
      date: "November 2022",
      url: "#",
      tags: ["Culture", "Blockchain", "Matatu"],
    },
    {
      title: "DeFi Accessibility in Developing Markets",
      publication: "DeFi Pulse",
      date: "October 2022",
      url: "#",
      tags: ["DeFi", "Accessibility", "Emerging Markets"],
    },
    {
      title: "The Future of Cultural Preservation Through Blockchain",
      publication: "Web3 Culture",
      date: "July 2022",
      url: "#",
      tags: ["Culture", "Preservation", "Web3"],
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
                <a href={article.url} className="text-crypto-purple hover:text-crypto-darkpurple" aria-label="External link">
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
