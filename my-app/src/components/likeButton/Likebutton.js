import React, { Component } from 'react'
import './Likebutton.css'
export default class Likebutton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor() {
        super()
        this.state = { isLiked: false }
    }

    handleCLick() {
        console.log(this)
        this.setState({
            isLiked: !this.state.isLiked
        })
        if (this.props.onClick) {
            this.props.onClick(this.state.isLiked)
        }
    }
    render() {
        // const wordings = this.props.wordings || {
        //     likedText: '取消',
        //     unlikedText: '点赞'
        // }
        // 默认配置
        // 上面的组件默认配置 是通过||操作符来实现 这种需要默认配置的情况在react.js中非常常见 所以react 也提供了一种方式 defaultProps 可以方便做到默认配置

        //defaultProps 作为点赞按钮组件的类属性，里面是对 props 中各个属性的默认配置。这样我们就不需要判断配置属性是否传进来了：如果没有传进来，会直接使用 defaultProps 中的默认属性。 
        return (
            <button onClick={this.handleCLick.bind(this)}>
                {this.state.isLiked
                    ? this.props.likedText
                    : this.props.unlikedText} 👍
            </button>
        )
    }
}
