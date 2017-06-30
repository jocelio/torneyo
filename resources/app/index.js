import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './/css/index.css';
import Menu from "./components/Menu";


ReactDOM.render(
    <Menu/>,
    document.getElementById('menu')
);

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
