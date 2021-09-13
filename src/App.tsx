import React from "react";
import { Provider } from "react-redux";
import "./assets/scss/theme.scss";
import { Container } from "./components/theme";
import Home from "./pages/home";
import store from "./store";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Container>
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
