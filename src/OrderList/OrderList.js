import React from 'react'
import classes from "./OrderList.module.css";

export default function OrderList() {
    const data=localStorage.getItem("appData")===null?[]:JSON.parse(localStorage.getItem("appData"))

    return (
        <div classname={classes.OrderList}>
            <table className={classes.Table}>
                <tr className={classes.TableHeading}>
                  <th className={classes.Heading}>ORDER NO</th>
                  <th className={classes.Heading}>STATUS</th>
                  <th className={classes.Heading}>OPERATORS</th>
                  <th className={classes.Heading}>LOCATION</th>
                  <th className={classes.Heading}>DISTANCE</th>
                  <th className={classes.Heading}>START DATE</th>
                  <th className={classes.Heading}>EST DELIVERY DUE</th>
                </tr>
                <tr>
                  <td className={classes.Data}>{data.dasbhoardPage.orders[0].orderNo}</td>
                    <td className={classes.Data}>{data.dasbhoardPage.orders[0].status}</td>
                    <td className={classes.Data}>{data.dasbhoardPage.orders[0].operators}</td>
                    <td className={classes.Data}>{data.dasbhoardPage.orders[0].location}</td>
                    <td className={classes.Data}>{data.dasbhoardPage.orders[0].distance}</td>
                    <td className={classes.Data}>{data.dasbhoardPage.orders[0].startDate}</td>
                    <td className={classes.Data}>{data.dasbhoardPage.orders[0].deliveryDate}</td>

                </tr>
            </table>
            
        </div>
    )
}
