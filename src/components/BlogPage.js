import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import img from "../assets/Images/blogbg.jpg";

import BlogComponent from "./BlogComponent";
import { Blogs } from "../data/BlogData";
import { Compress } from "../subComponents/Compress";
import ParticleComponent from "../subComponents/ParticleComponent";
import { Sample } from "../subComponents/Sample";
import {motion} from "framer-motion"

const MainContainer = styled(motion.div)`
  // background: ${(props) => props.theme.body};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const BlogPage = () => {
  return (
    <MainContainer
    variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}>
      <Container>
        <LogoComponent text="blog"/>
        <PowerButton />
        <SocialIcons />
        <ParticleComponent  />
        <Center>
          {/* <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>  */}
          
          {/* <Compress /> */}
          
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
