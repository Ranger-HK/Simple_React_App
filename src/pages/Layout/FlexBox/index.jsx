
import { withStyles } from '@mui/styles';
import { Component } from 'react';
import { styleSheet } from './style';

class FlexBoxLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title_container}> </div>
                <div className={classes.form_container}></div>
                <div className={classes.btn_container}></div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(FlexBoxLayout)