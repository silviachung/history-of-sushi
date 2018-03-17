import React from 'react';
import { connect } from 'react-redux';
import { makeNewUser } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state= {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        password_confirmation: '',
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.makeNewUser(this.state, this.props.history)
  }

  handleChange = (e) => {
    //TODO add validations
    this.setState({ user: {...this.state.user, [`${e.target.name}`]: e.target.value }})
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="firstname" placeholder="FIRSTNAME" value={this.state.user.firstname}/>
        <input type="text" name="lastname" placeholder="LASTNAME" value={this.state.user.lastname}/>
        <input type="text" name="username" placeholder="USERNAME" value={this.state.user.username}/>
        <input type="password" name="password" placeholder="PASSWORD" value={this.state.user.password}/>
        <input type="password" name="password_confirmation" placeholder="PASSWORD CONFIRMATION" value={this.state.user.password_confirmation}/>
        <input type="submit" name="submit" value="Sign Up"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ makeNewUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUp);
