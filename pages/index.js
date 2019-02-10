import React from 'react';
import MainHeader from '../components/MainHeader';
import Content from '../components/Content';
import { injectGlobal } from 'styled-components';

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
                <MainHeader lang={this.props.url.query.lang}></MainHeader>
                <Content lang={this.props.url.query.lang} ></Content>
                {console.log('From props::::::',this.props.url.query.lang)} 
            </div>
        )
    }
} 
    

export default index;