import React, { Component } from 'react'
import classes from "./productPage.module.css"


class productPage extends Component {
state={
    currentRow:-1,
    productData:localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData")).productsPage.products,
 clickedArr:[] ,
 isChecked:false,
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

handleChecked=(e,rowId)=>{
let updatedArray=this.state.clickedArr; //[][1][1,2,4]
// updatedArray.map((item,index)=>{
    
     
// })
if(e.target.checked===true){ //*
    // alert(e.target.checked)
    this.setState({isChecked:true})
    updatedArray.push(rowId)
 this.setState({clickedArr:updatedArray})//[1,2,4]
console.log('selected id->'+this.state.clickedArr)
}else{
    this.setState({isChecked:false})
   let newArr=updatedArray.filter((item,index)=>{
        return (index!==rowId)////{[1,2]
    })
    console.log("newArray"+newArr)
    this.setState({clickedArr:newArr})//[1,2]
   
    // console.log('deletedarr->'+newArr)
    console.log('deletedarr->'+this.state.clickedArr)
}
}

handleDeletAll=()=>{
    let updatedproductArr=this.state.productData.filter((item,index)=>{
       return !this.state.clickedArr.includes(index)
    })
    let emptyArr=this.state.clickedArr.splice(0,this.state.clickedArr.length-1);

    this.setState({clickedArr:emptyArr,productData:updatedproductArr});
    console.log(this.state.clickedArr)
  
  
}



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
               <td><input type="checkbox"  onChange={(e)=>this.handleChecked(e,index)} /></td>
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