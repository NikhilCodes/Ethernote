import { AuthType } from '../types/authTypes';

const initialState = {
  auth: {
    status: AuthType.UNAUTHENTICATED,
    isLoading: true,
    user: {},
  },
};

export default initialState;
