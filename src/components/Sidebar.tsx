import { FC, ReactNode } from "react";
import { Home, Youtube, Flame, History, Library, Menu } from "lucide-react";
import Divider from "./Divider";

const Sidebar: FC = () => {
  const Item = ({
    icon,
    label,
    selected,
  }: {
    icon: ReactNode;
    label: string;
    selected: boolean;
  }): JSX.Element => {
    return (
      <>
        <div className="flex gap-4 p-4 hover:bg-gray-300">
          <span
            className={`"left-0 inline-block" ${
              selected ? "text-red-500" : "text-gray-500"
            }`}
          >
            {icon}
          </span>
          <span className={selected ? "font-bold" : "font-normal"}>
            {label}
          </span>
        </div>
      </>
    );
  };

  return (
    <div className="absolute left-0 z-50 h-screen bg-gray-200 border-r-2 border-gray-300 w-52">
      <Item selected={true} label="Home" icon={<Home />} />
      <Item selected={false} label="Trending" icon={<Flame />} />
      <Item selected={false} label="Subscriptions" icon={<Youtube />} />
      <Divider />
      <Item selected={false} label="Library" icon={<Library />} />
      <Item selected={false} label="History" icon={<History />} />
    </div>
  );
};

export default Sidebar;
