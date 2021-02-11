import React, { Component } from "react";
import { Card, Typography, Grid, Box } from '@material-ui/core';

class ObjectCard extends Component {
    createVisual() {
        let shape = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                shape.push(<Grid item xs={3}>
                    <div style={{ backgroundColor: this.props.data.shape[i][j] ? `#${this.props.data.color}` : "", width: "8px", height: "8px" }}></div>
                </Grid>);
            }
        }
        return shape;
    }

    render() {
        const { classes } = this.props;
        return <Card key={this.props.data.id} onClick={this.props.selectCard}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Typography variant="h5">{this.props.data.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        {this.createVisual()}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">L: {this.props.data.size[0]}m</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">H: {this.props.data.size[1]}m</Typography>
                </Grid>
            </Grid>
        </Card>
    }
}

export default ObjectCard;