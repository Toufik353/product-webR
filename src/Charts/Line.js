import React from "react";
import {Line} from "react-chartjs-2";

class Line1 extends React.Component{
    



    render(){
        const data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"))
        const data1 = {
            labels: Object.keys(data.dasbhoardPage.latestHits.months),
            datasets: [
              {
                label: "Featured",
                data: data.dasbhoardPage.latestHits.featured,
                fill: true,
                backgroundColor: "rgba(67,92,112,0.1)",
                borderColor: "rgb(71,183,183)"
              },
              {
                label: "Latest",
                data: data.dasbhoardPage.latestHits.latest,
                fill: true,
                backgroundColor: "rgba(67,92,112,0.1)",
                borderColor: "rgb(233,90,121)"
              },
              {
                label: "Popular",
                data: data.dasbhoardPage.latestHits.popular,
                fill: true,
                backgroundColor: "rgba(67,92,112,0.1)",
                borderColor: "rgb(137,92,229)"
              },
            ],
          };
          const options= {
            legend: {
                 labels: {
                      fontColor: 'white',
                      fontSize: 14
                     }
                  },
            title: {
                display: true,
                fontColor: '#fff',
                text: 'Hits',
                position: "left",
                fontSize: 16
            }     ,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        fontColor: '#fff',
                        fontSize: 8,
                       
                
                    },
                }],
              xAxes: [{
                    ticks: {
                        fontColor: '#fff',
                        fontSize: 12,
                        
                    },
                }]
            } 
          
          }
        return(
            <div>
                                <Line data={data1} options={options}/>

            </div>
        )
    }
}



export default Line1;



