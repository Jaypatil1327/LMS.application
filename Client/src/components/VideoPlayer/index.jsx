import ReactPlayer from "react-player";

function VideoPlayer({ videoUrl }) {
  console.log(videoUrl);
  return (
    <div>
      <ReactPlayer src={videoUrl}></ReactPlayer>
    </div>
  );
}

export default VideoPlayer;
