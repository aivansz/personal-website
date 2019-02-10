import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import styled from 'styled-components'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <wrapper>
            <PageTransition timeout={300}classNames="page-transition">
                <Component {...pageProps} />
            </PageTransition>
        </wrapper>
      </Container>
    )
  }
}

const wrapper = styled.div`
    &.page-transition-enter {
        opacity: 0;
    }
    &.page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    &.page-transition-exit {
        opacity: 1;
    }
    &.page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }    
`