import styled from 'styled-components';

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
  
const HeaderButton = styled.button`
  transition: background-color 0.3s ease,
  color 0.3s ease ;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border: 1px black solid;
  font-size:16px;
  background-color: white;
  &:hover{
    background-color: black;
    color: white 
  }
  border-radius: 3.2px;
`

const MainHeader = () => (
  <div>
        <InnerHeader id="main-header">
          <HeaderButton>
          Br
          </HeaderButton>
        </InnerHeader>
  </div>
)

export default MainHeader;