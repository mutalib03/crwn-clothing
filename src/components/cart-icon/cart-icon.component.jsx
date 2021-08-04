import React from "react" 
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden}) => (
   <div className = "cart-icon">
  
  <ShoppingIcon className = "shopping-icon" onClick= {toggleCartHidden} />
  <span className= "item-count">0</span>

   </div> 

)

const MapDispatchToProps = (dispatch) =>({
    
    toggleCartHidden: () => (dispatch(toggleCartHidden()))

})

export default connect(null, MapDispatchToProps) (CartIcon)