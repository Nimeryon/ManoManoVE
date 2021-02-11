import React, { Component } from "react";
import { TextField, OutlinedInput, InputLabel, Grid, Box } from '@material-ui/core';

class InputForm extends Component {
    render() {
        return <Grid item xs={this.props.minWidth || this.props.width} sm={this.props.width}>
            <Box display="flex" width="100%" justifyContent="center">
                <Box width="5%" display="flex" justifyContent="center" alignItems="center">
                    {this.props.icon}
                </Box>
                <Box width="90%" display="flex" justifyContent="center" alignItems="center">
                    <TextField error={this.props.error} helperText={this.props.error ? this.props.helper : ""} onChange={this.props.onChange} type={this.props.type || "text"} label={this.props.emptyText} fullWidth={true} autoComplete={this.props.auto || false} id={this.props.id || ""}></TextField>
                </Box>
            </Box>
        </Grid >
    }
}

export default InputForm;