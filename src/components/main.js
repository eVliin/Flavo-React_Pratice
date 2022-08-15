import React, { Component, useState } from "react";
import Cosiness from "./main-cosiness.js";
import Intensity from "./main-intensity.js";
import Counter from "./counter.js";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Options = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 10vw;
  border-radius: 10vw;
  input {
    height: min-content;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    margin: 0;
    transform: translateY(-0.075em);
    font: inherit;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #000000;
    border-radius: 50%;
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 1em;
    height: 1.1em;
    border-radius: 100%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #000000;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }

  .form-control + .form-control {
    margin-top: 1em;
  }

  label {
    text-align: left;
    width: 44%;
    margin-left: 1vw;
  }
`;

const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 10vw;
  background-color: #000000;
  border: solid 0.3vw #000000;
  border-radius: 10vw;
  color: #ffffff;
`;

export default function Main_() {
  const [show, setShow] = useState(true);

  return (
    <Div>
      {show ? <Cosiness /> : <Intensity />}
      <Wrapper>
        <Options>
          <input
            id="radio1"
            name="product"
            type="radio"
            defaultChecked
            onChange={() => setShow(true)}
          />
          <label for="radio1">Cosiness(75g)</label>
          <input
            id="radio2"
            name="product"
            type="radio"
            onChange={() => setShow(false)}
          />
          <label for="radio2">Intensity(150g)</label>
        </Options>
        <Counter />
        <Cart>
          <h3>ADD TO CART</h3>
        </Cart>
      </Wrapper>
    </Div>
  );
}
