import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
text-align: left;
article{
  width: 100%;
}
`;

const Img = styled.img`
  width: 70vw;
  @media only screen and (orientation:landscape){
    width: 40vw;
  }
`;
const Prices = styled.article`
width:100%;
display: flex;
justify-content: space-between;
h2{
  font-size: 2em;
}
`;

export default class Cosiness extends Component {
  render() {
    return (
      <Wrapper className="main">
        <Img src={"../assets/cosiness.png"} />
        <Prices>
          <h2>COSINESS</h2> <h2>$15</h2>
        </Prices>
        <article>
          <h2>WHAT'S INSIDE</h2>
          <p>Chilli, oregano, safran, paprika</p>
        </article>
        <article>
          <h2>WHY WE LOVE IT</h2>
          <p>
            This one will add a little savoury flavour to anyand turn any meal
            to a culinary masterpiece.
          </p>
        </article>
      </Wrapper>
    );
  }
}
