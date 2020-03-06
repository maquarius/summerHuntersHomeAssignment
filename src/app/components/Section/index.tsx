import * as React from "react";

import styled from "styled-components";
import { HeadingTwo, Paragraph } from "../../components/Typography";

const InnerContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
`;

const Container = styled.section`
  background: #fbfbfb;
  width: 100%;
`;
const Divider = styled.div`
  margin-left: 20%;
  width: 60%;
  border-bottom: 1px solid black;
`;

interface ISectionProps {
  heading: string;
  paragraph: string;
  myParagraph: string;
}

export const Section: React.FC<ISectionProps> = ({
  heading,
  paragraph,
  myParagraph
}) => (
  <Container>
    <InnerContainer>
      <HeadingTwo>{heading}</HeadingTwo>
      <Paragraph>{paragraph}</Paragraph>
      <Divider></Divider>
      <Paragraph>{myParagraph}</Paragraph>
    </InnerContainer>
  </Container>
);
