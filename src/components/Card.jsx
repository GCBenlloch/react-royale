import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import elixirImg from '../images/elixir.png';

const StyledCard = styled(Link)`
  background: white;
  box-shadow: 0px 12px 5px -10px rgba(0,0,0,0.75);
  border-radius: 4px;
  margin: 0 0 20px 0;
  padding: 20px;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 150px;
`;

const Datos = styled.div`
  margin-left: 20px;
  flex: 1;
`;

const Encabezado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Titulo = styled.h2`
  margin-bottom: 0;
`;

const Elixir = styled.img`
  width: 12px;
`;

const Metadata = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.75);
`;

class Card extends Component {
  render() {
    return(
      <StyledCard to={`/cards/${this.props.data.idName}`}>
        <Image src={`http://www.clashapi.xyz/images/cards/${this.props.data.idName}.png`} />
        <Datos>
          <Encabezado>
            <Titulo>{this.props.data.name}</Titulo>
            <span><h3>{this.props.data.elixirCost}<Elixir src={elixirImg} /></h3></span>
          </Encabezado>
          <Metadata>{this.props.data.rarity} | Arena {this.props.data.arena}</Metadata>
          <p>{this.props.data.description}</p>
        </Datos>
      </StyledCard>
    );
  }
}

export default Card;
