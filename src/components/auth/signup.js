import React, { Component } from 'react'

export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        fname: '',
        lname: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div className="container section">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn green z-depth-0 lighten-1">Login</button>
            </div>
        </form>
      </div>
    )
  }
}