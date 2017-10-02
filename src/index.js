import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation/navigation';
import './styles/main.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navigation />
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
