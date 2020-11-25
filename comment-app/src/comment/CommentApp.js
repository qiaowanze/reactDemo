import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import '../index.css'
export default class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    handleSubmitComment(comment) {
        console.log(comment)
        if (!comment) return;
        if (!comment.username) return alert("请输入用户名");
        if (!comment.content) return alert("请输入内容")
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}
