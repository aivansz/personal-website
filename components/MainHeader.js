import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const InnerHeader = styled.header`
  text-align: right;
  background-color: white;
  padding: 15px 15px 0;
  margin: 0 auto 30px auto;
  height: 61px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
`
  
const HeaderButton = styled.button`
  transition: background-color 0.3s ease,
  color 0.3s ease ;
  cursor: pointer;
  height: 30px;
  width: 35px;
  border: 1px black solid;
  font-size:15px;
  text-transform: uppercase;
  text-decoration: none;
  background-color: white;
  &:hover{
    background-color: black;
    color: white 
  }
  border-radius: 3.2px;
  text-align:center;
  vertical-align:middle;
  margin: auto auto;
  padding: 0 5px;  
  line-height: 28px;
  display: inline-block;
`

class MainHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {lang: this.props.lang, 
                  info: 'PT',
                  link: '/en'
                  };
  }

  componentWillMount(){
    if(this.props.lang === 'pt-br'){
      this.setState({info: 'EN', link: '/en'});
    }else if(this.props.lang === 'en' ){
      this.setState({info: 'PT', link: '/pt-br'});
    }
  }

  render(){
    return (
      <div>
        <InnerHeader id="main-header">
            <Link href={this.state.link}>
                <HeaderButton>{this.state.info}</HeaderButton>
            </Link>
        </InnerHeader>
      </div>
    )
  }
}

export default MainHeader;