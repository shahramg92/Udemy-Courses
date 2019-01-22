import * as actionTypes from './actionTypes';

export const deletePost = (id) => {
    return {
        type: actionTypes.DElETE_POST,
        id
    }
};