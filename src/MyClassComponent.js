import React from "react";
// or import React, { Component } from "react"; 




// class MyClassComponent extends Component{   
// }


class MyClassComponent extends React.Component{
    render(){
       console.log(this.props)
        return(
            <h1>My name is {this.props.name}</h1>
        )
    }
}


export default MyClassComponent