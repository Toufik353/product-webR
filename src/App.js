import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
// import Topbar from "./Topbar/Topbar"
import Topbar from './Topbar/Topbar';
import LoginPage from "./LoginPage/LoginPage"
import DashboardPage from "./DashboardPage/DashboardPage";
import AccountPage from "./AccountPage/AccountPage"
import {Switch,BrowserRouter,Link,Route} from "react-router-dom";
import axios from "axios";




class App extends React.Component {
  state={
    appData:{}

  }



  componentDidMount() {
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then(response=>{
      // console.log(response.data)
      this.setState({appData:{...response.data}})
      localStorage.setItem("appData",JSON.stringify(this.state.appData))
    })
    .catch(err=>{
      console.log("err")
    })
  }
  
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Topbar/>
     <Switch>
     
    
     <Route exact path="/" component={LoginPage}/>
     <Route path="/dashboard/" component={DashboardPage}/>
     <Route path="/AccountPage/" component={AccountPage}/>
     </Switch>
     
      </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
