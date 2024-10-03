import { Box16Filled } from "@fluentui/react-icons";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { IoIosCloud } from "react-icons/io";

const size = 48;

export const ServicesData = [
  {
    icon: <Box16Filled fontSize={size} className="h-12 w-12" />,
    title: "Streamline Deliveries",
    description:
      "Roadway handles logistics while you focus on the destination.",
  },
  {
    icon: <IoIosCloud size={size} />,
    title: "Always Accessible",
    description:
      "Access your delivery data anytime, securely stored in the cloud.",
  },
  {
    icon: <BiSolidBarChartAlt2 size={size} />,
    title: "Gain Insights",
    description:
      "Track performance, spot trends, and optimize your delivery operations.",
  },
  {
    icon: <FaHandshake size={size} />,
    title: "Stay Connected",
    description:
      "Share deliveries and compete on the leaderboard with your team.",
  },
];
