
import SectionContainer from "./SectionContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Music as MusicIcon, PlayCircle, Award } from "lucide-react";

const Music = () => {
  const musicTracks = [
    {
      title: "Satoshi Nakamoto",
      description: "A tribute to the creator of Bitcoin and blockchain technology",
      embedUrl: "https://www.youtube.com/embed/O_GaMqCBWzU",
      coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      year: "2023",
    },
    {
      title: "Unstoppable",
      description: "The resilience and unstoppable nature of blockchain technology",
      embedUrl: "https://www.youtube.com/embed/ilc9LrYVOrI",
      coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fHww",
      year: "2022",
    },
    {
      title: "SNUSCOIN",
      description: "Exploring digital currencies and their potential impact on global economics",
      embedUrl: "https://www.youtube.com/embed/CRU3uUu3tXA",
      coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      year: "2021",
    },
  ];

  const events = [
    {
      name: "African Blockchain Week",
      date: "October 2023",
      location: "Lagos, Nigeria",
      description: "Performed Web3 educational music and spoke about blockchain's impact on African culture",
    },
    {
      name: "AIBC Summit",
      date: "May 2023",
      location: "Dubai, UAE",
      description: "Musical showcase highlighting the intersection of blockchain and traditional culture",
    },
    {
      name: "NFT AI Summit",
      date: "February 2023",
      location: "Virtual Event",
      description: "Premiered new tracks exploring the relationship between AI, NFTs, and cultural preservation",
    },
  ];

  return (
    <SectionContainer id="music">
      <div className="text-center mb-10">
        <h2 className="section-heading">Music Portfolio</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Showcasing Web3 Edutainment tracks that blend blockchain education with engaging musical experiences.
        </p>
      </div>

      <Tabs defaultValue="tracks" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="tracks" className="text-base">
            <MusicIcon className="mr-2 h-5 w-5" /> Music Tracks
          </TabsTrigger>
          <TabsTrigger value="events" className="text-base">
            <Calendar className="mr-2 h-5 w-5" /> Live Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tracks" className="space-y-8">
          {musicTracks.map((track, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <img 
                    src={track.coverImage} 
                    alt={`${track.title} cover art`} 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="md:col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{track.title}</CardTitle>
                    <CardDescription className="mb-4">{track.description}</CardDescription>
                    <div className="text-sm text-muted-foreground mb-6">
                      <span className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" /> Released: {track.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <a href={track.embedUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-crypto-purple transition-colors">
                      <PlayCircle className="h-10 w-10 text-crypto-purple mr-3" />
                      <span className="text-sm text-muted-foreground">Click to play full track</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="events">
          <div className="grid gap-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                    <Award className="h-6 w-6 text-crypto-gold" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" /> {event.date}
                    </span>
                    <span>{event.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
};

export default Music;
