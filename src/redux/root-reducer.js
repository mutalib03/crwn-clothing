import {combineReducers} from "redux";
import shopReducer from "./shop/shop.reducer";
import { persistReducer } from "redux-persist";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
 import directoryReducer from "./directory/directory.reducer";

const presistConfig = {

    key: "root",
    storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers({
    shop : shopReducer,
    user: userReducer,
     cart: CartReducer,
  directory : directoryReducer
})

export default persistReducer(presistConfig, rootReducer)