import { connect } from "react-redux";
import * as actionCreators from '../store/creators/actionCreators'

function BookList (props) {

   const bookItems = props.books.map((book, index) => {
        return <li key = {index}>{book.title}
                <button className = 'cartbtn' onClick={() => props.handleAddToCart(book)}>Add To Cart </button>
        </li>
    })

    return (
        <div>
            <h1>Book List</h1>
            <ul>
            {bookItems}
            </ul>
        </div> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart:(book) => dispatch(actionCreators.saveCart(book))
    }
}

export default connect(null, mapDispatchToProps)(BookList) 