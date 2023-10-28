import {Component} from "react";
import {Button, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import {styleSheets} from "../Login/styles";
import {withStyles} from "@mui/styles";


class LoginPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes} = this.props
        return(
            <div className={classes.container} >
                <div className={classes.container_sub} >

                    <div  className={classes.container_title}>
                    <Typography variant="h3" gutterBottom>
                        Login
                    </Typography>
                    </div>

                    <div className={classes.container_field}>
                        <TextField
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"

                        />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            type={"password"}
                            variant="outlined"

                        />
                    </div >

                    <div className={classes.container_button}>
                        <Button variant="contained">LOGIN</Button>

                    </div>
                </div>
            </div>

        )
    }
}

export default withStyles(styleSheets)(LoginPage);