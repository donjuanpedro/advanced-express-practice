import React, { Component } from "react";

class Comment extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.loadComment(id);
    }

    render() {
        return (
            <div>
                <h3>Comment: {this.props.comment.body}</h3>
            </div>
        )
    }
}

export default Comment;
