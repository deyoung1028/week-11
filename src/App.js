import './App.css';
import {connect} from 'react-redux'
import Counter from './components/Counter'
import IncdecCounter from './components/IncrementDecrementCounter'
import AddSubtractCounter from './components/AddSubtractCounter';


function App(props) {
  return (
    <>
      <h1 className = "header">APP</h1>
      <Counter/>
      <AddSubtractCounter />
      <IncdecCounter/>

    </>
  )

}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}

export default connect(mapStateToProps)(App)
