import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () => (

  <Router>
  <div>
    <Nav />

    <Switch>
    {/*   this goes to the detail books (pages/book) */}
      <Route exact path= '/' component = {Books}/>
      <Route exact path= '/books' component = {Books} />
      {/* this goes to the detail componets (pages/detail) */}
      <Route exact path= '/books/:id' component = {Detail} />
      {/*  */}
      <Route component={NoMatch} />
    
    </Switch>
  </div>
  </Router>
);

export default App;
