import React from 'react'
import styled from 'styled-components';
import mainPic from '../assets/main-pic';

const Content = styled.div`
    box-sizing: border-box;
    padding: 0 15px;
    margin: 0 auto;
    min-height: 707px;
    text-align: center; 
`

const MainImage = styled.img`
    border-radius: 50%;
    height: 150px;
    margin: 0 auto; 
`
const Logo = styled.img`
    margin: 0 auto;
    padding: 0 0;
`

export default class MainContent extends React.Component {
    constructor(){
        super(mainPic);
        this.mainPic = mainPic;     
    }
    
    render() {
        return(
        <Content>
            <MainImage src={this.mainPic}/>
        </Content>
        )
    }
}