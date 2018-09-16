import {Container, Row, Col, Button} from 'reactstrap';

const MainHeader = () => (
  <div>
  <Container fluid={true}>
    <Row>
      <Col xs={12}>
        <header id="main-header">
          <Button outline color="secondary" size="sm">PT-BR</Button>
        </header>
      </Col>
    </Row>
  </Container>
  <style jsx>
    {`
      #main-header{
        height: 61px;
        background-color: #fff;
        padding: 15px 15px 0;
        text-align: right!important;
      }}
    `}
  </style>
  </div>
)

export default MainHeader;