import React, { Component } from "react";
// Component
import InputForm from "./InputForm";
// Material-ui
import { Paper, Grid, Button, Typography, Divider, Box, Container, Slider, Checkbox, makeStyles } from '@material-ui/core';
import { ColorPicker } from 'material-ui-color';
// Query / Mutation
import { useMutation } from "@apollo/client";
import CreateObjectMutation from "../mutation/CreateObjectMutation";

const useStyles = makeStyles({
    m: {
        margin: 8
    },
    mxl: {
        marginTop: 16,
        marginBottom: 16
    },
    m_left: {
        margin: 8,
        marginLeft: 0
    },
    p: {
        padding: 16,
        margin: 8
    },
    center: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
});

class CreateObjectComponent extends Component {
    state = {
        matrixSize: this.props.size,
        name: "",
        nameError: false,
        width: 1,
        height: 1,
        color: "000000",
        shape: new Array(this.props.size).fill().map(() => new Array(this.props.size).fill(false))
    };

    createShapeButtons() {
        let shape = [];
        let key = 0;
        for (let i = 0; i < this.state.matrixSize; i++) {
            shape.push(new Array(4));
            for (let j = 0; j < this.state.matrixSize; j++) {
                shape[i].push(<Grid key={key} item xs={3}>
                    <Box width="100%" display="flex" justifyContent="center">
                        <Checkbox onChange={(e) => {
                            let shape = this.state.shape;
                            shape[i][j] = e.target.checked;
                            this.setState({ shape: shape });
                        }} checked={this.state.shape[i][j]} />
                    </Box>
                </Grid>);
                key++;
            }
        }

        return shape;
    }

    handleColorChange(e) {
        this.setState({ color: e.hex });
    }

    handleError() {
        this.setState({
            nameError: this.state.name == ""
        });

        return !(this.state.name == "");
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleError()) {
            let shape = [];
            for (let i = 0; i < this.state.matrixSize; i++) {
                shape.push([]);
                for (let j = 0; j < this.state.matrixSize; j++) {
                    shape[i].push(this.state.shape[i][j]);
                }
            }

            let data = {
                name: this.state.name.toLowerCase(),
                size: [this.state.width.toString(), this.state.height.toString()],
                color: this.state.color,
                shape: shape
            }
            console.log(data);
            this.props.onSubmit(data);
        }
    }

    render() {
        const { classes } = this.props;
        return <Container maxWidth="sm">
            <Paper elevation={1} className={classes.p}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h4">Nouvelle objet</Typography>
                    </Box>
                    <Box width="100%" display="flex">
                        <InputForm error={this.state.nameError} helper={"Aucun nom"} onChange={(e) => { this.setState({ name: e.target.value }); }} width={12} emptyText={"Nom"} />
                    </Box>
                    <Box style={{ marginTop: 16 }} width="100%" display="flex">
                        <Typography id="size-width" gutterBottom>Largeur de la pièce</Typography>
                        <Slider
                            aria-labelledby="size-width"
                            defaultValue={this.state.width}
                            value={this.state.width}
                            step={0.1}
                            min={0.1}
                            max={5.0}
                            valueLabelDisplay="auto"
                            onChange={(_, value) => {
                                this.setState({ width: value });
                            }}
                        />
                    </Box>
                    <Box style={{ marginBottom: 16 }} width="100%" display="flex">
                        <Typography id="size-height" gutterBottom>Hauteur de la pièce</Typography>
                        <Slider
                            aria-labelledby="size-height"
                            defaultValue={this.state.height}
                            value={this.state.height}
                            step={0.1}
                            min={0.1}
                            max={5.0}
                            valueLabelDisplay="auto"
                            onChange={(_, value) => {
                                this.setState({ height: value });
                            }}
                        />
                    </Box>
                    <Box width="100%" display="flex" justifyContent="center">
                        <ColorPicker defaultValue={`#${this.state.color}`} value={`#${this.state.color}`} disableAlpha onChange={(e) => {
                            this.handleColorChange(e);
                        }} />
                    </Box>
                    <Paper elevation={3} style={{ padding: 16 }} className={classes.mxl}>
                        <Typography id="shape-text" gutterBottom>Forme de l'objet</Typography>
                        <Grid container spacing={1}>
                            {this.createShapeButtons()}
                        </Grid>
                    </Paper>
                    <Divider className={classes.m} />
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button type="submit" className={classes.m} variant="outlined" color="primary">Créer</Button>
                    </Box>
                </form >
            </Paper >
        </Container >
    }
}

const CreateObject = () => {
    const classes = useStyles();
    const [createObject] = useMutation(CreateObjectMutation);

    const handleMutation = (data) => {
        createObject({ variables: { name: data.name, size: data.size, color: data.color, shape: data.shape } });
        alert(`Votre ${data.name} à été ajouté à la base de donnée`);
        window.location = "/";
    }

    return <CreateObjectComponent onSubmit={handleMutation} classes={classes} size={4} />
}

export default CreateObject;