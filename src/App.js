import React, { Component } from 'react';
import logo from './logo.svg';
/* import { addTodo } from './actions'; */
import { connect } from 'redux-zero/react';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
          <header>
          <Row>
              <Col sm={12} md={12} className="img-question">
                  {!this.state.checking&&<img className="img-responsive img-questions" src={items[this.state.count].image}/>}
                  {this.state.checking&&<img className="img-responsive img-questions" src=""/>}
              </Col>
          </Row>
          </header>
          <Row className="content ">
              <Col sm={12} md={12} className="progress-container">
                  <Col sm={12} md={12} className="text-left pogress-label">
                      <p>{this.state.count} preguntas de 5</p>
                  </Col>
                  <Col className= "progress">
                      <Col className="progress-bar"  >
                          <span className="sr-only">100%</span>
                      </Col>
                  </Col>  
              </Col>
              <Col sm={12} md={12} className="text-center">
                  {!this.state.checking && this.questionText()}
                  {this.state.checking && this.answerText()}
              </Col>                
              <Col sm={12} md={12} className="btn-social">
                  <ul className="social-network social-circle">
                      <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                  </ul>               
              </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
