import React from 'react'
import Homescreen from '../Components/Homescreen'
import {
    withRouter
  } from 'react-router';

class OtherHome extends React.Component {

    componentDidMount() {
        if(localStorage.getItem(`auth_key`)=== "undefined") {
            localStorage.clear()
            this.props.history.push('/login')
        }
    }

   

    render(){
        
        return (
            <div id="Main">
             <Homescreen />
            </div>
        )
    }
}
export default withRouter(OtherHome);