import React from "react";
import ReactDOM from "react-dom";

import {InputComponent, TableComponent} from './components'


import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { logger } from 'redux-logger';
import rootSaga from './sagas';
import "antd/dist/antd.css";

import "./styles.css";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
     <InputComponent style={{marginBootom:'20px'}}/>
     <TableComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render( 
<Provider store={store}>
  <App />
</Provider>, rootElement);
