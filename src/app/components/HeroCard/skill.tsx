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

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const SkillDescription = styled.p`
  color: #191919;
  font-weight: 300;
  letter-spacing: 0.3px;
  line-height: 20px;
  font-family: "Montserrat";
`;

const SkillItem = styled.div`
  flex: 1;
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
const Damage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 30px;
`;

const Number = styled.h2`
  color: #191919;
  font-weight: 300;
  letter-spacing: 0.3px;
  line-height: 20px;
  font-family: "Montserrat";
`;
type SkillProps = {
  skills: ISkills[];
};

export const Skill = ({ skills }: SkillProps) => {
  return (
    <SkillsContainer>
      {skills.map(item => (
        <SkillItem>
          <Paragraph style={{ margin: 0 }}>{item.name}</Paragraph>
          <Damage>
            <Number>{item.damage}</Number>
            <Img
              src={`/public/${item.element}.svg`}
              alt={item.element}
              title={`${item.name} inflicts ${item.damage} ${item.element} damage`}
            ></Img>
          </Damage>
          <SkillDescription>{item.description}</SkillDescription>
        </SkillItem>
      ))}
    </SkillsContainer>
  );
};
