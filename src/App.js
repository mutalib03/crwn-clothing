import React from 'react';

import {Switch, Route } from 'react-router-dom';
import { auth ,createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import HomePage from "./pages/homepage/homepage.component"
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user.action"
class App extends React.Component {

unsubscribeFromAuth = null

componentDidMount() {

const {setCurrentUser} = this.props
console.log(this.props)
console.log(setCurrentUser)
this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
  if (userAuth) {
     const userRef =  await createUserProfileDocument(userAuth);
     console.log(userRef)
      
     userRef.onSnapshot(snapShot => {
      
        setCurrentUser({
      
         id: snapShot.id,  
         ...snapShot.data()
       })
     })
     
  } else  setCurrentUser(userAuth)
}) 

}  

componentWillUnmount(){

  this.unsubscribeFromAuth()
}
  render() {
  return (
    <div >
    <Header /> 
     <Switch>
 <Route exact path= '/' component= {HomePage} />
 
 <Route path= '/shop' component= {ShopPage} />
 <Route path= '/signin' component = {SigninAndSignupPage}/>
     </Switch>
         
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  
setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps) (App);
