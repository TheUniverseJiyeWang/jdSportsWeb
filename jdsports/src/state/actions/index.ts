import { ActionType } from '../action-types';

interface SearchPkgAction {
    type: ActionType.SEARCH_PKG
}

interface SearchSuccessAction {
    type: ActionType.SEARCH_SUCCESS
}

interface SearchErrAction {
    type: ActionType.SEARCH_ERR
}

export type Action = SearchPkgAction | SearchSuccessAction | SearchErrAction