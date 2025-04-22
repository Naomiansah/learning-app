import { Award, Home, PenIcon, SettingsIcon, User2Icon, WifiOffIcon } from "lucide-react";


export default {

  NAVLINKS: [
      {
      name: "Learn",
      path: "/dashboard",
      icon: Home,
    },
    {
      name: "Quiz",
      path: "/dashboard/quiz",
      icon: PenIcon,
    },
    {
      name: "Offline Activity",
      path: "/dashboard/offline-activity",
      icon: WifiOffIcon,
    },
    {
      name: "Reward",
      path: "/dashboard/reward",
      icon: Award,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: User2Icon,
    },
  ],
};