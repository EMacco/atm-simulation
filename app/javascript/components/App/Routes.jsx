import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Auth from "../layouts/Auth";


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />

            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);

export default Routes;
