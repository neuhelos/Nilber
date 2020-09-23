import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nilber from './Nilber';
import * as serviceWorker from './serviceWorker';

import "fontsource-jost"
import "typeface-abel"

ReactDOM.render(
  <React.StrictMode>
    <Nilber />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
