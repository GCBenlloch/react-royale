import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Row, Col } from 'react-grid-system';
import { Card } from '../components';

const Related = styled.div`
  margin-top: 40px;
`;

class CardDetails extends Component {
  constructor() {
    super();
    this.state = {
      card: null,
      randomCards: null,
    };
    this.getData = this.getData.bind(this);
  }
  componentWillMount() {
    this.getData(this.props.match.params.id)
  }
  componentWillReceiveProps(nextProps) {
    this.getData(nextProps.match.params.id)
  }
  getData(id) {
    axios.get(`http://www.clashapi.xyz/api/cards/${id}`).then(res => {
      this.setState({ card: res.data });
      window.scrollTo(0, 0)
    });
    axios.get(`http://www.clashapi.xyz/api/random-deck`).then(res => {
      let randomCards = res.data.filter(card => card.idName !== id);
      this.setState({ randomCards });
    });
  }
  render() {
    return(
      <div>
        {this.state.card && (
          <Card data={this.state.card} />
        )}
        {this.state.randomCards && (
          <Related>
            <h2>Other cards</h2>
            <Row>
              {this.state.randomCards.map(card => (
                <Col sm={6} key={card._id}>
                  <Card data={card} />
                </Col>
              ))}
            </Row>
          </Related>
        )}
      </div>
    );
  }
}

export default CardDetails;
