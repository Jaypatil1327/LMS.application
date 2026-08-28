import ReactPlayer from "react-player";

function VideoPlayer({ videoUrl }) {
  console.log(videoUrl);
  return (
    <div className="flex justify-center items-center">
      <ReactPlayer
        src={videoUrl}
        controls
        width={"100%"}
        height={"100%"}
      ></ReactPlayer>
    </div>
  );
}

export default VideoPlayer;
