import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import styled from 'styled-components'

const PageTransition1 = styled(PageTransition)`
    .page-transition-enter {
        opacity: 0;
        background-color: red;
    }
    .page-transition-enter-active {
        opacity: 1;
        transition: opacity 3000ms;
    }
    .page-transition-exit {
        opacity: 1;
    }
    .page-transition-exit-active {
        opacity: 0;
        transition: opacity 3000ms;
    }    
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
      console.log('onAPP::::', pageProps);
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, ctx} = this.props

    return (
      <Container>
            <PageTransition1 timeout={3000}classNames="page-transition">
                <Component {...pageProps} />
            </PageTransition1>
      </Container>
    )
  }
}