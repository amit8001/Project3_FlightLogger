import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import SearchResultContainer from "./components/SearchResultContainer";

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
      <Nav />
      {/*<Splash />*/}
         <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/api/flights/:id" component={SearchResultContainer} />
        </Switch> 
    </div>
  </Router>
);

export default App;
