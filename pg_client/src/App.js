import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from "./components/nav/Nav";
import Post from "./components/post/Post";
import {Col, Row} from "antd";
import Get from "./components/get/Get";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
          <div className="App">
              <Row gutter={16}>
                  <Col span={12}>
                      <Post/>
                  </Col>
                  <Col span={12}>
                      <Get/>
                  </Col>
              </Row>
          </div>
      </div>
    );
  }
}

export default App;
