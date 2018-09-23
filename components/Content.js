import React from 'react'
import styled from 'styled-components';
import mainPic from '../assets/main-pic';
import logo from '../assets/logo';
import linkedin from '../assets/linkedin';
import behance from '../assets/behance';
import medium from '../assets/medium';

const Content = styled.div`
    box-sizing: border-box;
    padding: 0 15px 15px;
    margin: 91px auto 0;
    min-height: 707px;
    text-align: center;
    @media (min-width: 768px){
        padding: 0 15px 30px;
    }  
`

const MainImage = styled.img`
    border-radius: 50%;
    height: 130px;
    margin: 0 auto;
    @media (min-width: 768px){
        height: 215px;
    } 
`
const Logo = styled.img`
    margin: 0 auto;
    padding: 0 0;
    height: 60px;
    @media (min-width: 768px){
        height: 110px;
    }
`
const HeaderTitle1 = styled.h1`
    margin-block-end:15px;
    margin-block-start: 15px;
    @media (min-width: 768px){
        margin-block-end:30px;
        margin-block-start: 30px;
    } 
`

const HeaderTitle2 = styled.h2`
    color: white;
    font-size: 24px;
    font-weight: 700;
    line-height:28px;
    text-size-adjust: 100%;
    @media (min-width: 768px){
        font-size: 54px;
        line-height:57px;
    } 
`

const Text = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-size-adjust: 100%;
    margin: 15px auto 0;
    @media (min-width: 768px){
        font-size: 32px;
        line-height:44px;
    }     
`
const Grid = styled.div`
    display:grid;
    margin: 0 auto;
    grid-template-columns:1fr 1fr 1fr;
    grid-column-gap: 15px;
    @media (min-width: 768px){
        width: 80%;
    }
`
const Column = styled.div`
    align-self: center;
`
const Image = styled.img`
    height: 85px;
    @media (min-width: 768px){
        height: 187.5px
    }
` 

export default class MainContent extends React.Component {
    constructor(){
        super(mainPic, Logo, linkedin, behance, medium);
        this.mainPic = mainPic;
        this.logo = logo;
        this.linkedin = linkedin;
        this.behance = behance;
        this.medium = medium;
    }
    
    render() {
        return(
        <Content>
            <MainImage src={this.mainPic}/>
            <HeaderTitle1>
                <Logo src={this.logo}/>
            </HeaderTitle1>
            <Text>aaaaa</Text>
            <HeaderTitle2>aaaa</HeaderTitle2>
            <Grid>
                <Column>
                    <Image src={this.linkedin}/>
                </Column>
                <Column>
                    <Image src={this.behance}/>
                </Column>
                <Column>
                    <Image src={this.medium}/>
                </Column>
            </Grid>
        </Content>
        )
    }
}