import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Planet, Rocket, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl text-muted-foreground">Embark on a journey through space and time</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Planet className="h-6 w-6" />
              Discover Planets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore the wonders of our solar system and beyond.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-6 w-6" />
              Stellar Phenomena
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Witness the beauty of stars, nebulae, and galaxies.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-6 w-6" />
              Space Missions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn about past, present, and future space explorations.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center">
        <Button size="lg">
          Start Your Cosmic Adventure
        </Button>
      </div>
    </div>
  );
};

export default Index;
