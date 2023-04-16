import { FC, useState } from "react";
import InfiniteScroll from "./InfiniteScroll";
import VideoGrid from "./VideoGrid";

type ContentProps = {};

const Content: FC<ContentProps> = () => {
  const [gridCount, setGridCount] = useState(2);

  const grids = Array.apply(null, new Array(gridCount)).map((val, idx) => {
    return <VideoGrid key={idx} />;
  });

  const onCallBack = () => {
    setGridCount((prev) => prev + 1);
    console.log("YOOOO")
  };

  return (
    <>
      <InfiniteScroll callBack={onCallBack}>{grids}</InfiniteScroll>
    </>
  );
};

export default Content;
