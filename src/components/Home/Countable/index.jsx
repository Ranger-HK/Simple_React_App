import {Component} from "react";
import {Button, Typography} from "@mui/material";
import {styleSheets} from "../Countable/styles";
import {withStyles} from "@mui/styles";



class Countable extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }

    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount(){
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount(){
        this.setState({
            count: this.state.count = 0
        })
    }

    render(){
        const {classes} = this.props
        return(
            <div className={classes.container} >
                <div>
                    <Typography variant="h3" gutterBottom>
                       Count : {this.state.count}
                    </Typography>
                </div>
                <div>

                    <Button variant="contained"
                     onClick={() =>{
                         this.incrementCount();
                     }}
                            style={{backgroundColor:"Green"}}
                    >Increase</Button>

                    <Button variant="contained"
                            onClick={() =>{
                                this.decrementCount();
                            }}
                            style={{marginLeft:"20px" ,backgroundColor:"Orange"}}
                    >Decrease</Button>


                    <Button variant="contained"
                            onClick={() =>{
                                this.resetCount();
                            }}
                            style={{marginLeft:"20px" ,backgroundColor:"Red"}}

                    >Resets</Button>
                </div>


            </div>
        )
    }

}

export default withStyles(styleSheets)(Countable);