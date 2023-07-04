import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Gopala Krishna'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate()
    {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate()
    {
        console.log('LifeCycleA getSnapShopbeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'Krishna'
        })
    }

    
  render() {
    console.log('LifecycleA render')
    return (
      <div>
            <div>LifeCycle A</div>
            <button onClick={this.changeState}>change State</button>
            <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
