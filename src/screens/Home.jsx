import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Row, Col } from 'react-grid-system';
import { Card } from '../components';

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  border: 1px solid #1e5799;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cards: null,
      search: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount() {
    axios.get('http://www.clashapi.xyz/api/cards').then(res => {
      this.setState({ cards: res.data });
    });
  }
  handleSearch(e) {
    this.setState({ search: e.target.value });
  }
  render() {
    return (
      <div>
        {this.state.cards && (
          <div>
            <Input type="text" value={this.state.search} onChange={this.handleSearch} placeholder="Search..." />
            <Row>
              {this.state.cards.filter(card => card.name.toLowerCase().includes(this.state.search.toLowerCase())).map(card => (
                <Col sm={6} key={card._id}>
                  <Card data={card} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
