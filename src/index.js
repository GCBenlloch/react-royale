import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import baseStyles from './utils/baseStyles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Sigmar One', 'Open Sans:300,400,700'],
  },
});

baseStyles();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
