import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { deletePage } from '../redux/action-creators'

export default connect(
  (state) => {
    const selected = state.selected;
    return {
      title: selected.title,
      authorName: selected.author.name,
      authorId: selected.author.id,
      content: selected.content,
      urlTitle: selected.urlTitle,
      tags: selected.tags,
      id: selected.id
    }
  },
  (dispatch) => {
    return {
      handleDelete: (e) => {
        console.log(e.target.value)
        e.preventDefault();
        dispatch(deletePage(e.target.value))
      }
    }
  }
)(function(props) {
  return (
    <div>
    <h3>{props.title}
    </h3>
    <h4>by <Link to={`/users/${props.authorId}`}>{props.authorName}</Link></h4>
    <ul>
      { props && props.tags.map((tag, i) => <li key={i}>{tag}</li>) }
    </ul>
    <hr />
    <div className="page-body">{props.content}</div>
    <hr />
    <Link to={`/wiki/${props.urlTitle}/edit`} className="btn btn-primary">edit this page</Link>
    <button className="btn btn-danger" value={props.urlTitle} onClick={props.handleDelete}>delete this page</button>
    </div>
  )
})
