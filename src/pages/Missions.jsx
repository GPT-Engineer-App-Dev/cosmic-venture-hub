import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const missions = [
  {
    name: "Apollo 11",
    description: "First manned mission to land on the Moon",
    date: "July 20, 1969",
    image: "/placeholder.svg"
  },
  {
    name: "Mars Perseverance Rover",
    description: "Searching for signs of ancient microbial life on Mars",
    date: "February 18, 2021",
    image: "/placeholder.svg"
  },
  {
    name: "James Webb Space Telescope",
    description: "Observing distant objects in the universe",
    date: "December 25, 2021",
    image: "/placeholder.svg"
  }
];

const Missions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Space Missions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{mission.name}</CardTitle>
              <CardDescription>{mission.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={mission.image} alt={mission.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p>{mission.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Missions;
