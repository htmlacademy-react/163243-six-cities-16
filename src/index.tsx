import React from 'react';
import ReactDOM from 'react-dom/client';

import { City, Sort } from './const';

import App from './components/app/app';

import { placeCards } from './mocks/place-cards';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      city={ City }
      sortType={ Sort }
      placeCards={ placeCards }
    />
  </React.StrictMode>
);
