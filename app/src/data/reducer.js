import produce from 'immer';

import { makeRequestActionCreators } from '../helpers/actions';

// Action creators

export const lookupData = makeRequestActionCreators('LOOKUP_DATA');

// Reducer

const defaultState = {
  isLoading: false,
  requestFailed: false,
  transactions: [],
};

export const dataReducer = (initialState = defaultState, action) =>
  produce(initialState, draftState => {
    // eslint-disable-next-line
    switch (action.type) {
      case lookupData.request.actionType:
        draftState.isLoading = true;
        break;
      case lookupData.error.actionType:
        draftState.isLoading = false;
        draftState.requestFailed = true;
        break;
      case lookupData.success.actionType:
        draftState.isLoading = false;
        draftState.transactions = action.payload;
        break;
    }
  });
