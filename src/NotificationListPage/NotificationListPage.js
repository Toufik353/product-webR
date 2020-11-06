import React, { Component } from 'react'
import classes from "./NotificationListPage.module.css"
export default class NotificationListPage extends Component {

    render() {
        const data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"))





                   var notDataFromArray=data.dasbhoardPage.notifications.map(item=>{
                       return(
                        <div className={classes.CardWrap}>
                        <div className={classes.Card}>
                            <div>
                            <img className={classes.Thumbnail}src={data.dasbhoardPage.notifications[0].pic} alt="title"/>
        
                            </div>
                            <div>
                            <p className={classes.Message}>{data.dasbhoardPage.notifications[0].message}</p>
                            <p className={classes.Time}>{data.dasbhoardPage.notifications[0].time}</p>
                            </div>
                        
        
                        </div>
                        </div>
                       )
                   })




        return (
            <div className={classes.NotificationListPage}>
               {notDataFromArray} 
               
            </div>
        )
    }
}
