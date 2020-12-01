import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }
    componentDidMount() {
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1 style={{ color: this.context.themeColor }}>这里是头部标题</h1>
            </div>
        )
    }
}
