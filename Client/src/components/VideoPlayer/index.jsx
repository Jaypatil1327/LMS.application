import ReactPlayer from "react-player";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import { Item, ItemMedia, ItemTitle } from "../ui/item";

function VideoPlayer({ videoUrl, handleReplace, index }) {
  if (!videoUrl) {
    return (
      <div className="flex w-full items-center justify-center">
        <Item
          variant="muted"
          className="flex w-full max-w-xs items-center justify-center"
        >
          <ItemMedia>
            <Spinner />
          </ItemMedia>

          <ItemTitle>Processing Media</ItemTitle>
        </Item>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <ReactPlayer src={videoUrl} controls width="100%" height="100%" />
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => handleReplace(index)}
          className={"px-4 py-2"}
        >
          Replace
        </Button>
        <Button variant="destructive" className={"px-4 py-2"}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
