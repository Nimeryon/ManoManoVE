import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import CreateObject from "./CreateObject";
// Material UI
import { CssBaseline } from "@material-ui/core";

const App = () => {
	return <Router>
		<CssBaseline />
		<Switch>
			<Route path="/" exact component={() => <h1>Site</h1>} />
			<Route path="/createObject" exact component={() => <CreateObject />} />
		</Switch>
	</Router>;
}

export default App;