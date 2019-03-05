import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
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

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          {this.props.styleTags}
        </Head>
        <body>
          <Normalize/>
          <GlobalStyle/>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}