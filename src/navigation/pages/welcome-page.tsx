import * as React from 'react';
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {useStores} from "../../store";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Span = styled.span`
  cursor: pointer;
   font-size: 1.2em;
    text-align: center;
    color: blue;
`

export const WelcomePage = observer(function WelcomePage() {
  const {global} = useStores()
    return (
      <>
        <Title>
          Hello to mobX store! Random number from store is: {global.example}
        </Title>
        <Span onClick={() => global.setRandomExample()} >
          Click to change number
        </Span>
      </>
    );
})
