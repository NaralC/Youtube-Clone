import { FC } from "react";

type VideoPreviewProps = {};

const VideoPreview: FC<VideoPreviewProps> = () => {
  return (
    <div className="mx-3 my-5">
      {/* Video Image */}
      <div className="relative bg-gray-100">
        <img src="https://picsum.photos/200" />

        {/* Video Timestamp */}
        <div className="absolute bottom-0 right-0 opacity-80 border-2 font-medium m-2 p-2 bg-black text-white">
          <span>11:38</span>
        </div>
      </div>

      {/* Video Info */}
      <div className="grid grid-rows-1 grid-cols-1 pt-1">
        <div className="font-medium">How to Lose Your Job 101</div>

        {/* Video Basic Info */}
        <div>
          <div className="whitespace-nowrap truncate">
            Naral Chaler Chaler Chaler Chaler
          </div>
          <div className="mb-3">2k Views • 30 Minutes Ago</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
