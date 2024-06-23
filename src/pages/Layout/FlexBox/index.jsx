
import { withStyles } from '@mui/styles';
import { Component } from 'react';
import { styleSheet } from './style';
import { Typography } from '@mui/material';

class FlexBoxLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>

                <div className={classes.title_container}> 
                    <Typography variant='h4'>
                        Title Here
                    </Typography>

                </div>

                <div className={classes.form_container}>
                    <div className={classes.left_form}></div>
                    <div className={classes.right_form}></div>
                </div>

                <div className={classes.btn_container}></div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(FlexBoxLayout)