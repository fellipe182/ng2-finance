import { ActionReducer } from '@ngrx/store';
import { InfoInitialState, InfoStateInterface, InfoStateKeys } from './info-state';
import { InfoActions } from './info-actions';
import { PayloadAction } from '../../../../shared/core/state/api-state';

const initialState: InfoStateInterface = new InfoInitialState() as InfoStateInterface;

export const infoReducer: ActionReducer<InfoStateInterface> =
  (state: InfoStateInterface = initialState, {payload, type}: PayloadAction) => {
    switch (type) {
      case InfoActions.FETCH_FULFILLED:
        return state.set(InfoStateKeys.Data, payload);
      case InfoActions.FETCH_LOADER:
        return state.set(InfoStateKeys.Loader, payload);
      case InfoActions.FETCH_ERROR:
        return state.set(InfoStateKeys.Error, payload);
      default:
        return state;
    }
  };
