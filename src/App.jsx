import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-grid-system';
import { NavBar } from './components';

import Home from './screens/Home';
import CardDetails from './screens/CardDetails';

const StyledApp = styled.div`
  min-height: 100vh;
  background: #dfdfdf;
`;

const Content = styled.div`
  padding: 40px 0;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Router>
          <div>
            <NavBar />
            <Container>
              <Content>
                <Route exact path="/" component={Home} />
                <Route exact path="/cards/:id" component={CardDetails} />
              </Content>
            </Container>
          </div>
        </Router>
      </StyledApp>
    );
  }
}

export default App;
