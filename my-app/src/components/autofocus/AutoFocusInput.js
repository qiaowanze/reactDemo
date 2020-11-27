import React, { Component } from 'react'

export default class AutoFocusInput extends Component {
    componentDidMount() {
        console.log(this.input)
        this.input.focus()
    }
    render() {
        return (
            // 当react满足不了你的dom操作 此时就需要ref 
            <div>
                <input ref={(input) => this.input = input} />
            </div>
        )
    }
}
