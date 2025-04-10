
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageSquare, Heart, Repeat } from "lucide-react";

const Tweets = () => {
  const tweets = [
    {
      content: "The future of cultural preservation lies in blockchain technology. With NFTs, we can ensure traditional art, music, and stories remain accessible for generations. #Web3 #CulturalHeritage",
      date: "April 5, 2023",
      likes: 243,
      retweets: 87,
      comments: 32,
    },
    {
      content: "Just launched our new MA-3 token preserving Kenyan Matatu culture on the blockchain! This is how we bring local traditions into the global digital economy. #Blockchain #Kenya #NFT",
      date: "June 12, 2022",
      likes: 567,
      retweets: 192,
      comments: 78,
    },
    {
      content: "Education + Entertainment = Edutainment. Our new Web3 music track explaining smart contracts just dropped! Learning about blockchain shouldn't be boring. #Web3Education #CryptoMusic",
      date: "September 23, 2023",
      likes: 421,
      retweets: 156,
      comments: 47,
    },
    {
      content: "The metaverse isn't just for gaming - it's where global cultures can meet, share stories, and preserve traditions that might otherwise be lost to time. Building bridges between worlds. #Metaverse #CulturalExchange",
      date: "January 18, 2023",
      likes: 318,
      retweets: 102,
      comments: 54,
    },
  ];

  return (
    <SectionContainer id="tweets">
      <div className="text-center mb-10">
        <h2 className="section-heading">Tweet Showcase</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Impactful thoughts and insights shared on blockchain education, culture, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tweets.map((tweet, index) => (
          <Card key={index} className="card-hover border-2 border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-crypto-purple to-crypto-blue flex items-center justify-center text-white font-bold">
                  W3
                </div>
                <div>
                  <div className="font-bold">Web3 Educator</div>
                  <div className="text-sm text-muted-foreground">@web3educator</div>
                </div>
              </div>

              <p className="text-base mb-4">{tweet.content}</p>
              
              <div className="text-sm text-muted-foreground">
                {tweet.date}
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-200 dark:border-slate-800 pt-3">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{tweet.comments}</span>
                </div>
                <div className="flex items-center">
                  <Repeat className="h-4 w-4 mr-1" />
                  <span>{tweet.retweets}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  <span>{tweet.likes}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Tweets;
