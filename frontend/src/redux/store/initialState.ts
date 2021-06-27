import { AuthType } from '../types/authTypes';

const initialState = {
  auth: {
    status: AuthType.UNAUTHENTICATED,
    isLoading: true,
    user: {},
  },
  scratch: {
    value: '',
    isLoading: false,
    error: null,
  },
};

export default initialState;
