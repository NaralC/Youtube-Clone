import Divider from "./Divider";
import VideoPreview from "./VideoPreview";

const VideoGrid = () => {
  const Header = ({ title }: { title: string }): JSX.Element => {
    return (
      <div className="w-full px-3 py-7">
        <span className="text-xl font-bold text-left">{title}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap flex-col items-center justify-center ml-[15rem]">
      <Header title="Trending 🔥" />
      <div className="flex flex-wrap">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      <div className="w-full">
        <Divider />
      </div>
    </div>
  );
};

export default VideoGrid;
