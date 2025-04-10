
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageSquare, Heart, Repeat, ArrowUpFromLine, Bookmark } from "lucide-react";

const Tweets = () => {
  const tweets = [
    {
      username: "MA-3",
      handle: "@ma3brc20",
      avatar: "/lovable-uploads/62e38b7d-2af8-42ee-b013-b60665e6e61a.png",
      content: "We are delighted to announce that the official MA-3 token website along with the MA-3 ordinals collection is live\n\nExplore website using link below\n\nma-3.fun",
      image: "/lovable-uploads/62e38b7d-2af8-42ee-b013-b60665e6e61a.png",
      date: "6:50 PM · Mar 29, 2025",
      likes: 4,
      retweets: 3,
      views: "283",
      isPinned: false,
    },
    {
      username: "Non Fungible Culture",
      handle: "@culturetokens",
      avatar: "/lovable-uploads/3c681048-f544-4301-911c-0a1b53257874.png",
      content: "Want to learn about Non Fungible Culture and Tokenized Cultures? @maxwellbrun0 did a good write up on it & about his Non Fungible Culture project \"Art Gallery On Wheels\" which is inspired a Kenyan Urban Culture known as Matatu Culture #NFTs #NFCs",
      image: "/lovable-uploads/3c681048-f544-4301-911c-0a1b53257874.png",
      date: "11:55 AM · Dec 3, 2021",
      likes: 6,
      retweets: 1,
      comments: 1,
      source: "From maxwellbruno.medium.com",
      isPinned: false,
    },
    {
      username: "maxwellbruno.crypto",
      handle: "@maxwellbrunoX",
      avatar: "/lovable-uploads/228b216e-ef5c-41fe-8b15-773d3145bb2f.png",
      content: "I know for sure Consistently posting about Wayfinder in Swahili has the potential to help educate and onboard more people from Eastern Africa into the Web3 AI space.\n\nAs You may know I have been big on web3 education.\n\nCheckout Web3 Edutainment",
      image: "/lovable-uploads/228b216e-ef5c-41fe-8b15-773d3145bb2f.png",
      date: "From artizen.fund",
      likes: 0,
      retweets: 0,
      comments: 0,
      isPinned: false,
    },
    {
      username: "maxwellbruno.crypto",
      handle: "@maxwellbrunoX",
      avatar: "/lovable-uploads/aeccdeae-bd81-44d5-a585-ec811d55aa4e.png",
      content: "If you don't believe me or don't get it, I don't have time to try to convince you, sorry\n~ Satoshi Nakamoto #Bitcoin",
      image: "/lovable-uploads/aeccdeae-bd81-44d5-a585-ec811d55aa4e.png",
      date: "3:50 AM · Jan 27, 2024",
      likes: 0,
      retweets: 0,
      views: "7,159",
      isPinned: true,
      duration: "1:34",
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
              {/* Tweet Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={tweet.avatar} alt={tweet.username} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold flex items-center">
                      {tweet.username}
                      {tweet.isPinned && <span className="ml-2 text-xs bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-full">Pinned</span>}
                    </div>
                    <div className="text-sm text-muted-foreground">{tweet.handle}</div>
                  </div>
                </div>
              </div>

              {/* Tweet Content */}
              <p className="text-base mb-4 whitespace-pre-line">{tweet.content}</p>
              
              {/* Tweet Image if available */}
              {tweet.image && (
                <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 relative">
                  <img src={tweet.image} alt="" className="w-full h-auto" />
                  {/* Video duration if available */}
                  {tweet.duration && (
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                      {tweet.duration}
                    </div>
                  )}
                </div>
              )}
              
              {/* Tweet source if available */}
              {tweet.source && (
                <div className="text-sm text-muted-foreground mb-2">
                  {tweet.source}
                </div>
              )}
              
              {/* Tweet date and views */}
              <div className="text-sm text-muted-foreground flex items-center space-x-2">
                <span>{tweet.date}</span>
                {tweet.views && (
                  <>
                    <span>·</span>
                    <span>{tweet.views} Views</span>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-200 dark:border-slate-800 pt-3">
              <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{tweet.comments || 0}</span>
                </div>
                <div className="flex items-center">
                  <Repeat className="h-4 w-4 mr-1" />
                  <span>{tweet.retweets}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  <span>{tweet.likes}</span>
                </div>
                <div className="flex items-center">
                  <Bookmark className="h-4 w-4" />
                </div>
                <div className="flex items-center">
                  <ArrowUpFromLine className="h-4 w-4" />
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
