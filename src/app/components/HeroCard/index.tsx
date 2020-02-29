// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import {
  HeadingTwo,
  Paragraph,
  HeadingThree
} from "../../components/Typography";
import { ProgressBar } from "./progressBar";

const CardFlip = styled.section`
  width: 400px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  margin: 10px;
  box-shadow: 10px 10px 10px grey;
  background-color: #FBFBF8;

  &:hover{
    transform: rotateY(180deg);
    box-shadow: 0 0 10px 10px #2196f3

`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
const CardBack = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  left: 0px;
  top: 0px;
`;

const HeadingHP = styled.div`
  font-family: "Montserrat";
  font-weight: 700;
  color: red;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 1.15px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  strength: number;
  intelligence: number;
  stamina: number;
  healthpoints: number;
  mana: number;
  agility: number;
  speed: number;
  resistance: TElement;
  weakness: TElement;
  skills: ISkills;
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
  healthpoints,
  strength,
  intelligence,
  stamina,
  agility,
  speed,
  backStory
}) => {
  return (
    <CardFlip>
      <CardFront>
        <Top>
          <HeadingTwo> {name} </HeadingTwo>
          <HeadingHP>{healthpoints} HP</HeadingHP>
        </Top>
        <Img src={imgUrl} alt={"picture of " + name}></Img>
        <Paragraph>{description}</Paragraph>
      </CardFront>
      <CardBack>
        <Paragraph>This is the back!</Paragraph>
        <Paragraph style={{ margin: 0 }}>
          Skills
          <div
            style={{
              marginLeft: "10%",
              borderBottom: "1px solid black",
              width: "80%"
            }}
          ></div>
        </Paragraph>
        <div>
          <SkillContainer>
            <ProgressBar
              skillName={"strength"}
              skillValue={strength}
            ></ProgressBar>
            <ProgressBar
              skillName={"intelligence"}
              skillValue={intelligence}
            ></ProgressBar>
            <ProgressBar
              skillName={"stamina"}
              skillValue={stamina}
            ></ProgressBar>
            <ProgressBar
              skillName={"agility"}
              skillValue={agility}
            ></ProgressBar>
            <ProgressBar skillName={"speed"} skillValue={speed}></ProgressBar>
          </SkillContainer>
        </div>
      </CardBack>
    </CardFlip>
  );
};
