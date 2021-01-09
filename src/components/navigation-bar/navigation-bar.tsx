import * as React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import {color} from "../../theme";
import {RouterRoute} from "../../navigation/root-router";

interface Props {
  routes: Array<RouterRoute>,
  children?: React.ReactNode
}
export function NavBar(props: Props) {
  const Container = styled.div`
  background-color: ${color.palette.dimmedWhite};
  width: 100%;
  height: 1 erm;
`
  const renderTabs = () => props.routes.map(route => <Link to={route.path}>{route.label}</Link>)

  return (
    <Container>
      {renderTabs()}
    </Container>
  );
}
