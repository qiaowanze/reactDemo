import React, { Component } from 'react'
import '../index.css'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'
class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        //高阶组件修改 添加数据
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            // username: '',
            username: props.data || [],
            content: ''
        }
    }

    // componentWillMount() {
    //     this._loadUsername()
    // }

    // _loadUsername() {
    //     var username = localStorage.getItem('username')

    //     if (username) {
    //         this.setState({
    //             username
    //         })
    //     }
    // }

    // _saveUsername(username) {
    //     localStorage.setItem('username', username)
    // }

    componentDidMount() {
        this.textarea.focus()
    }

    // 注意：修改为高阶组件写法 

    handleUsernameBlur(event) {
        // this._saveUsername(event.target.value)
        this.props.saveData(event.target.value)
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        console.log(this)
        if (this.props.onSubmit) {
            console.log('点击发布')
            const { username, content } = this.state
            this.props.onSubmit({ username, content, createdTime: +new Date() })
        }
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onBlur={this.handleUsernameBlur.bind(this)} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }

}
CommentInput = wrapWithLoadData(CommentInput, 'username')
export default CommentInput;