import { AuthActionType } from '../types/authTypes';
import { getAuthStatus } from '../../apis/auth.api';
import { Dispatch } from 'redux';
import { getSelfUser } from '../../apis/users.api';

export const authenticateUser = () => {
  return async (dispatch: Dispatch) => {
    await getSelfUser().then((user) => {
      return dispatch({
        type: AuthActionType.AUTHENTICATE,
        payload: {
          user,
        },
      });
    });
  };
};

export const loadAuth = () => {
  return async (dispatch: Dispatch) => {

    getAuthStatus().then(async (response) => {
      const { authStatus } = response.data;
      const user = authStatus ? await getSelfUser() : {};
      return dispatch({
        type: authStatus ? AuthActionType.AUTHENTICATE : AuthActionType.LOGOUT,
        payload: {
          user,
        },
      });
    });
  };
};
