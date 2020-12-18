import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import PropTypes from 'prop-types'
import { connect, Provider, useSelector, useDispatch } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// class Counter extends Component {
//   render() {
//     const { value, onIncreaseClick } = this.props;
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncreaseClick}>click me</button>
//       </div>
//     )
//   }
// }

//对Counter组件接受的props进行类型检查
Counter.propTypes = {
  value: PropTypes.number.isRequired,   //要求数字类型，没有提供会警告
  onIncreaseClick: PropTypes.func.isRequired //要求函数类型
}

//  修改为函数组件 利用hooks 处理
function Counter() {
  const value = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch(increaseAction)}>click me</button>
    </div>
  )
}


//创建action
const increaseAction = {
  type: 'increase'
}

function counter(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case "increase":
      return { count: count + 1 }
    default:
      return state
  }
}


const store = createStore(counter)
//connect 接受两个参数 这两个参数都为函数 
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
