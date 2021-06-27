import { Dispatch } from 'redux';
import { getTextToScratchPad } from '../../apis/scratch.api';
import { ScratchActionType } from '../types/scratchTypes';

export const loadScratchPad = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ScratchActionType.FETCH_REQUEST,
    });
    try {
      const { data } = await getTextToScratchPad();
      return dispatch({
        type: ScratchActionType.FETCH_SUCCESS,
        payload: {
          value: data.value,
        },
      });
    } catch (e) {
      return dispatch({
        type: ScratchActionType.FETCH_ERROR,
        payload: {
          value: e.message,
        },
      });

    }
  };
};
