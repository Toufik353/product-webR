import React, { Component } from 'react'
import classes from "./AccountPage.module.css"
export default class AccountPage extends Component {
    state={
        detailinfo:{},
        role:"",
        username:'',
        password:'',
        email:'',
        profile:'',
        repaswors:'',
        selectedFile:null
    }
 
    imageUpload=(e)=>{
    var imageSize=(Math.round((e.target.files[0].size)/800))
    //  if(imageSize>1){
    //      alert("Flie size cant be more than 1Mb")
         
    //  }else{
        var urlDummy= URL.createObjectURL(e.target.files[0])
        this.setState({profile:urlDummy})
    //  }
    console.log(urlDummy)
    
     }
    //  this.setState({profile:e.target[this.state.role]ProfilePic})
    // console.log(e.target.value)
    // this.setState({profile:e.target.value})
    


    
        // Details of the uploaded file 
componentDidUpdate(prevProps,prevState) {
    console.log(prevState.role);
   
//     if(prevState.role===this.state.role){
        
// } else{
//     this.setState({
//         username:this.state.detailinfo.name,
//         password:this.state.detailinfo.password,
//         email:this.state.detailinfo.email,
//         repaswors:this.state.detailinfo.password,
//         profile:this.state.detailinfo.profilePic
//     }) 
// }
}

             
    // }
        
        
        // shouldComponentUpdate(nextProps,nextState){
        //     if(nextState.role!==this.state.role){
        //         this.setState({
        //             username:this.state.detailinfo.name,
        //             password:this.state.detailinfo.password,
        //             email:this.state.detailinfo.email,
        //             repaswors:this.state.detailinfo.password
        //         })
        //         return true
        //     }
        //     return true;
        // }
  

    handleChange=(e)=>{
        //  console.log(e.target.value)
        let name = e.target.name;
        console.log(e.target.name)
        let value = e.target.value;
        // let formError=this.state.formError;
        switch(name){
            case "password":
            // formError.password=value.length<6 && value.length>0 ? "*minimum 6 characters required":"";

            break;
            case 'username':
            // formError.username=emailRegex.test(value) && value.length>0 ? '':"*invalid password";
            break;
            case 'profilePic':
            // formError.username=emailRegex.test(value) && value.length>0 ? '':"*invalid password";
            break;
            case 'email':
            // formError.username=emailRegex.test(value) && value.length>0 ? '':"*invalid password";
            break;
            case 'Re-enterpassword':
            // formError.username=emailRegex.test(value) && value.length>0 ? '':"*invalid password";
            break;
        }

        this.setState({                       //syntax based on selection
          [name]:value,
          
        })
          
        console.log([name])
    }

    
    render() {
        // console.log(this.state.username)
        // console.log(this.state.email)
        let data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"))
          console.log(data);

                
    //    let enteredDat={
    //     name:this.state.username,
    //     paswd:this.state.password,
    //     email:this.state.password,
    //     profile:this.state.profile,
    //     repaswors:this.state.repaswors,
    // }

    // data.accountsPage[this.state.role]=enteredDat;

    // localStorage.setItem("appData",JSON.stringify(data))
     

          const HandleUpdate=()=>{
            this.setState({
                detailinfo: data.accountsPage[this.state.role]
            })
                   let enteredDat={
        name:this.state.username?this.state.username:this.state.detailinfo.name,
                paswd:this.state.password?this.state.password:this.state.detailinfo.password,
        email:this.state.password,
        profile:this.state.profile,
        repaswors:this.state.repaswors,
    }
    // console.log(this.state.role)
    var curRole=this.state.role
    // if(curRole===this.state.)
    // this.setState({username:enteredDat.name,
    //     password:this.state.detailinfo.password,
    //     email:this.state.detailinfo.email,
    //     repaswors:this.state.detailinfo.password
    
    // })
   
   
        
       
      
    
    data.accountsPage[this.state.role]=enteredDat;
   console.log(data);


    localStorage.setItem("appData",JSON.stringify(data))
           
        //    data.accountsPage[this.state.role]=this.state.detailinfo;
        //    localStorage.setItem("appData",JSON.stringify(data.accountsPage[this.state.role]))
      

}  


          const handleSeletion=(e)=>{
        var accountSel=e.target.value;
            alert('clicked')
            // let roleArr=Object.keys(data.accountsPage);
            // console.log(roleArr);
            // let filterRole=roleArr.filter(item=>{
            //     return e.target.value==item
            // })
         let details=(data.accountsPage[e.target.value])
        //  console.log(details.name)
        this.setState({detailinfo:details,
        role:accountSel});
        console.log(this.state.role)
          }
        return (
            <div className={classes.ProductPage}>
                <div className={classes.MainWrapper}>
                    <div className={classes.ListAccount}>
                      <h3>List of Accounts</h3>
                      <h4>Accounts</h4>
                      <select onChange={handleSeletion} className={classes.Options}>
                          <option >Select Account</option>
                          <option value="Admin">Admin</option>
                         
                          <option value="Editor">Editor</option>
                          <option value="Merchant">Merchant</option>
                          <option value="Customer">Customer</option>
                      </select>
                    </div>


                    <div className={classes.FormPicWrap}>


                     <div className={classes.ProfilePic}>

                       <div >
                        <h1>Change Avatar</h1>
                       </div>

                       <div className={classes.Thumbnail}>
                        <img className={classes.Thumbnail} src={this.state.profile?this.state.profile:this.state.detailinfo.profilePic} alt="qwqwq"/>
                       </div>

                       <div>
                           
                       <input type="file" id="imageFile"  name='imageFile' onChange={this.imageUpload} />

                         {/* <button onClick={this.HandleProfilePic}>Upload New Photo</button> */}
                       </div>

                     </div>


                     <div className={classes.LogInForm}>
                         <div className={classes.FlexDiv}>
                             <div>
                             <label htmlFor="Account Page">Account Name</label>
                         <input onChange={this.handleChange} type="text"  name="username" value={this.state.username?this.state.username:this.state.detailinfo.name}/>
                             </div>
                             <div>
                             <label htmlFor="Account Email">Account Email</label>
                         <input onChange={this.handleChange} type="email"  name="email" value={this.state.detailinfo.email}/>
                             </div>
                         </div>
                         

                         
                         {/* <br/> */}
                         <div className={classes.FlexDiv}>
                             <div>
                             <label htmlFor="password">Password</label>
                              <input onChange={this.handleChange} type="Password"  name="password" value={this.state.detailinfo.password}/>
                             </div>
                             <div>
                             <label htmlFor="re-enter password">Re-enter Password</label>
                             <input  onChange={this.handleChange} type="Password" name="Re-enterpassword" value={this.state.detailinfo.password}/>
                             </div>
                         </div>
                         
                        <div className={classes.FletxDiv}>
                            <div>
                            <label htmlFor="phone">Phone</label>
                         <input onChange={this.handleChange} type="text"  name="phone" value={this.state.detailinfo.phone}/>
                            </div>
                            <div>
                            <button onClick={HandleUpdate}>UPDATE PROFILE</button>

                            </div>
                        </div>
                         
                         {/* <br/> */}
                         
                         {/* <input type="email" name="Accountemail"/> */}
                        <button  className={classes.DeletBtn}>DELETE YOUR ACCOUNT</button>

                     </div>
                    </div>

                </div>
                
            </div>
        )
    }

}