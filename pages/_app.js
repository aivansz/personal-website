import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0 0;
    background-color: black;
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`


const Wrapper = styled.div`
    .page-transition-enter {
        opacity: 0;
    }
    > .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    > .page-transition-exit {
        opacity: 1;
    }
    > .page-transition-exit-active {
        opacity: 0;
        transition: opacity 3000ms;
    }
    > .transition-will-mount{
      opacity: 0
    }
    > .transition-will-mount{
      opacity: 1;
      transition: opacity 3000ms;
    }      
`

export default class MyApp extends App {

  constructor(props){
    super();
    this.state = {componentTransition: 'transition'}
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps} = this.props

    return (
      <div>
        <Normalize/>
        <GlobalStyle/>
        <Container>
          <Wrapper>
              <PageTransition timeout={300}classNames="page-transition">
                  <Component key={this.props.router.route} {...pageProps} />
              </PageTransition>            
          </Wrapper>
        </Container>
      </div>
    )
  }
}