import React from 'react';


class SignUp extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      player: {
        username: this.state.username,
        password: this.state.password
      }
    }
    fetch('http://localhost:3000/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(userObj => console.log(userObj))
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2 className="center"> Sign Up </h2>
        <form className="center" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder="Username"  />
          <input type="password" value={this.state.password} onChange={this.handleInputChange} name='password' placeholder="Password"  />
          <input id="submit" type="submit" value="Start Adventure" />
        </form>
      </span>
    )
  }
}

export default SignUp;