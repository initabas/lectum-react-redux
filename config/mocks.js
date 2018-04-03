const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const userProfile = {
    id:        '123',
    groupID:   'TEST_GROUP_ID',
    token,
    created:   0,
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    email:     'test@email.com',
};
const error = new Error(errorMessage);
const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};
const responseDataFail = {
    message: errorMessage,
};

export const fetchResponseSuccess = {
    status: 200,
    json:   () => Promise.resolve(responseData),
};
export const fetchResponseFail = {
    status: 401,
    json:   () => Promise.resolve(responseDataFail),
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

global.__ = {
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail,
    credentials,
};

global.localStorage = new class LocalStorage {
    constructor () {
        this.storage = {};
    }

    clear () {
        this.storage = {};
    }

    getItem = jest.fn((key) => {
        return this.storage[key] || null;
    });

    setItem = jest.fn((key, value) => {
        this.storage[key] = JSON.stringify(value);
    });

    removeItem (key) {
        delete this.storage[key];
    }

    get length () {
        return Object.keys(this.storage).length;
    }
}();
