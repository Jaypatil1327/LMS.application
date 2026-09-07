import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

function ProgressComponent({ value }) {
  return (
    <Progress value={value} className={"w-full"}>
      <ProgressLabel>
        {value === 100 ? "Uploaded" : "Upload progress"}
      </ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}

export default ProgressComponent;
