
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Translation = () => {
  const translationProjects = [
    {
      title: "Project Milkbox: Proof Of Stake Explained",
      description: "Translation explaining why it's essential to collect your Milk tokens now",
      client: "Project Milkbox",
      year: "2018",
      url: "https://steemit.com/projectmilkbox/@maxwell95/projet-milkbox-proof-of-stake-pos-expliquee-pourquoi-il-est-essentiel-de-recueillir-vos-jetons-de-lait-maintenant"
    },
    {
      title: "Project Milkbox Tweet-Off: #Tokens4Tweets",
      description: "Translation of Milkbox forums challenge - Share your voice on Twitter for Milk rewards",
      client: "Project Milkbox",
      year: "2018",
      url: "https://steemit.com/projectmilkbox/@maxwell95/projet-milkbox-tweet-off-tokens4tweets-or-defi-des-forums-milkbox-or-partagez-votre-voix-sur-twitter-pour-milk"
    },
    {
      title: "Emotional Experience of Losing a Loved One",
      description: "Translation of article about emotions predominant when experiencing the loss of a loved one",
      client: "Project Milkbox",
      year: "2018",
      url: "https://steemit.com/projectmilkbox/@maxwell95/quelles-sont-les-emotions-qui-prevalent-dans-l-experience-de-la-disparition-d-un-etre-cher-or-recompenses-milk-a-l-interieur-or"
    },
    {
      title: "Project Milkbox: InstaPost #Tokens4Pics",
      description: "Translation of Instagram challenge - Share your smile on Instagram for Milk tokens",
      client: "Project Milkbox",
      year: "2018",
      url: "https://steemit.com/projectmilkbox/@maxwell95/projet-milkbox-instapost-defi-tokens4pics-or-or-partagez-votre-sourire-sur-instagram-et-obtenez-des-milks"
    },
  ];

  return (
    <SectionContainer id="translation" className="bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h2 className="section-heading">Translation Work</h2>
        <p className="text-lg max-w-3xl mx-auto">
          English to French translation specializing in blockchain, cryptocurrency, and Web3 content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {translationProjects.map((project, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Languages className="h-6 w-6 text-crypto-purple" />
                <CardTitle>{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-muted-foreground w-full flex justify-between">
                <span>Client: {project.client}</span>
                <span>{project.year}</span>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full group">
                  View Translation
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

export default Translation;
