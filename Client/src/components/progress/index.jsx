import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

function ProgressComponent({ value }) {
  return (
    <Progress value={value}>
      <ProgressLabel>
        {value === 100 ? "Uploaded" : "Upload progress"}
      </ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}

export default ProgressComponent;
