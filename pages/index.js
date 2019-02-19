import React from 'react';
import MainHeader from '../components/MainHeader';
import Content from '../components/Content';
import { injectGlobal } from 'styled-components';
import { withRouter } from 'next/router';
import Head from 'next/head';

injectGlobal`
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

class index extends React.Component{
    constructor(props){
        super(props);
        this.state = {lang : 'PT'}
    }

    render(){
        return (
            <div>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-54095242-1"></script>
                    <script dangerouslySetInnerHTML= {{__html: `{window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-54095242-1');}`}}/>
                        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />                   
                    <title>Ivan Oliveira</title>
                    <link rel="shortcut icon" href="static/favicon.ico" />
                </Head>
                <MainHeader lang={this.props.router.query.lang}></MainHeader>
                <Content lang={this.props.router.query.lang} ></Content> 
            </div>
        )
    }
} 
    

export default withRouter(index);