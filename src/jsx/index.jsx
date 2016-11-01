import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> A tiny whistle surrounding us that means absolutely nothing!</p>;
  }
}

render(<App/>, document.getElementById('poem1'));
