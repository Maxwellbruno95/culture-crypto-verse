
import SectionContainer from "./SectionContainer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Blockchain", 
    "Community Management", 
    "NFTs", 
    "Web3 Education", 
    "Token Creation",
    "Digital Art", 
    "Music Production", 
    "Content Creation",
    "Design", 
    "Public Speaking"
  ];

  return (
    <SectionContainer id="about" className="bg-slate-50 dark:bg-slate-900">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg mb-6">
            Over the past 8+ years, I've cultivated a diverse and impactful career in the crypto 
            and Web3 space as a community manager, artist, builder, and educator. I'm passionate about 
            using blockchain to celebrate culture, tell stories, and empower global communities through 
            tech, art, and education.
          </p>
          <p className="text-lg mb-8">
            My mission is to bridge the gap between traditional cultures and emerging technologies, 
            creating meaningful connections that preserve heritage while embracing innovation.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} className="bg-crypto-purple text-white hover:bg-crypto-darkpurple px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-crypto-purple via-crypto-blue to-crypto-teal blur-sm"></div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/13f5adf7-73a7-48fd-8d87-a4f55692f5bf.png" 
              alt="Maxwell Bruno profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
