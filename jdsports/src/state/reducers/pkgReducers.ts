import { ActionType } from '../action-types';
import { Action } from '../actions';

interface PkgState {
    loading : boolean,
    err : string | null,
    data : string[],
}

const initialState = {
    loading : false,
    err : null,
    data : [],
}

const reducer = (
    state : PkgState = initialState,
    action : Action
) : PkgState => {
    switch ( action.type ){
        case ActionType.SEARCH_PKG:
            return { loading:true, err:null, data:[] };
        case ActionType.SEARCH_SUCCESS:
            return { loading:false, err:null, data:action.payload };
        case ActionType.SEARCH_ERR:
            return { loading:false, err:action.payload, data:[] };
        default:
            return state;
    }
};

export default reducer;