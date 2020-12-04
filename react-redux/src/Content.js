import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import { connect } from './react-redux'

//使用真正的react-redux
import { connect } from 'react-redux'
class Content extends Component {
    // static contextTypes = {
    //     store: PropTypes.object
    // }

    // constructor() {
    //     super()
    //     this.state = { themeColor: '' }
    // }

    // componentWillMount() {
    //     const { store } = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }

    // _updateThemeColor() {
    //     const { store } = this.context
    //     const state = store.getState()
    //     this.setState({ themeColor: state.themeColor })
    // }
    // render() {
    //     return (
    //         <div>
    //             <p style={{ color: this.state.themeColor }}>这里是内容 真不错</p>
    //             <ThemeSwitch color={this.state.themeColor} />
    //         </div>
    //     )
    // }


    // 利用高阶组件 优化代码
    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>这里是内容 真不错</p>
                <ThemeSwitch color={this.props.themeColor} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content)
export default Content;
