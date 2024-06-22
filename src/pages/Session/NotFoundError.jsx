import { withStyles } from "@mui/styles";
import { Component } from 'react';
import { Button } from "@mui/material";
import not_found from '../../assets/img/not_found.jpg';
import {Link} from 'react-router-dom';
import { styleSheets } from '../Session/styles';



// const stylesheet = () => ({

//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },

//     img_container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         maxWidth: '10px'
//     }
// })


class NotFound extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.img_container}>
                    <img src={not_found} alt="" />
                </div>
                <Link to="/">
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "Green" }}
                    >Go To Home</Button>
                </Link>
            </div>

        )
    }
}

export default withStyles(styleSheets)(NotFound);
