import React from "react";
import VideoPreview from "./VideoPreview";

type Props = {};

const VideoGrid = (props: Props) => {
  return (
    <>
      <VideoPreview />
      <VideoPreview />
      <VideoPreview />
      <VideoPreview />
      <VideoPreview />
    </>
  );
};

export default VideoGrid;
