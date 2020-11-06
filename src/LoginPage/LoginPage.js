import React from "react";
import classes from "./LoginPage.module.css";
import {Link} from "react-router-dom";

class LoginPage extends React.Component{


    handleSubmitBtn=(e)=>{
        // e.preventDefault();
        var updatedArr=localStorage.getItem('LoginDetails')===null?[]:JSON.parse(localStorage.getItem('LoginDetails'))
        var data={
             userName:e.target.Username.value,
             pass:e.target.Password.value
        }
console.log(data)
        // let arr=[data]
        updatedArr.push(data)

        localStorage.setItem("LoginDetails",JSON.stringify(updatedArr))
        this.props.history.push('/dashboard/')
    }

    render(){
        return(
            <div>
                
                  <div className={classes.LoginSection}>
              
               <form className={classes.FormSection} onSubmit={this.handleSubmitBtn} >
               <h2 className={classes.LoginName}>Welcome to Dashboard, Login</h2>
                 <div>
                 <label htmlFor="username" className={classes.Label} >Username</label>
               <input className={classes.InputBox}  type="text" name="Username" required />
               <br/>
               
               <br/>
               <label htmlFor="password" className={classes.Label} >Password</label>
               <input className={classes.InputBox} type="password" name="Password" required />
               <br/>
               
               <br/>
               {/* <Link to="/dashboard/"> */}
               <input className={classes.SubmitBox}  type="submit"  name="login" value="Login"  />
               {/* </Link> */}

               {/* <button >Login</button> */}
               <br/>
               
               <div>
               <input className={classes.SubmitBox} type="submit" name="ForgotPassword" value="Forgot Password?" />

               </div>
               </div>
               </form>
               
              
               </div>
              
            </div>
        )
    }
}
 export default LoginPage;