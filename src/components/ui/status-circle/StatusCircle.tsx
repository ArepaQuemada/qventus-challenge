import { Circle, StatusCircleWrapper } from "./styled";

export interface StatusCircleProps {
  status: "error" | "success";
  label: string;
}

const StatusCircle = ({ label, status }: StatusCircleProps) => {
  return (
    <StatusCircleWrapper>
      <Circle status={status}>
        <span>{status === "success" ? "\u2713" : "X"}</span>
      </Circle>
      <div>
        <label>{label}</label>
      </div>
    </StatusCircleWrapper>
  );
};

export default StatusCircle;
