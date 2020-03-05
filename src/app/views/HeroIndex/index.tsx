import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { HeroCard } from "../../components/HeroCard";
import { TElement } from "../../../server/types/element";

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      backStory
      attributes {
        strength
        intelligence
        stamina
        agility
        speed
      }
      lifepower {
        healthpoints
        mana
      }

      resistance
      weakness
      skills {
        name
        damage
        element
      }
    }
  }
`;

interface IHeroIndexProps {}

interface IHero {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  attributes: {
    strength: number;
    intelligence: number;
    stamina: number;
    agility: number;
    speed: number;
  };
  lifepower: {
    healthpoints: number;
    mana: number;
  };
  resistance: TElement;
  weakness: TElement;
  skills: ISkills[];

  // extend this to match query above
}

//Decided not to use this because it would make debugging a bit more difficult for me
export interface ISkills {
  name: string;
  damage: number;
  description: string;
  element: TElement;
}

interface TSLifepower {
  healthpoints: number;
  mana: number;
}

interface TSAttributes {
  strength: number;
  intelligence: number;
  stamina: number;
  agility: number;
  speed: number;
}
const HeroCardContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  align-self: center;
  background-image: url(../../../../public/bg_mesh.png);
  justify-content: space-around;
  max-width: 1150px;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
  const {
    data: { heroes },
    error,
    loading
  } = useQuery<{ heroes: IHero[] }>(HEROES_QUERY);

  if (error) {
    return handleError(error.message);
  }

  if (loading) {
    return handleLoading();
  }

  console.log(heroes);

  return (
    <main>
      <TopBar />
      <Hero />
      <Section
        heading={"Hunter Index"}
        paragraph={`
          Professor Hoax gave us this Hunter Index -tool 
          so we can see how our heroes manage against evildoers. 
          Unfortunately he forgot to implement their HeroCards. 
          It's your job to finish his work before we can continue
          on our journey together!
        `}
      />

      {/** Improve this section. Data provided is defined on top in GraphQL query. You can decide what you use and what you dont't.*/}
      <HeroCardContainer>
        {heroes.map(hero => (
          <HeroCard key={hero.name} {...hero} />
        ))}
      </HeroCardContainer>

      <Footer />
    </main>
  );
};
