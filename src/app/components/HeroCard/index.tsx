// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 400px;
  border: 1px solid blue;
  margin: 20px;
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
  backStory
}) => {
  return (
    <Container>
      <h1>{name}</h1>
      <Img src={imgUrl} alt={"picture of " + name}></Img>
    </Container>
  );
};
