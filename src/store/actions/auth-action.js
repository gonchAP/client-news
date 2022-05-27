import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const addUserAction = createAction(actionTypes.SIGN_UP_USER);

export const signUpSuccessAction = createAction(actionTypes.SIGN_UP_SUCCESS);

export const signUpFailAction = createAction(actionTypes.SIGN_UP_FAIL);
