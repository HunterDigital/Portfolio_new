import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import About from './components/About';

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <About></About>
      </div>
    )
  }
}



ReactDOM.render(<MyComponent/>, document.getElementById('root'));