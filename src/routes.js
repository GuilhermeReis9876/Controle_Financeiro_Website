import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from './pages/Index';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route path="*" component={() => <h1>Page not Found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;