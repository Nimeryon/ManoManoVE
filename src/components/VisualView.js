import React, { Component } from "react";
// Material-ui
import { Paper, Typography, Grid, Box, Container, CircularProgress, Button, Divider, makeStyles } from '@material-ui/core';
import { SwapHorizRounded, SwapVertRounded } from "@material-ui/icons";
// Components
import ObjectCard from "./ObjectCard";
import InputForm from "./InputForm";
// Query
import { useQuery } from "@apollo/client";
import ObjectQuery from "../query/ObjectQuery";

const useStyles = makeStyles({
    m: {
        margin: 8
    },
    mxl: {
        marginTop: 16,
        marginBottom: 16
    },
    m_left: {
        marginLeft: 8
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

class VisualViewComponent extends Component {
    createCards() {
        let cards = [];
        for (let i = 0; i < this.props.data.length; i++) {
            cards.push(<Grid item xs={12}>
                <ObjectCard classes={this.props.classes} data={this.props.data[i]} />
            </Grid >);
        }
        return cards;
    }

    changeCanvasPos() {
        let canvas = document.getElementById("canvas");
        document.getElementById("canvasBox").appendChild(canvas);
    }

    clickHandler() {
        room.resize();
    }

    componentDidMount() {
        this.changeCanvasPos();
    }

    render() {
        const { classes } = this.props;
        return <Container maxWidth="lg">
            <Paper elevation={1} style={{ padding: 8, margin: 8 }}>
                <Box width="100%" display="flex" justifyContent="center">
                    <Grid container spacing={1} classes={classes.m}>
                        <InputForm icon={<SwapHorizRounded />} width={6} emptyText={"longueur"} id={"width"} />
                        <InputForm icon={<SwapVertRounded />} width={6} emptyText={"largeur"} id={"height"} />
                    </Grid>
                    <Button variant="contained" onClick={this.clickHandler} color="primary">Redimensionner</Button>
                </Box>
            </Paper>
            <Box width="100%" display="flex" justifyContent="center">
                <Box id="canvasBox"></Box>
                <Container maxWidth="xs">
                    <Paper elevation={1} classes={classes.p}>
                        <Box width="100%" display="flex" justifyContent="center">
                            <Typography variant="h4">Objets :</Typography>
                        </Box>
                        <Divider className={classes.m} />
                        <Grid container spacing={1}>
                            {this.createCards()}
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </Container>
    }
}

const VisualView = () => {
    const classes = useStyles();
    const { data, loading, error } = useQuery(ObjectQuery, { fetchPolicy: "no-cache" });

    if (loading) return <CircularProgress className={classes.center} />;
    if (error) console.log(error);

    return <VisualViewComponent classes={classes} data={data.objects} />
}

export default VisualView;