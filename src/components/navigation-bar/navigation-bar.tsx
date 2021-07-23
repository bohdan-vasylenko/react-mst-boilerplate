import * as React from 'react';
import styled from "styled-components";
import {RouterRoute, routes} from "src/navigation/root-router";
import {useLocation} from "react-router-dom";
import {color} from "src/theme";
import {Button} from "src/components/button/button";

const Container = styled.div`
    height: 80px;
    display: flex;
    flex: 1;
    padding: 0 180px;
  `
const InnerWrapper = styled.div`
     height: 80px;
    max-width: 1600px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`
const MainMenuButton = styled(Button)`
  background-color: ${color.transparent};
  min-width: 100px;
`

interface Props {
  routes: Array<RouterRoute>,
  children?: React.ReactNode
}
export function NavBar(props: Props) {
  const location = useLocation();

  return (
    <Container>
      <InnerWrapper>
        <MainMenuButton fetchResponsive={false} goTo={routes[routes.length - 1].path} label={'MENU'}/>
      </InnerWrapper> :
    </Container>
  );
}
