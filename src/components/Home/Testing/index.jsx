import { Component } from "react";

class Testing extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Hello Test {this.props.status}</h1>
            </div>
        )
    }
}

export default Testing