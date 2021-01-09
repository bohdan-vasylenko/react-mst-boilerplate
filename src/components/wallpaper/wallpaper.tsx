import * as React from 'react';
import styled from "styled-components";
import {color} from "../../theme";

interface Props {
  children?: React.ReactNode
}
export function Wallpaper(props: Props) {
  const Background = styled.div`
  background-color: ${color.palette.dimmedWhite};
  width: 100%;
  height: 100%;
`

  return (
      <Background>
        {props.children}
      </Background>
  );
}
