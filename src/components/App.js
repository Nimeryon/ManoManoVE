import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
// Material UI
import { CssBaseline } from "@material-ui/core";

const App = () => {

	return <Router>
		<CssBaseline />
		<Switch>
			<Route path="/" exact component={() => <h1>Site</h1>} />
			<Route path="/createObject" exact component={() => <h1>createObject</h1>} />
			<Route path="/visual" exact component={() => <h1>Visual</h1>} />
		</Switch>
	</Router>;
}

export default App;