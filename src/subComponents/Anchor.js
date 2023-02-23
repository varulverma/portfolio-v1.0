import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from '../components/AllSvg'

const Container = styled.div`
position: relative;
`
const Slider =styled.div`
position: fixed;
top: 0;
right: 2rem;
display: flex;
`

const Anchor = () => {

    const ref = useRef(null);
    const hiddenRef = useRef(null);

  return (
    <Container>
        <Slider ref={ref}>
            {
                [...Array(25)].map((x,id)=>{
                    return <Link  />
                })
            }
        </Slider>
    </Container>
  )
}

export default Anchor;