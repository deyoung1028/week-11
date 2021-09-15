
import * as actionTypes from '../store/actions/actionTypes'
const initialState = {
    cart:[]
}


const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.ADD_BOOK:
            return {
                ...state,
                cart:state.cart.concat(action.payload)
            }
            default: 
            return state
    }
}

export default reducer