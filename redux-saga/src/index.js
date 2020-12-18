import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'; // 中间件和store
import { Provider } from 'react-redux'; // provider
import { composeWithDevTools } from 'redux-devtools-extension'; // 调试工具
import rootReducer from './reducers/index'; // reducers

import createSagaMiddleware from 'redux-saga'; // 1：saga引入createSagaMiddleware
import rootSaga from './sagas/index'; // 5：自己写的根rootSaga


// 2：创建saga中间件
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools( // 3：把sagaMiddleware当做一个中间件，引用调试工具
    applyMiddleware(sagaMiddleware)
  )
)

console.log(store)

// 4：启动saga 就是在redux数据流中加了一层处理 对action进行监听 捕获到监听的action之后 派发一个新的任务对state进行维护
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));



serviceWorker.unregister();
