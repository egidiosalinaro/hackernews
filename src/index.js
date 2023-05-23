import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

const loadMore = document.querySelector('button');

let currentItems = 10;
loadMore.addEventListener('click', e => {
  const elementList = [...document.querySelectorAll('section')];
  e.target.classList.add('show-loader');

  for (let i = currentItems; i < currentItems + 10; i++) {
    setTimeout(function () {
      e.target.classList.remove('show-loader');
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
      }
    }, 3000);
  }
  currentItems += 10;

  // hide load button after fully load
  if (currentItems >= elementList.length) {
    event.target.classList.add('loaded');
  }
});
