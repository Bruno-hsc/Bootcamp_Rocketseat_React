import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import "./styles/global";

import Main from "./pages/Main/Index";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);
export default App;
