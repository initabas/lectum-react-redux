import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { book } from '../book';

import { Login, Signup } from 'pages';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Login } path = { book.login } />
                <Route exact component = { Signup } path = { book.signup } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
