import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    /*if(this.state.isLoggedIn)
    {
        return <div><h1>Welcome Gopala</h1></div>
         
      }
      else
      {
        return <div>
            <h1>Welcome Krishna</h1>
        </div>
      }*/

      /*return this.state.isLoggedIn ? 
      (
            <div><h1>Welcome Gopala</h1></div>
      ):
      (
        <div><h1>Welcome Krishna</h1></div>
      )
      {

      }*/

      return this.state.isLoggedIn && <div><h1>Welcome to Krishna</h1></div>
    
  }
}


export default UserGreeting
