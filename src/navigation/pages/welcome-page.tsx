import * as React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

interface Props {
  name:
    string
}

export default class WelcomePage extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <Title>
          Hello {name}
        </Title>
      </>
    );
  }
}
