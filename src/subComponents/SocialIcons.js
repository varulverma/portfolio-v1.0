import React from 'react'
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Twitter, Instagram, Linkedin } from '../components/AllSvg'
import {DarkTheme} from '../components/Theme';


const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index:3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`
const Line = styled(motion.span)`
    width: 2px;
    height: 5rem;
    background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  return (
    <Icons>
        <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/varulverma"}}>
                <Github width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} ></Github>
            </NavLink>
        </motion.div>
        <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/varulverma"}}>
                <Instagram width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} ></Instagram>
            </NavLink>
        </motion.div>
        <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/varul-verma-906066212/"}}>
                <Linkedin width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} ></Linkedin>
            </NavLink>
        </motion.div>
        <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
        >
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://twitter.com/varulvermaa"}}>
                <Twitter width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} ></Twitter>
            </NavLink>
        </motion.div>

        <Line color={props.theme} 
        initial={{
            height: 0,
          }}
          animate={{
            height: "5rem",
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.8,
          }}
        />
    </Icons>
  )
}

export default SocialIcons