import React from 'react'
import styled from 'styled-components'
import '../fonts/Alata/Alata-Regular.ttf'
import { DarkTheme } from '../components/Theme'

const Logo= styled.h1`
    display: inline-blocks;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    font-family:"Alata";

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index:3;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
        varul.{props.text}
    </Logo>
  )
}

export default LogoComponent