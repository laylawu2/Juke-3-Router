import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render () {
    return (
      <div id="main" className="container-fluid">
        { this.props.children }
      </div>
    )
  }
}
