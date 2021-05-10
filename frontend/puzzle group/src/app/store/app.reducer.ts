import { ActionReducerMap } from '@ngrx/store';
import * as fromUplatnice from './reducer'

import {AppState} from "./app.state";

export const appReducer: ActionReducerMap<AppState> = {
  uplatnice: fromUplatnice.reducer
};
