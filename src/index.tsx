import React from 'react';
import ReactDOM from 'react-dom';
import Pretty from '@components/Pretty'

const json = [
  'da',
  'br',
  {
    'das': 'a111',
    "da": {
      "Das": '213',
    }
  },
  [
    'bdsad',
    ['dsada', ['222222222']]
  ]
]


ReactDOM.render(
  <React.StrictMode><Pretty data={JSON.stringify(json)} /></React.StrictMode>,
  document.getElementById('root'),
);
