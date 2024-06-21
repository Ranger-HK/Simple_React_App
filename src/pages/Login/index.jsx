import { Component } from "react";
import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { styleSheets } from "../Login/styles";
import { withStyles } from "@mui/styles";
import Alert from '@mui/material/Alert';


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "ravindu",
            password: "1999",
            formData: {
                user_name: '',
                password: ''
            }
        }
    }

    checkValidity() {
        console.log("Login Click")
        console.log("UserName : " + this.state.userName)
        console.log("Password : " + this.state.password)
        console.log(this.state.formData)

        let formData = this.state.formData
        if (formData.user_name === this.state.userName && formData.password === this.state.password) {
            console.log("Credential Matched !")
            //<Alert severity="success">Credential Matched !</Alert>
        } else {
            console.log("Credential Didn't Matched !")
            //<Alert severity="error">Credential Didn't Matched !</Alert>

        }
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container} >
                <div className={classes.container_sub} >

                    <div className={classes.container_title}>
                        <Typography variant="h3" gutterBottom>
                            Login
                        </Typography>
                    </div>


                    <div className={classes.container_field}>
                        <TextField
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}

                        />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            type={"password"}
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({ formData })
                            }}

                        />
                    </div >

                    <div className={classes.container_button}>
                        <Button
                            variant="contained"
                            onClick={() => {
                                console.log("Clicked")
                                this.checkValidity()
                            }}

                        >LOGIN</Button>

                    </div>
                </div>
            </div>

        )
    }
}

export default withStyles(styleSheets)(LoginPage);