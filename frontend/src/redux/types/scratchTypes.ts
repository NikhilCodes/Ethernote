export interface ScratchStateType {
  isLoading: boolean;
  value: string;
  error: any;
}

export enum ScratchActionType {
  FETCH_REQUEST='scratch.fetch.request',
  FETCH_SUCCESS='scratch.fetch.success',
  FETCH_ERROR='scratch.fetch.error',
}
