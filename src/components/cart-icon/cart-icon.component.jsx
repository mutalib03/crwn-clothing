import React from "react" 
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import { createStructuredSelector } from "reselect";
import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden , itemCount}) => (
  <div className = "cart-icon">
   <ShoppingIcon className = "shopping-icon" onClick= {toggleCartHidden} />
  <span className= "item-count">{itemCount}</span>

   </div> 

)

const MapDispatchToProps = (dispatch) =>({
    
    toggleCartHidden: () => (dispatch(toggleCartHidden()))

})

const mapStateToProps = createStructuredSelector({

itemCount : selectCartItemsCount

}) 



export default connect(mapStateToProps
    , MapDispatchToProps) 
     (CartIcon)