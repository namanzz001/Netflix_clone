import React from 'react'
import Background from '../assets/login.jpg'
import styled from 'styled-components';

const Backgroundimage = () => {
  return (
    <Container>
        <img src={Background} alt='background'></img>
    </Container>
  )
}

const Container = styled.div`

height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw;
}
`

export default Backgroundimage