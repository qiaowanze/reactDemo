import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Content from './Content'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import { Provider } from './react-redux'


// 使用真正的redux react-redux  
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// 使用已经配置好的createStore



//创建createStore
// function createStore(reducer) {
//   let state = null
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) => listener())
//   }
//   dispatch({})
//   return { subscribe, getState, dispatch }
// }

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

// class Index extends Component {
//   static childContextTypes = {
//     store: PropTypes.object
//   }

//   getChildContext() {
//     return { store }
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Content />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// );


//-------------优化代码 删除index中的context
class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}
// 把Provider 作为组件树的根节点
ReactDOM.render(
  <Provider store={store} >
    <Index />
  </Provider>,
  document.getElementById('root')
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
