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

// TEST immutable begin
// import { Map, List, fromJS } from 'immutable';

// const map1 = Map({
//     name: 'joe',
// });

// const map2 = map1.set('age', 31).set('name', 'joe2');
// const map3 = map2.set('age', 31);
// const map4 = map1.setIn(
//     ['frends', 'evil'],
//     Map({
//         name: 'joe',
//     })
// );

// const list = fromJS([
//     {
//         age:         6000,
//         name:        'Gendalf',
//         description: {
//             city: 'Shire',
//         },
//     },
//     {
//         age:         7000,
//         name:        'Saruman',
//         description: {
//             city: 'Icengard',
//         },
//     }
// ]);

// const list2 = list.map((character) =>
//     character.update(
//         (character) =>
//             character.get('name') === 'Gendalf'
//                 ? character.setIn(['description', 'city'], 'New York')
//                 : character
//     )
// );

// console.log(list2);
// console.log(map1);
// console.log(map2);
// console.log(map1 === map2);
// console.log(map2 === map3);
// console.log(map4);

// TEST immutable END

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
