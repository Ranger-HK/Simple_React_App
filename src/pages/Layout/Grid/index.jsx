
import { Typography } from "@mui/material";
import React, { Component, Fragment } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';


class GridLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top100Films: [

                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 },
            ]
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <Fragment>

                <Typography variant="h4">
                    Customer Manage
                </Typography>

                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                        <TextField id="outlined-basic " placeHolder="Name" label="Customer name" variant="outlined" size="small" style={{width:'100%'}} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="fav movie" />}
                            getOptionLabel={
                                (option) => option.label

                            }
                            onChange={(e, value) => {
                                console.log(value.label + " " + value.year);
                            }}
                            size="small"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}   >
                        <TextField id="outlined-basic" placeholder="NIC" label="NIC" variant="outlined" size="small" style={{width:'100%'}} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Address" label="Address" variant="outlined" size="small" style={{width:'100%'}}/>
                    </Grid>
                </Grid>
            </Fragment>

        )
    }
}

export default(GridLayout)

