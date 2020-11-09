import React, { Component } from 'react'
import classes from "./productPage.module.css"


class productPage extends Component {
state={
    currentRow:-1,
    productData:localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData")).productsPage.products
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
handleDelet = (rowId)=>{
    this.setState({currentRow:rowId})
    // let productD = this.state.ProductList
    let filterdata = this.state.productData.filter((item,index)=>index !== rowId)
    let acctdata = JSON.parse(localStorage.getItem('appData'));
    acctdata['productsPage']['products'] = filterdata
    localStorage.setItem('appData', JSON.stringify(acctdata));
  this.setState({
    productData:filterdata
  })
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
               <td><input type="checkbox"/></td>
               <td>{item.category}</td>
               <td>{item.unitSold}</td>
               <td>{item.stock}</td>
               <td>{item.expireDate}</td>
               <td><i onClick={()=>{this.handleDelet(index)}} class="fas fa-trash-alt"></i></td>
           </tr>

            )
        })}
                   
                        
                    </table>
                </div>

                <div className={classes.rightSection}>

                </div>
                
            </div>
        )
    }
}

export default productPage;