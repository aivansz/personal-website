import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const InnerHeader = styled.header`
  text-align: right!important;
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
  
const HeaderButton = styled(Link)`
  transition: background-color 0.3s ease,
  color 0.3s ease ;
  cursor: pointer;
  height: 30px;
  width: 35px;
  border: 1px black solid;
  font-size:16px;
  text-transform: uppercase!important;
  text-decoration: none!important;
  background-color: white;
  &:hover{
    background-color: black;
    color: white 
  }
  border-radius: 3.2px;
`

class MainHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {lang: this.props.lang, info: 'PT'};
  }

  componentWillMount(){
    if(this.props.lang === 'pt'){
      this.setState({info: 'en'});
    }else if(this.props.lang === 'en' ){
      this.setState({info: 'pt'});
    }
  }

  render(){
    return (
      <div>
        <InnerHeader id="main-header">
          <HeaderButton href={'/' + this.state.info}>{this.state.info}</HeaderButton>
        </InnerHeader>
      </div>
    )
  }
}

export default MainHeader;