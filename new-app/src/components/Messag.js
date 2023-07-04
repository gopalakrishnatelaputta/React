import React, { Component } from "react";

class Messag extends Component
{
constructor()
{
    super()
    this.state={
        message:'Welcome visitor'
    }
}

changeMessage()
{
    this.setState({
        message:'Thank you for subscribing'
    })
}

    render()
    {
        return(
            <div>
                    <h1>
                        {this.state.message}
                        <br></br>
                        <button onClick={()=>this.changeMessage()}>Subscribe</button>
                    </h1>

            </div>
        )
    }
}

export default Messag