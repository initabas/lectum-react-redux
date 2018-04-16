// Core
import React, { Component } from 'react';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    LoginForm
} from 'components';

import { authActions } from 'bus/auth/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        authFetching: state.ui.get('authFetching'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ login: authActions.login }, dispatch)
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends Component {
    render () {
        const { authFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner spin = { authFetching }/>
                <Navigation />
                <Catcher>
                    <LoginForm { ...this.props }/>
                </Catcher>
            </>
        );
    }
}
