import * as React from "react";
import styled, { keyframes } from "styled-components";
import { Paragraph } from "../../components/Typography";
import { ISkills } from "../../views/HeroIndex/index";

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
type SkillProps = {
  skills: ISkills[];
};

export const Skill = ({ skills }: SkillProps) => {
  return (
    <BarContainer>
      <BarLabel>{skills.description}</BarLabel>
      <Bar>
        <BarNumber>{}</BarNumber>
        <div
          style={{
            height: "20px",
            backgroundColor: "red",
            borderRadius: "30px",
            position: "absolute",
            left: "0px",
            top: "0px"
          }}
        ></div>
      </Bar>
    </BarContainer>
  );
};
