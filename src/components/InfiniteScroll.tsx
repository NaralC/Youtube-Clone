import { FC, ReactNode } from "react";
import { Waypoint } from "react-waypoint";

type infiniteScrollType = {
  children: ReactNode;
  callBack: (param: Waypoint.CallbackArgs) => void;
};

const InfiniteScroll: FC<infiniteScrollType> = ({ children, callBack }) => {
  return (
    <div>
      {children}
      <Waypoint onEnter={callBack} bottomOffset="-10%"></Waypoint>
    </div>
  );
};

export default InfiniteScroll;
