import React from 'react';
import "./App.css"
import Header from './Header'
import Homepage from "./Homepage";
import About from "./About";
import Seller from "./Seller";
import SellerDetail from "./SellerDetail";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return <>
      <Router>
        <Header />    {/*Why the hw asked as to put it outside lolll*/}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About}/>
          <Route path="/items/:itemId" component={ItemDetails} />
          <Route path="/sellers" exact component={Seller} />
          <Route path="/sellers/:sellerId" exact component={SellerDetail} />
        </Switch>
      </Router>
  </>;
};

export default App;
