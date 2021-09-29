import { ActionType } from '../action-types';

interface SearchPkgAction {
    type: ActionType.SEARCH_PKG;
}

interface SearchSuccessAction {
    type: ActionType.SEARCH_SUCCESS;
    payload: string[];
}

interface SearchErrAction {
    type: ActionType.SEARCH_ERR;
    payload: string;
}

export type Action = SearchPkgAction | SearchSuccessAction | SearchErrAction