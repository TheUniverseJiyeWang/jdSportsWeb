import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchPkg = ( term : string ) => {
    return async ( dispatch: Dispatch<Action> ) => {
        dispatch({
            type : ActionType.SEARCH_PKG,
            // payload : null,
        });

        try {
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params: {
                        text: term,
                    },
                }
            );

            const pkgs = data.objects.map( ( result : any ) => {
                return result.package;
            }); 

            dispatch({
                type: ActionType.SEARCH_SUCCESS,
                payload: pkgs,
            });

        } catch (error:any) {

            dispatch({
                type: ActionType.SEARCH_ERR,
                payload: error.message,
            });

        }

    };
};