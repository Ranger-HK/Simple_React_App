import {Component,Fragment} from "react";
import Greeting from "../../components/Home/Greeting";
import Countable from "../../components/Home/Countable";
import {Divider} from "@mui/material";
import Testing from "../../components/Home/Testing";

class HomePage extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
           <Fragment>
               <Greeting name = {"Ravindu"}  />
               <Divider light />
               <Countable/>
               <Testing status="Testing Good"/>
           </Fragment>
 

        )
    }
}

export default HomePage;