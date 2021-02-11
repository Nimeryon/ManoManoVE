import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import CreateObject from "./CreateObject";
import VisualView from "./VisualView";
// Material UI
import { CssBaseline } from "@material-ui/core";

const App = () => {
	return <Router>
		<CssBaseline />
		<Switch>
			<Route path="/" exact component={() => <VisualView />} />
			<Route path="/createObject" exact component={() => <CreateObject />} />
		</Switch>
	</Router>;
}

export default App;