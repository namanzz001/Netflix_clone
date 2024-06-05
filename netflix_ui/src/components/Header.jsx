import React from 'react'
import Logo from '../components/logo.png'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <div>
            <ul>
                <Logo/>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>My List</li>
            </ul>
        </div>
    </Container>
  )
}

const Container = styled.div`

`

export default Header