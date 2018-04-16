import { combineForms } from 'react-redux-form';

export default combineForms({
    login: {
        email:    'sasha.melnik@gmail.com',
        password: '',
        remember: false,
    },
    signup: {
        firstName: 'sasha',
        lastName:  'melnyk',
        email:     'sasha.melnik@gmail.com',
        password:  '11111111',
        invite:    'f50h1UtrtdgS',
    },
    user: {
        profile: {
            avatar:    '',
            firstName: '',
            lastName:  '',
        },
        password: {
            oldPassword: '',
            newPassword: '',
        }
    },
}, 'forms');
