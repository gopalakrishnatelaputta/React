import React, { Component } from 'react'

 class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Gopala Krishna'
      }
      console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate()
    {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate()
    {
        console.log('LifeCycleB getSnapShopbeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifeCycleB componentDidUpdate')
    }

    
  render() {
    console.log('LifecycleB render')
    return (
      <div>
            <div>LifeCycle B</div>
      </div>
    )
  }
}

export default LifeCycleB