import React from 'react'
import styled from 'styled-components'
import Backgroundimage from '../components/Backgroundimage'
import Header from '../components/Header'

function Login() {
  return (
    <Container>
        <Backgroundimage/>
        <div>
            <Header/>
            <div>
                <div>
                    <h3>Login</h3>
                    <h3>Sign-up</h3>
                </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`

`

export default Login