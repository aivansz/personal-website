import React from 'react'
import styled from 'styled-components';
import mainPic from '../assets/main-pic';
import logo from '../assets/logo';
import linkedin from '../assets/linkedin';
import behance from '../assets/behance';
import medium from '../assets/medium';

const Content = styled.div`
    box-sizing: border-box;
    padding: 0 15px;
    margin: 0 auto;
    min-height: 707px;
    text-align: center; 
`

const MainImage = styled.img`
    border-radius: 50%;
    height: 130px;
    margin: 0 auto; 
`
const Logo = styled.img`
    margin: 0 auto;
    padding: 0 0;
    height: 60px;
`
const HeaderTitle1 = styled.h1`
    margin-block-end:15px;
    margin-block-start: 15px;
`

const HeaderTitle2 = styled.h2`
    color: white;
    font-size: 24px;
    font-weight: 700;
    line-height:28px;
    text-size-adjust: 100%;
`

const Text = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-size-adjust: 100%;
    margin 15px auto 0;
`
const Grid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-column-gap: 15px;
`
const Column = styled.div`
    align-self: center;
`
const Image = styled.img`
    height: 85px;
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
            <Text>Sou <strong>designer de interação</strong> e <strong>desenvolvedor front-end</strong> de <strong>São Paulo</strong> (Capital), graduado em <strong>Publicidade e Propaganda</strong> (Anhembi Morumbi, 2010) e pós-graduado em <strong>Design Digital e Novas Mídias</strong> (Belas Artes, 2014). Atualmente trabalho como líder de front-end no <strong>GPA</strong>. Quando não estou desenvolvendo interfaces, gosto de fazer <strong>música!</strong></Text>
            <HeaderTitle2>SIGA-ME</HeaderTitle2>
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