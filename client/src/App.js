import React from "react";
import Header from "./components/Header";
import Splash from "./components/Splash";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom"

const App = () => (
  <Router>
    <div>
      <Header />
      <Splash />
        {/* <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch> */}
    </div>
  </Router>
);

export default App;
