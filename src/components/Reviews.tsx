
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ThumbsUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      title: "AMEO POWERBREATHER",
      description: "Swim Like a Shark, Breath Like a Runner",
      image: "/lovable-uploads/7f59d5f0-5cfd-4e91-a2d6-312976611857.png",
      rating: 5,
      highlights: [
        "Good underwater resistance and confidence as a daily training tool",
        "Fitness and recreational swimmers as a daily sports device"
      ],
      url: "https://steemit.com/steemhunt/@maxwell95/ameo-powerbreather-swim-like-a-shark-breath-like-a-runner"
    },
    {
      title: "Roidmi F8 Storm",
      description: "Lightest & Most Powerful Cordless Vacuum",
      image: "/lovable-uploads/cc4d1092-00b5-4f5a-ade1-69f8b1581bcc.png",
      rating: 4.5,
      highlights: [
        "Long-lasting battery",
        "Four-layer filtration system",
        "Innovative Magnetic Holder for 2-in-1 Charging and Storing",
        "Capabilities to clean different surfaces",
        "Photosensitive LED Light"
      ],
      url: "https://peakd.com/steemhunt/@maxwell95/roidmi-f8-storm-lightest-and-most-powerful-cordless-vacuum"
    },
    {
      title: "SteemHunt",
      description: "Hunt For Cool New Products, Earn Crypto",
      image: "/lovable-uploads/bd0997c2-16d0-4763-91c2-9c62d398628a.png",
      rating: 4,
      highlights: [
        "Simple product rating system",
        "Earn crypto for reviewing new products",
        "Built on the Steem blockchain"
      ],
      url: "https://steemit.com/steemhunt/@maxwell95/9w6ehy1l"
    }
  ];

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-crypto-gold text-crypto-gold" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-crypto-gold" />
          <Star className="absolute top-0 left-0 h-4 w-4 fill-crypto-gold text-crypto-gold overflow-hidden" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
        </div>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-crypto-gold" />);
    }
    
    return stars;
  };

  return (
    <SectionContainer id="reviews" className="bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-10">
        <h2 className="section-heading">Product Reviews</h2>
        <p className="text-lg max-w-3xl mx-auto">
          In-depth reviews of crypto tools, AI platforms, blockchain projects, and tech gadgets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="card-hover h-full flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{review.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{review.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="aspect-video mb-4 overflow-hidden rounded-md">
                <img 
                  src={review.image} 
                  alt={review.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="flex space-x-0.5 mr-2">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm font-medium">{review.rating}/5</span>
              </div>
              <ul className="text-sm space-y-1">
                {review.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <ThumbsUp className="h-4 w-4 text-crypto-purple mr-2 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a href={review.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full group">
                  Read Full Review
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

export default Reviews;
