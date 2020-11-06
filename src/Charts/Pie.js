import React from "react";
import {Pie} from "react-chartjs-2";

class Pie1 extends React.Component{
    



    render(){
        const data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"))
        const data1 = {
            labels: Object.entries(data.dasbhoardPage.storage),
            datasets: [
              {
                // label:"available",
                data: Object.values(data.dasbhoardPage.storage),
                // background
                // fill: true,
                backgroundColor:['#A8D582','#4ED6B8','#F7604D'],
                // borderColor: "rgb(71,183,183)"
              },
              
            ],
          
          };
          
          
         const options= {
          title:{
            display:true,
            text:'system Information',
            fontSize:20
          },
          legend:{
            display:true,
            position:'top'
          },
          legend: {
            labels: {
                 fontColor: 'white',
                 fontSize: 14
                }
             },
       title: {
           display: true,
           fontColor: '#fff',
          //  text: 'Hits',
           position: "left",
           fontSize: 16
       }     ,
        }
        return(
            <div>
                                <Pie data={data1} options={options} />

            </div>
        )
        }
}



export default Pie1;



