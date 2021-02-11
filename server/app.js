require('dotenv').config();
//Path
const path = require("path");
//Express
const express = require('express');
let app = express();
//Mongoose
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
//Resolvers
const ObjectResolver = require("./resolvers/Object");
const resolvers = { ...ObjectResolver };
//Schemas
const schema = require("./schemas");

const uri = `mongodb+srv://${process.env.MongoUser}:${process.env.MongoPassword}@cluster0.ojl1y.mongodb.net/${process.env.MongoDb}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
console.log(uri);
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));
app.use(
    "/api",
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
    })
);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

mongoose
    .connect(uri, options)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`)
        })
    })
    .catch(error => {
        throw error;
    });