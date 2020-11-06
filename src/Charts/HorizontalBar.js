import React from "react";
import {HorizontalBar} from "react-chartjs-2";

class HorizontalBar1 extends React.Component{
    



    render(){
        const data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"))
        const data1 = {
            labels: data.dasbhoardPage.latestHits.months,
            datasets: [
              {
                label: "Featured",
                data: Object.values(data.dasbhoardPage.performance),
                fill: true,
                backgroundColor:      [ 
                 '#4ED6B8',
                 '#3889FC',
                '#A8D582',
                '#D7D768',
                '#9D66CC',
                '#F7604D',
               '#DB9C3F'],
                borderColor: "rgb(247,96,77)",
                barThickness: 3,
                
              }
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
                                <HorizontalBar data={data1} options={options}/>

            </div>
        )
    }
}



export default HorizontalBar1;



