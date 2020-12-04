import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'
class Header extends Component {
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
    //             <h1 style={{ color: this.state.themeColor }}>这里是头部 真不错</h1>
    //         </div>
    //     )
    // }



    // 利用高阶组件 将重复的逻辑封装起来

    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>这里是头部 真不错</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps)(Header)
export default Header
