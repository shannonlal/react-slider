import './scss/app.scss';

import React from 'react';
import ReactDom from 'react-dom';


ReactDOM.render(
  <BookList books={data.data.books}/>,
  document.getElementById('app')
);