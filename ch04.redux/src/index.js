import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import Counter from './counter/components/Counter';
import counter from './counter/reducers';


// 스토어 생성 
const store = createStore(counter);
function render() {
  ReactDOM.render(<Counter value={store.getState()}
                          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                          onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,
                  document.getElementById('root'));
}
render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
