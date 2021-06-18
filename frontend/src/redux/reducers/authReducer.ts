import { AuthActionType, AuthStateType, AuthType } from '../types/authTypes';
import initialState from '../store/initialState';

export const authReducer = (state: AuthStateType = initialState.auth, action: { type: AuthActionType, payload: { user: object } }) => {
  switch (action.type) {
    case AuthActionType.AUTHENTICATE:
      return {
        ...state,
        isLoading: false,
        status: AuthType.AUTHENTICATED,
        user: { ...action.payload.user },
      };
    case AuthActionType.LOGOUT:
      return {
        ...state,
        isLoading: false,
        status: AuthType.UNAUTHENTICATED,
        user: {},
      };
    default:
      return state;
  }
};
