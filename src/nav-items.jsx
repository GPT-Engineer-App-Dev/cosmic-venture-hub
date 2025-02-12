import { Home, Rocket } from "lucide-react";
import Index from "./pages/Index.jsx";
import Missions from "./pages/Missions.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Missions",
    to: "/missions",
    icon: <Rocket className="h-4 w-4" />,
    page: <Missions />,
  },
];
