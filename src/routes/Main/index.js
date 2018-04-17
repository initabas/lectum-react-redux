import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch } from 'react-router';
import { hot } from 'react-hot-loader';

import { book } from '../book';
import { Catcher, Loading } from 'components';
import { authActions } from 'bus/auth/actions';
import { uiActions } from 'bus/ui/actions';
import { watchConnection, watchPosts } from 'bus/socket/actions';
import { join } from 'init/socket';
import Private from '../Private';
import Public from '../Public';

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.get('authenticated'),
        initialized:   state.ui.get('initialized'),
    };
};

const mapDispatchToProps = {
    authenticate:  authActions.authenticate,
    initialize:     uiActions.initialize,
    watchConnection,
    watchPosts,
};


// const mergeProps = (mapStateResult, mapDispatchResult, props) => {
    
//     return {
//         ...mapStateResult,
//         ...props,
//         ...mapDispatchResult
//     }
// }

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@hot(module)
export default class Routes extends Component {
    componentDidMount () {
        const { 
            initialize,
            authenticated,
            authenticate,
            history,
            location,
            // watchConnection,
        } = this.props;

        join();
        this.props.watchConnection();

        const token = localStorage.getItem('@@token');

        token ? authenticate(token) : initialize();

        if (authenticated) {
            if (location.pathname === book.profile) {
                return null;
            }

            history.replace(book.feed);
        }
    }

    componentWillReceiveProps ({ location, authenticated, history }) {
        if (authenticated) {
            if (location.pathname === book.login) {
                history.replace(book.feed);
            }
        }
    }

    render () {
        const { initialized, authenticated } = this.props;

        return initialized ? (
            <Catcher>
                <Switch>
                    { !authenticated && <Public /> }
                    <Private watchPosts = { this.props.watchPosts } />
                </Switch> 
            </Catcher>
        ) : (
            <Loading />
        );
    }
}
