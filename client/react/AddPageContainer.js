import React from 'react';
import { connect } from 'react-redux'
import { createPage } from '../redux/action-creators'
import AddPage from './AddPage'

export default connect(null,
  (dispatch) => {
    return {
      submit: (pageInfo) => {
        dispatch(createPage(pageInfo))
      }
    }
  }
)(class Container extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      email: '',
      title: '',
      content: '',
      status: "open",
      tags: '',
      invalidName: false,
      invalidEmail: false,
      invalidTitle: false,
      invalidContent: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e, field) {
    e.preventDefault();
    this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, title, content } = this.state;
    let isValid = true;
    let validEmail = email.includes('@') && email.includes('.')

    if (!name) {
      this.setState({invalidName: true}); isValid = false}
    if (!email || !validEmail) {
      this.setState({invalidEmail: true}); isValid = false}
    if (!title) {
      this.setState({invalidTitle: true}); isValid = false}
    if (!content) {
      this.setState({invalidContent: true}); isValid = false}

    if (isValid) this.props.submit(this.state)
  }

  render () {
    return (
      <AddPage
        handleInput={this.handleInput} handleSubmit={this.handleSubmit}
        invalidName={this.state.invalidName}
        invalidEmail={this.state.invalidEmail}
        invalidTitle={this.state.invalidTitle}
        invalidContent={this.state.invalidContent}
      />
    )
  }
})
