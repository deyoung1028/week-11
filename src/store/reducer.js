
<<<<<<< HEAD
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
=======
const initialState = {
    counter:0
}

const reducer = (state = initialState, action) => {
     
    if(action.type == 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }else if(action.type == 'DECREMENT') {
        return {
            ...state,
            counter: state.counter -1
        }
    }else if(action.type == 'ON_SUBTRACT_COUNTER') {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }else if(action.type == 'ON_ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }

    return state
>>>>>>> 083dd22f3b1b28981be90b8c0d155333372d44b5
}

export default reducer