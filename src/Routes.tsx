import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";

//import pages
import Header from "./components/Header";
import Post from "./components/Post";
import Home from "./pages/Home";

const Routes = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Router>
      <Header />
      {visible && <Banner open={() => setVisible(false)} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Post} />
      </Switch>
    </Router>
  );
};

export default Routes;
