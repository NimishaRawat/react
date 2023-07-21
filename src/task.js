import React from "react";

export default class Lifecycle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            value:"8",
        };
        this.changeState=this.changeState.bind(this);

    }

CS=()=>
{
    console.log(this.state.value);
}
render()
{
    return(<><div>Hi hellow</div>
    <p>{this.state.value}</p>
    <button onClick={this.changeState}>Change State</button>
    <button onClick={this.CS}>CS</button></>);

}

 changeState= () =>
{
   console.log("printted");
    this.setState({value: +2});
   
console.log(this.state.value);
}

}