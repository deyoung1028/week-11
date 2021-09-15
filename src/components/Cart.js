import { connect } from "react-redux"


function CartList (props) {
     const cart = props.cart
     const cartItems = cart.map((item, index) =>{
        return  <li key = {index}>{item.title}</li>
     })


    return (
           <>
           <h1>Cart List</h1>

           <ul>
               {cartItems}
           </ul>

           </>
    )
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStatetoProps)(CartList)