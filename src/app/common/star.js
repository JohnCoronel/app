import React from 'react'
import Rate from 'antd/lib/rate'; 
import 'antd/lib/rate/style/css';


const custom = {
    display:'flex',
    justifyContent:'space-between',
    width:'150px'

}
const UserRating = () => {
    return (
        <div style ={{alignSelf:'center', width:'150px'}}>
        <Rate style = {custom} allowHalf/>
        </div>
    )
}

export default UserRating;