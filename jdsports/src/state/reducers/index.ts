import { combineReducers } from "redux";
import pkgReducers from './pkgReducers';

const reducers = combineReducers({
    pkgs : pkgReducers, 
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;