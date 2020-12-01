import React, { Component } from 'react'
import Main from './context/Main'
import Header from './context/Header'
import PropTypes from 'prop-types'
export default class App extends Component {
  static childContextTypes = {
    //这里注意 想要使用context 必须要定义类型 因为 context 是一个危险的特性，按照 React.js 团队的想法就是，把危险的事情搞复杂一些，提高使用门槛人们就不会去用了。如果你要给组件设置 context，那么 childContextTypes 是必写的。
    themeColor: PropTypes.string
  }

  constructor() {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext() {
    return { themeColor: this.state.themeColor }
  }

  render() {
    return (
      <div>
        <Main />
        <Header />
      </div>
    )
  }
}
