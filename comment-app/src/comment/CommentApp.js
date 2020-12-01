// import React, { Component } from 'react'
import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import PropTypes from 'prop-types'
import '../index.css'
import wrapWithLoadData from './wrapWithLoadData'
class CommentApp extends Component {
    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    // constructor() {
    //     super()
    //     this.state = {
    //         comments: []
    //     }
    // }
    // componentWillMount() {
    //     this._loadComments()
    // }

    // _loadComments() {
    //     var comments = localStorage.getItem('comments')
    //     console.log(comments)
    //     if (comments) {
    //         comments = JSON.parse(comments)
    //         this.setState({
    //             comments
    //         })
    //     }
    // }
    // _saveComments(comments) {
    //     localStorage.setItem('comments', JSON.stringify(comments))
    // }



    // 注意下面的写法 使用高阶组件写法
    constructor(props) {
        super(props)
        this.state = {
            comments: props.data || []
        }
    }

    handleDeleteComment(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        // this._saveComments(comments)
        this.props.saveData(comments)
    }

    handleSubmitComment(comment) {
        if (!comment) return;
        if (!comment.username) return alert("请输入用户名");
        if (!comment.content) return alert("请输入内容")
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        // this._saveComments(comments)
        console.log(comments)
        this.props.saveData(comments)
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        )
    }
}
CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp;