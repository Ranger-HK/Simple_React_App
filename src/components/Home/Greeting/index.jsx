import {Component} from "react";
import {Typography} from "@mui/material";
import ijse_logo from "../../../assets/img/ijse_logo.png"
import {styleSheets} from "../Greeting/styles";
import {withStyles} from "@mui/styles";


class Greeting extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom>
                        Hello Welcome {this.props.name}
                    </Typography>
               </div>

                <div >
                    <img src={ijse_logo} alt=""/>
                </div>

            </div>
        );
    }
}

export default withStyles(styleSheets)(Greeting);