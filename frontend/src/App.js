import { BrowserRouter, Switch, Route } from "react-router-dom";

import Registration from "./Pages/Registration";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
