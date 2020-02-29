// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import {
  HeadingTwo,
  Paragraph,
  HeadingThree
} from "../../components/Typography";

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
      </CardBack>
    </CardFlip>
  );
};
