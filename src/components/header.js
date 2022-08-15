import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 10vw;
  background-color: #ffecc0;
  border-radius: 10vw;
  .saco {
    padding-right: 5vw;
  }
  img {
    width: 12vw;
  }
`;

const Navbutton = styled.button`
  display: flex;
  width: 15vw;
  background-color: transparent;
  border: none;
  img {
    padding-left: 5vw;
  }
`;

const Barcenter = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  .search {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 92%;
    background-color: transparent;
    display: flex;
    text-align: center;
    border: none;
    font-size: 1rem;
  }
  .search::-webkit-input-placeholder {
    color: #000000;
    font-size: 8vw;
    position: absolute;
    left: 19vw;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Bar>
          <Navbutton onClick="navBar">
            <img src={"../assets/ingles.png"} />
          </Navbutton>
          <Barcenter>
            <input className="search" placeholder="Flavo"></input>
          </Barcenter>
          <img className="saco" src={"../assets/2.png"} />
        </Bar>
      </Wrapper>
    );
  }
}
