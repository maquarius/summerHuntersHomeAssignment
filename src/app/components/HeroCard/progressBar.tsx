import * as React from "react";
import styled, { keyframes } from "styled-components";
import { Paragraph } from "../../components/Typography";

const Bar = styled.div`
  height: 20px;
  width: 150px;
  border-radius: 30px;
  border: 1px solid #001147;
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
  attributeName: string;
  attributeValue: number;
};

export const ProgressBar = ({
  attributeName,
  attributeValue
}: ProgressBarProps) => {
  return (
    <BarContainer>
      <BarLabel>{attributeName}</BarLabel>
      <Bar>
        <BarNumber>{attributeValue}</BarNumber>
        <div
          style={{
            height: "20px",
            width: attributeValue * 1.5,
            backgroundColor: "hsla(207, 90%, 54%, 0.7)",
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
