import React, { Component } from 'react';
import {Link, Switch} from 'react-router-dom'
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
          {console.log(this.props)}
          {routes}
          <div>
            <h1>Nav</h1>
          </div>
          <Link to='/profile'><button>Profile</button></Link>
          <Link to='/'><button>Home</button></Link>
      </div>
    );
  }
}

export default App;
