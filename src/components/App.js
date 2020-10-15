import React from 'react';
import "./App.css"
import Header from './Header'
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = ({items, sellers}) => {
  return <>
      <Router>
        <Header />    {/*Why the hw asked as to put it outside lolll*/}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About}/>
          <Route path="/items/:itemId" component={ItemDetails} />
        </Switch>
      </Router>
  </>;
};

export default App;
