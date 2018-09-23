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

const index = () => 
    <div>
        <MainHeader></MainHeader>
        <Content></Content>
    </div>

export default index;