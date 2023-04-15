import VideoPreview from "./VideoPreview";

const VideoGrid = () => {
  const Header = ({ title }: { title: string }): JSX.Element => {
    return (
      <div className="px-3 py-7">
        <span className="font-bold text-xl">{title}</span>
      </div>
    );
  };

  const Divider = (): JSX.Element => {
    return (
      <>
        <div className="border-2 border-gray-500 rounded-full mx-10"></div>
      </>
    );
  };

  return (
    <>
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
      <Divider />
    </>
  );
};

export default VideoGrid;
