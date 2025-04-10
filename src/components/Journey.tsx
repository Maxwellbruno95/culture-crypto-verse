
import SectionContainer from "./SectionContainer";
import { 
  Bitcoin, 
  Gamepad2, 
  Calendar, 
  Users, 
  Globe, 
  Music
} from "lucide-react";

const Journey = () => {
  const timelineEvents = [
    {
      year: "2016",
      title: "Started in Crypto",
      description: "Began journey in the blockchain space, exploring various cryptocurrencies and their technologies.",
      icon: <Bitcoin className="h-8 w-8 text-crypto-purple" />,
    },
    {
      year: "2018",
      title: "Gaming NFTs",
      description: "Started collecting gaming NFTs, exploring the intersection of blockchain and virtual assets.",
      icon: <Gamepad2 className="h-8 w-8 text-crypto-purple" />,
    },
    {
      year: "2020",
      title: "MA-3 Token Launch",
      description: "Created the MA-3 token to preserve and showcase Kenyan Matatu culture on the blockchain.",
      icon: <Globe className="h-8 w-8 text-crypto-purple" />,
    },
    {
      year: "2021",
      title: "Non-Fungible Culture (NFC)",
      description: "Launched NFC to onboard global traditions and cultural heritage onto the blockchain.",
      icon: <Users className="h-8 w-8 text-crypto-purple" />,
    },
    {
      year: "2022",
      title: "Web3 Edutainment",
      description: "Started Web3 Edutainment initiative, bridging education and entertainment in the blockchain space.",
      icon: <Music className="h-8 w-8 text-crypto-purple" />,
    },
    {
      year: "2023",
      title: "Global Speaking Engagements",
      description: "Presented at African Blockchain Week, AIBC, and NFT AI Summit.",
      icon: <Calendar className="h-8 w-8 text-crypto-purple" />,
    },
  ];

  return (
    <SectionContainer id="journey">
      <h2 className="section-heading text-center">My Blockchain Journey</h2>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        From early crypto adoption to creating cultural tokens and educational initiatives,
        here's how my path in the Web3 space has evolved.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-crypto-purple to-crypto-blue"></div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-crypto-purple shadow-lg flex items-center justify-center">
                {event.icon}
              </div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:mr-auto" : "md:pl-8 md:ml-auto"
              }`}>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md card-hover">
                  <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold rounded-full bg-crypto-purple/10 text-crypto-purple">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Journey;
