// Core
import React from 'react';
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux'

// Instruments
import posts from 'bus/posts/reducer';
import ui from 'bus/ui/reducer';
import notifications from 'bus/notifications/reducer';
import auth from 'bus/auth/reducer';
import forms from 'bus/forms/reducer';
import profile from 'bus/profile/reducer';

export const rootReducer = combineReducers({
    auth,
    forms,
    router,
    posts,
    profile,
    ui,
    notifications,
})