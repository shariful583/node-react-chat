import { BrowserRouter, Switch, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import Login from "./Pages/Login";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
