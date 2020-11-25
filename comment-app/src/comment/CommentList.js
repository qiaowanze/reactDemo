import React, { Component } from 'react'
import Comment from './Comment'
import '../index.css'
export default class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    constructor() {
        super()
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}
