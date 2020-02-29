import * as React from "react";
import styled, { keyframes } from "styled-components";
import { Paragraph } from "../../components/Typography";

const Bar = styled.div`
  height: 20px;
  width: 150px;
  border-radius: 30px;
  border: 1px solid black;
  display: flex:
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarLabel = styled.label`
  color: #191919;
  font-weight: 500;
  letter-spacing: 0.65px;
  line-height: 32px;
  font-family: "Montserrat";
`;

const BarNumber = styled.p`
  color: #191919;
  font-weight: 500;
  font-family: "Montserrat";
  margin: 0;
`;
type ProgressBarProps = {
  skillName: string;
  skillValue: number;
};

export const ProgressBar = ({ skillName, skillValue }: ProgressBarProps) => {
  return (
    <BarContainer>
      <BarLabel>{skillName}</BarLabel>
      <Bar>
        <BarNumber>{skillValue}</BarNumber>
        <div
          style={{
            height: "20px",
            width: skillValue * 1.5,
            backgroundColor: "red",
            borderRadius: "30px",
            position: "absolute",
            left: "0px",
            top: "0px",
            zIndex: "-1"
          }}
        ></div>
      </Bar>
    </BarContainer>
  );
};
