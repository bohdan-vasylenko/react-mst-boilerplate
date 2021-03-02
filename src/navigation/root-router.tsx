import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {WelcomePage} from "./pages";
import {NavBar} from "../components";
import styled from "styled-components";

export interface RouterRoute {
  path: string;
  label: string;
  params?: Array<string>;
}

const RouterContainer = styled.div`
    height: 100%;
`
export  const routes = [
  {
    path: '/',
    label: 'welcome'
  },
  {
    path: '/home',
    label: 'home'
  }
]
export default function RootRouter() {
  return (
    <BrowserRouter>
      <RouterContainer>
        <NavBar routes={routes} />
        <Switch>
          {/*Default route should be last*/}
          <Route path={'*'}>
            <WelcomePage />
          </Route>
        </Switch>
      </RouterContainer>
    </BrowserRouter>
  );
}
