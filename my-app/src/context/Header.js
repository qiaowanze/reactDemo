import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h3 style={{ color: this.context.themeColor }}>这里是头部标题</h3>
            </div>
        )
    }
}
