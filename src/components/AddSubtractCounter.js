import { connect } from 'react-redux'
import { useState } from 'react'

function AddSubtractCounter(props) {
    const [counter, setCounter] = useState('')

    const handleOnChange = (e) => {
        const count = e.target.value
        setCounter(count)
    }
    const handleAddCounter = () => {
        props.onAddCounter(parseInt(counter))
        setCounter('')
    }
    const handleSubtractCounter = () => {
        props.onSubtractCounter(parseInt(counter))
        setCounter('')
    }

    return (
        <>
        <h2 className = "addSubtractTitle">Add Subtract Counter</h2>
        <input className = 'inputBox' type = 'text' value = {counter} onChange = {handleOnChange}/>
        <button className="addSubtractBtns" onClick={handleAddCounter}>Add</button>
                <button className="addSubtractBtns" onClick={handleSubtractCounter}>Subtract</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCounter: (value) => dispatch({ type: 'ON_ADD_COUNTER', payload: value }),
        onSubtractCounter: (value) => dispatch({ type: 'ON_SUBTRACT_COUNTER', payload: value })
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter)