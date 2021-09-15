import * as actionTypes from '../actions/actionTypes'


export const saveCart = (book) => {
    return{
        type:actionTypes.ADD_BOOK,
        payload:book
    }
}