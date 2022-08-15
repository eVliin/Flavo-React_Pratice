import React, { Component } from "react";
import styled from "styled-components";

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 10vw;
  border: solid 0.3vw #000000;
  border-radius: 10vw;

  button {
    font-size: 30px;
    width: 15vw;
    background-color: transparent;
    border: none;
  }
  h2 {
    height: 100%;
    display: flex;
    font-size: 8vw;
    aling-itens: center;
    justify-content: center;
  }
`;

export default class counter extends Component {
  state = {
    numero: 1
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remove = () => {
    if (this.state.numero > 1) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <Counter>
        <button onClick={this.remove}>-</button>
        <h2>{this.state.numero}</h2>
        <button onClick={this.add}>+</button>
      </Counter>
    );
  }
}
