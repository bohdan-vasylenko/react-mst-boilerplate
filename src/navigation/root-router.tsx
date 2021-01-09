import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {WelcomePage} from "./pages";
import {NavBar} from "../components";

export interface RouterRoute {
  path: string;
  label: string;
}

export default function RootRouter() {
  const routes = [
    {
      path: '/',
      label: 'welcome'
    },
    {
      path: '/home',
      label: 'home'
    }
  ]
  return (
    <BrowserRouter>
      <NavBar routes={routes} />
      <Switch>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
