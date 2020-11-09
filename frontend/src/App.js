import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login'
import OtherHome from './PlayerComponents/OtherHome'
import Homescreen from './Components/Homescreen'
import Header from './Components/Header'
import SignUp from './Components/SignUp'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import DisplayCharacter from './Components/DisplayCharacter';


class App extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount(){
    
    if(localStorage.getItem('auth_key') !== null){
      this.setState({ isLoggedIn: true })
    }
  }

  handleLogin = () => {
    if(localStorage.getItem('auth_key') === "undefined"){
      
    }else {
      this.setState({ isLoggedIn: true })
  
    }
  }

  render(){
    return (
      <div className="Main">
        <BrowserRouter>

          <Header isLoggedIn={this.state.isLoggedIn} />

          <Switch>

            <Route exact path="/" component={() => {
              if(localStorage.getItem('auth_key')){
                return <OtherHome />
              }else{
                return <Redirect to="/login" />
              }
            }} />


            <Route path="/login" component={() => {
              return <Login handleLogin={this.handleLogin} />
            }} />

            <Route path="/signup" component={SignUp} />

            <Route path="/logout" component={() => {
              localStorage.clear()
              this.setState({ isLoggedIn: false })
              return <Redirect to="/login" />
            }} />

            <Route path='/character' component={DisplayCharacter} />

            <Route>
              <Redirect to="/" />
            </Route>

          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;