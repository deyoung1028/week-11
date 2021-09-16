import React from "react";
import { connect } from "react-redux";


function IncdecCounter (props){

    const handleIncrementClick = () => {
        props.onIncrement()
    }
    const handleDecrementClick = ()=> {
        props.onDecrement()
    }
    return (
        <>
        <h2 className = "incdecTitle">INCREMENT DECREMENT Counter</h2>
        <button className = 'incBtn'onClick = {handleIncrementClick}>INCREMENT</button>
        <button className = 'decBtn'onClick = {handleDecrementClick}>DECREMENT</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type:'INCREMENT'}),
        onDecrement: () => dispatch({type:'DECREMENT'})
    }
}

export default connect(null, mapDispatchToProps)(IncdecCounter)