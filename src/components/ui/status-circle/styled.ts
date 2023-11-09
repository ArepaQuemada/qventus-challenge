import styled from "styled-components";
import { StatusCircleProps } from "./StatusCircle";

export const StatusCircleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Circle = styled.div<{ status: StatusCircleProps["status"] }>`
  width: 15px;
  height: 15px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ status }) => (status === "error" ? "red" : "green")};
  text-align: center;
  vertical-align: middle;
  & > span {
    font-weight: bold;
    color: #fff;
  }
`;
