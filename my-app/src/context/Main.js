import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {
    // 在这里 自组件想要使用context 就必须使用contextTypes
    static contextTypes = {
        themeColor: PropTypes.string
    }
    componentDidMount() {
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1 style={{ color: this.context.themeColor }}>这里是主要内容</h1>
            </div>
        )
    }
}
