import React from 'react'
import styled from 'styled-components';
import mainPic from '../static/main-pic';
import Link from 'next/link';


const Content = styled.div`
    box-sizing: border-box;
    padding: 0 15px 15px;
    margin: 91px auto 0;
    min-height: 707px;
    text-align: center;
    @media (min-width: 768px){
        padding: 0 15px 30px;
    };
    &.content-appear {
            opacity: .1;
    };
    &.content-appear.content-appear-active {
            opacity: 1;
            transition: opacity 500ms ease-in;
    }`  

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
    .social-image{
        transition: filter 0.8s ease;
        filter: invert(0%);
    }
    .social-image:hover{
        filter: invert(100%)
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
    constructor(props){
        super(props);
        super(mainPic, props);
        this.mainPic = mainPic;
        this.state = {text: {header: '', body: ''}}
    }

    componentWillMount(){
        if(this.props.lang === 'pt-br'){
            this.setState({text: {
                    header: 'SIGA-ME',
                    body: "Sou designer de interação e desenvolvedor front-end de São Paulo (Capital), graduado em Publicidade e Propaganda (Anhembi Morumbi, 2010) e pós-graduado em Design Digital e Novas Mídias (Belas Artes, 2014). Atualmente trabalho como líder de front-end no GPA. Quando não estou desenvolvendo interfaces, gosto de fazer música!"
                }
            });
        }else if(this.props.lang === 'en'){
            this.setState({text: {
                header: 'FOLLOW-ME',
                body: "I'm a interaction designer and front-end developer from São Paulo (Brazil), graduated in Advertising and Propaganda (Anhembi Morumbi, 2010) and postgraduated in Digital Design and New Media (Belas Artes, 2014). Currently working at GPA as front-end lead. When I'm not designing interfaces, I like to make music!"
            }
        });
        }else{console.log('EITA::::', this.props.lang)}
    }
    
    render() {
        return(
        <Content>
            <MainImage src={this.mainPic}/>
            <HeaderTitle1>
                <Logo src="/static/logo.png"/>
            </HeaderTitle1>
            <Text>{this.state.text.body}</Text>
            <HeaderTitle2>{this.state.text.header}</HeaderTitle2>
            <Grid>
                <Column>
                    <Link href="https://www.linkedin.com/in/ivan-oliveira-8541002b" >
                        <Image className="social-image" src="/static/linkedin.png"/>
                    </Link>
                </Column>
                <Column>
                    <Link href="https://www.behance.net/ivanoliveira" > 
                        <Image className="social-image" src="/static/behance.png"/>
                    </Link>
                </Column>
                <Column>
                    <Link href="https://medium.com/@ivanoliveira" >
                        <Image className="social-image" src="/static/medium.png"/>
                    </Link>
                </Column>
            </Grid>
        </Content>     )
    }
}