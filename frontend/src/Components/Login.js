import React from 'react';
import {
  withRouter
} from 'react-router';

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('http://localhost:3000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(res => {
      if(res.msg){
        this.setState({message: res.msg})
      } else if(res.auth_key){
        localStorage.setItem('auth_key',res['auth_key'])
        this.props.handleLogin()
        this.props.history.push('/')
      }
    })
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2 className="center"> Login </h2>
        <h2 className="center">{this.state.message}</h2>
        <form className="center" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder="Username"  />
          <input type="password" value={this.state.password} onChange={this.handleInputChange} name='password' placeholder="Password"  />
          <input id="submit" type="submit" value="Submit" />
        </form>
      </span>
    )
  }
}

export default withRouter(Login);