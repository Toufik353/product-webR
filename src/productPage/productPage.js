import React, { Component } from 'react'
import classes from "./productPage.module.css"


class productPage extends Component {
state={
    currentRow:-1,
    productData:localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData")).productsPage.products,
 clickedArr:[] ,
 isChecked:true,
 CurrentId:-1,
           

}

//  data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"));


// handleDelet=(rowId)=>{
//     this.setState({currentRow:rowId})

//    let productD=this.state.productData.filter((item,index)=>{
        
//         return this.state.currentRow!==index;
//     })
// let data=JSON.parse(localStorage.getItem("appData"));
// data.productsPage.products=productD;
//     localStorage.setItem("appData",JSON.stringify(data))
  
//     this.setState({productData:productD})


// }
// handleDelet = (rowId)=>{
//     this.setState({currentRow:rowId})
//     // let productD = this.state.ProductList
//     let filterdata = this.state.productData.filter((item,index)=>rowId !== index)
//     let acctdata = JSON.parse(localStorage.getItem('appData'));
//     acctdata['productsPage']['products'] = filterdata
//     localStorage.setItem('appData', JSON.stringify(acctdata));
//   this.setState({
//     productData:filterdata
//   })
// }


handleDelet=(rowId)=>{
    this.setState({currentRow:rowId})
   var filterdata= this.state.productData.filter((item,index)=>{
       return((this.state.currentRow!==index))
       
    })
    let acctdata = JSON.parse(localStorage.getItem('appData'));
       acctdata['productsPage']['products'] = filterdata
       localStorage.setItem('appData', JSON.stringify(acctdata));
       this.setState({
            productData:filterdata
          })
}


// handleCheckedBox=(sId)=>{
//     //   this.setState({clickedArr:this.clickedArr.push(sId)});
//     let clicked=this.state.clickedArr;
//     clicked.push(sId);
//     console.log(clicked)
//     this.setState({clickedArr:clicked});
//           let newArr=localStorage.getItem("checkList")===null?[]:JSON.parse(localStorage.getItem("checkList"));

  
//     let newlocal=newArr.map(item=>{
//         if(item.id===sId){
//             this.setState({isChecked:!this.state.isChecked})
//             item.checked=this.state.isChecked;
//         }
//         else{
//             var clickedData={
//                         id:sId,
//                         checked:this.state.isChecked
//                     }
//                     newArr.push(clickedData)
//                     localStorage.setItem("checkList",JSON.stringify(newArr))
//         }
//     })
    //------------------------------
    // handleCheckedBox=(sId)=>{
    //     // alert("Bookmark clicked")
    //     let clicked=this.state.clickedArr;
    //     clicked.push(sId);
    //     console.log(clicked)
    //     this.setState({clickedArr:clicked});

    //     var VideoArr=localStorage.getItem("checkList")===null?[]:JSON.parse(localStorage.getItem("checkList"));
    //     var data={
    //       id:sId,
    //       isChecked:false
    //     }
    //     var isExist=false;

    //     const updatedArr= VideoArr.map(item=>{
    //       // return( 
    //         if(item.id===sId){
    //         item.isChecked=!item.isChecked;
    //         isExist=true;
    //          this.setState({isChecked:item.isChecked})

    //        }
    //        return item;
    //      })
    //      if(!isExist){
    //       updatedArr.push(data)
    //       this.setState({isChecked:false})

    //      }
    //     // var updatedArr=[data]
    //     localStorage.setItem("checkList",JSON.stringify(updatedArr))
    //   }

    //   handleDeletAll=()=>{
    //       var datafromLoc=JSON.parse(localStorage.getItem("checkList"))
    //      let nArr=[];
    //      nArr= datafromLoc.map((item,index)=>{
    //              if(item.isChecked===true){
    //                  item.isChecked=false;
    //                  return item.id;
    //              }
                 
    //       })
    //     //   console.log(nArr);

    //        let deleteSelectedItems= this.state.productData.filter((item,index)=>{
    //          return !nArr.includes(index); 


    //         })
    //         // console.log(nArr.slice(-1,nArr.length))
    //         for(var j=nArr.length;j>=1;j--){
    //             nArr.pop()
    //         }
    //         console.log(nArr)
    //         console.log(deleteSelectedItems);

    //         this.setState({productData:deleteSelectedItems})
    //         datafromLoc=[];
    //         localStorage.setItem("checkList",JSON.stringify(datafromLoc))

    //   }
    
//     var clickedData={
//         id:sId,
//         checked:this.state.isChecked
//     }
// newArr.push(clickedData) 
//    localStorage.setItem("checkList",JSON.stringify(newArr))
        // if(i===sId){[0,1]
        //   clicked=this.state.clickedArr.filter((item,index)=>{
        //      return sId!==index
        //   })
        //   this.setState({clickedArr:clicked})
        // }
        // else{
        //     clicked.push(sId);
        //     console.log(clicked)
        //     this.setState({clickedArr:clicked})
        // }
    
    //   this.clickedArr.filter()
        // console.log(this.state.clickedArr)
    
    



// }
// class Checkbox extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isChecked: true,
//       };
//     }
//     toggleChange = () => {
//       this.setState({
//         isChecked: !this.state.isChecked,
//       });
//     }
//     render() {
//       return (
//         <label>
//           <input type="checkbox"
//             checked={this.state.isChecked}
//             onChange={this.toggleChange}
//           />
//           Check Me!
//         </label>
//       );
//     }
//   }



    render() {
    //   const  data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"));

    //     data.productsPage.products=this.state.productData;
    //     localStorage.setItem("appData",JSON.stringify(data))
console.log(this.state.productData)
        //  console.log(data)
         
        return (
            <div className={classes.productPage}>
                <div className={classes.leftSection}>
                    <table className={classes.wrapper}>
                        <tr>
                            <th></th>
                            <th>PRODUCT NAME</th>
                            <th>UNIT SOLD</th>
                            <th>IN STOCK</th>
                            <th>EXPIRE DATE</th>
                            <th></th>
                        </tr>

                       {this.state.productData.map((item,index)=>{
            return(
               <tr key={index}>
               <td><input onClick={()=>{this.handleCheckedBox(index)}} type="checkbox" checked={false} /></td>
               <td>{item.category}</td>
               <td>{item.unitSold}</td>
               <td>{item.stock}</td>
               <td>{item.expireDate}</td>
               <td><i onClick={()=>{this.handleDelet(index)}} class="fas fa-trash-alt"></i></td>
           </tr>

            )
        })}
                   
                        
                    </table>
                    <button onClick={this.handleDeletAll}>Delet selected items</button>
                </div>

                <div className={classes.rightSection}>

                </div>
                
            </div>
        )
    }
}

export default productPage;