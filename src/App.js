import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import './App.css';

import actions from './utils/actions';
import Posts from './components/Posts';
import Success from './components/alerts/Success';

const TOP_STYLE = {
  marginTop: 10
}

class App extends Component {
  componentDidMount() {
    actions.getPosts();
  }
  render() {
    return (
      <div className="container" style={TOP_STYLE}>
        <Success salute="Welcome!" message="the React Post app is running..." />
        <div>
          <DevTools />
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
