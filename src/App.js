import './App.scss';
import Header from './components/Header/Header.js';
import { Component } from 'react';
import Home from './page/Home/Home.js';
import Upload from './page/Upload/Upload.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          < Route exact path="/" component={Home} />
          < Route path="/upload" exact component={Upload} />
          <Route exact path="/" exact component={Home} />
        </Switch>

      </BrowserRouter>
    );
  }
}



export default App;