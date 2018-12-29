import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../actions/authAction';
import {Redirect} from 'react-router-dom';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
  render() {
      const {auth} = this.props;
      if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container section">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn green z-depth-0 lighten-1">Login</button>
                <div className="red-text center">
                    <p>
                        {this.props.authMessage ? this.props.authMessage : null}
                    </p>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        authMessage: state.auth.authMessage,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);