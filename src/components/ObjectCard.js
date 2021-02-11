import React, { Component } from "react";
import { Card, Typography, Grid, IconButton, Box } from '@material-ui/core';
import { AddRounded } from "@material-ui/icons";

class ObjectCard extends Component {
    createVisual(i) {
        let shape = [];
        for (let j = 0; j < 4; j++) {
            shape.push(<div style={{ backgroundColor: this.props.data.shape[i][j] ? `#${this.props.data.color}` : "", width: "8px", height: "8px" }}></div>);
        }
        return shape;
    }

    createVisuals() {
        let shape = [];
        for (let i = 0; i < 4; i++) {
            shape.push(<Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                    {this.createVisual(i)}
                </Box>
            </Grid>);
        }
        return shape;
    }

    handleClick() {
        room.furnitures.push(new Furnitures([400, 300], this.props.data.name, this.props.data.size, `#${this.props.data.color}`, this.props.data.shape, room.pixRatio));
    }

    render() {
        const { classes } = this.props;
        return <Card key={this.props.data.id} onClick={this.props.selectCard}>
            <Box width="100%" display="flex" justifyContent="center">
                <Box width="70%">
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Typography variant="h5">{this.props.data.name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container>
                                {this.createVisuals()}
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">L: {this.props.data.size[0]}m</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">H: {this.props.data.size[1]}m</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box width="20%">
                    <IconButton onClick={this.handleClick.bind(this)} color="primary">
                        <AddRounded />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    }
}

export default ObjectCard;