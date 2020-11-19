import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Button from './components/likeButton/Likebutton'
import List from './components/list/List'
import './index.css';
import reportWebVitals from './reportWebVitals';


// 在前面的demo中 一个组件的显示是可以由他的数据状态和配置参数决定的 一个组件可以拥有自己的状态
// 就像一个点赞按钮 可以有’已点赞‘和’未点赞‘状态 并且可以在这两种状态中进行切换 
//react.js的state 就是用来储存这种可变化状态的

//新建一个点赞的的组件 把两种状态 存入state中 
class LikeButton extends Component {
  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handleClickButton() {
    console.log(this.state.isLiked)
    this.setState({
      isLiked: !this.state.isLiked
    })
    console.log(this.state.isLiked)

    this.setState({ count: 0 }) // => this.state.count 还是 undefined
    console.log(this.state.count)
    this.setState({ count: this.state.count + 1 }) // => undefined + 1 = NaN
    this.setState({ count: this.state.count + 2 }) // => NaN + 2 = NaN

    // 上面的代码的运行结果并不能达到我们的预期，我们希望 count 运行结果是 3 ，可是最后得到的是 NaN。但是这种后续操作依赖前一个 setState 的结果的情况并不罕见。

    // 这里就自然地引出了 setState 的第二种使用方式，可以接受一个函数作为参数。React.js 会把上一个 setState 的结果传入这个函数，你就可以使用该结果进行运算、操作，然后返回一个对象作为更新 state 的对象：
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3


    //state 合并
    //上面我们进行了三次setState 但是实际上组件只会重新渲染一次 而不是三次 这是因为在react.js内部会把js事件循环中的消息队列的同一个消息中的setState都进行合并以后在重新渲染组件 
    // 你需要记住的是：在使用react.js的时候 并不需要担心多次setState会带来性能问题

    //setState 接受函数参数 
    // 注意点：当你调用setState 的时候 react.js不会立马修改state 而是把这个对象放到一个更新队列中 稍后才会从队列当中把新的状态提取出来合并到state中 
    // 然后再触发组件更新 
  }


  render() {
    return (
      <button onClick={this.handleClickButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍
      </button>
    )
  }
}


// 新建一个标题的组件
class Title extends Component {
  render() {
    return (
      <div>
        <h1>这是标题</h1>
      </div>
    )
  }
}

// 新建一个尾部的组件
class Footer extends Component {
  constructor() {
    super()
    this.state = { isClicked: 1 }
  }
  handleClick(e) {
    console.log(this)
    console.log(e)
    console.log(this.state.isClicked)
    // 在这里打印this 会出现null 或者 underfined 这是因为react.js调用你传的方法的时候 并不是通过对象方法的方式调用 而是直接通过函数调用 
    // 所以事件监听函数内 并不能通过this 获取到实例
    // 如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法 bind 到当前实例上再传入给 react.js
    // 当然你也可以在bind的时候给事件监听函数穿一些参数
    // alert(e.target.innerHTML)
  }
  render() {
    return (
      <div>
        <h2 onClick={this.handleClick.bind(this, 'qiaowanze')}>这是尾部，可以点击哦 真不错</h2>
      </div>
    )
  }
}
class Header extends Component {
  render() {
    const word = "xiaoqiao"
    const classname = "header"
    return (
      // jsx语法 最外层只能有又一个jsx把所有内容包裹起来
      <div>
        <Title />
        <h1>
          Hello World {word}
        </h1>
        <h2>
          helle {(function () { return "react" })()}
        </h2>

        {/* 在这里放点赞组件 */}
        <LikeButton />

        {/* 简而言之 {}里面可以放任何的js代码 包括变量 表达式计算 函数执行 render会把这些代码返回的内容如实的渲染到页面上 非常的灵活  */}
        <h4 className={classname}>
          真不错
        </h4>
        {/* 表达式不仅仅可以用在标签内部 也可以用在标签的属性上  */}
        <Footer />
      </div>
    )
  }
}
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class Index extends Component {
  render() {
    return (
      <div>
        <Button likedText="已赞" unlikedText="赞"
          onClick={this.handleClick.bind(this)}
        />
        {users.map((user, i) => {
          return <List key={i} user={user} />
        })}
      </div>)
  }


  handleClick(e) {
    console.log(e)
    if (e) {
      alert("取消点赞")
    } else {
      alert("点赞成功")
    }
  }

}

ReactDOM.render(
  <div>
    <Header />
    <Index />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
