
import React from 'react';
import { hot } from "react-hot-loader/root";
import RootRouter from "./navigation/root-router";

interface Props {
}

class App extends React.Component<Props> {
  render() {
    return (
      <RootRouter />
    );
  }
}

export default hot(App);
