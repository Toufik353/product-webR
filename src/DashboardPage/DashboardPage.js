import React from 'react'
import classes from "./DashboardPage.module.css"
import Line1 from "../Charts/Line"
import HorizontalBar1 from "../Charts/HorizontalBar"
import Pie1 from "../Charts/Pie";
import NotificationListPage from '../NotificationListPage/NotificationListPage'
import OrderList from "../OrderList/OrderList"
// import { HorizontalBar } from 'react-chartjs-2'
// omport {HorizontalBar1} from "." 

 function DashboardPage() {
    
    //  console.log(data)

// syntax for BAR table
//      const data1= {
//         // labels: this.state.months,
//         labels:Object.keys(data.dasbhoardPage.latestHits.months),
//         datasets: [
//           {
        //     label: "#of Hits",
        //     data: Object.values(data.dasbhoardPage.latestHits.months),
        //     fill: true,
        //     backgroundColor:      [ 
        //      '#4ED6B8',
        //      '#3889FC',
        //     '#A8D582',
        //     '#D7D768',
        //     '#9D66CC',
        //     '#F7604D',
        //    '#DB9C3F'],
        //     borderColor: "rgb(247,96,77)",
        //     barThickness: 3,
            
        //   }
          
         
//         ],
//       };
//       const options= {
//         legend: {
//              labels: {
//                 months:data.dasbhoardPage.latestHits.months,
//                   fontColor: 'white',
//                   fontSize: 14
//                  }
//               },
//         title: {
//             display: true,
//             fontColor: '#fff',
//             text: 'Hits',
//             position: "left",
//             fontSize: 16,
            
//         }     ,
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true,
//                     fontColor: '#fff',
//                     fontSize: 8,
                   
            
//                 },
//             }],
//           xAxes: [{
//                 ticks: {
//                     beginAtZero:true,

//                     fontColor: '#fff',
//                     fontSize: 12,
//                     maxBarThickness: 5,
//                     categoryPercentage	:0.1                
                    
//                 },
//             }]
           
//         } 
      
      
    return (
        <div className={classes.DashboardPage}>
            {/* <div className={classes.Wrapper}> */}
            <div className={classes.FirstRowBoxes}>
                
                <div className={classes.FirstBox}>
                {/* <Line data={data1} options={options}/> */}
                <Line1/>
                </div>
                <div className={classes.SecondBox}> 
                <HorizontalBar1/>
                </div>
            </div>
            <div className={classes.SecondRowBox}>
                <div className={classes.ThirdBox}>
                <Pie1/>
                </div>
                 <div className={classes.FourthBox}>
                    <NotificationListPage/> 
                </div> 

            </div>

            <div className={classes.ThirdRowBox}>
             <OrderList/>
            </div>
            
            
            
        </div>
    )

        }

export default DashboardPage;