import React from "react";
import {connect} from 'react-redux'

function Counter(props) {
    
    return (
        <>
        <h1 className = 'displayCounter'>Display Counter</h1>
        <h1>{props.ctr}</h1>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
       ctr: state.counter 
    }
}


export default connect(mapStateToProps)(Counter)