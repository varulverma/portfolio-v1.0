import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
  width: calc(10rem + 15vw);
  text-decoaration: none;
  height: 20rem;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 24px;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.4s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  border-radius: 12px;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Alata";
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Hashtags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;

  return (
    <Container variants={Item}>
      <Box target="_blank" to={{ pathname: link }}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <Hashtags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </Hashtags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
