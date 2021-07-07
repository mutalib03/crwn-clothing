import React from "react"
import { auth, signInWithGoogle} from "../../firebase/firebase.utils"
import "./sign-in.styles.scss";
import FormInput  from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
   constructor(props) {
super(props)
console.log(props)
  
this.state = {
    email: '',
    password: ''
}

}

handleSumbit = async event => {
   event.preventDefault();

   const {email, password} = this.state
       try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})

       } catch(error) {
         console.log(error)
       }
 
} 

handleChange = event => {
    const { value, name} = event.target;
    console.log(event.target)
    this.setState({[name] : value})
}

render(){
  return (
    <div className="sign-in">
      <h2>i already have an account</h2>
      <span> sign in with your email and password</span>
      <form onSubmit={this.handleSumbit}>
        <FormInput
          type="email"
          name="email"
          handleChange={this.handleChange}
          value={this.state.email}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={this.state.password}
          handleChange={this.handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
}

export default SignIn