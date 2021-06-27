import { ScratchActionType, ScratchStateType } from '../types/scratchTypes';
import initialState from '../store/initialState';

export const scratchReducer = (state: ScratchStateType = initialState.scratch, action: { type: ScratchActionType, payload: { value: string } }): ScratchStateType => {
  switch (action.type) {
    case ScratchActionType.FETCH_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ScratchActionType.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        value: action.payload.value,
      };
    case ScratchActionType.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.value,
      }
    default:
      return state;
  }
};
