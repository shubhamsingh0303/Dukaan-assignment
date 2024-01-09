import React from 'react'
import "./maincontent.css"
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
import { RiDownload2Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Maincontent = () => {
  return (
    <div style={{display:'grid',backgroundColor:'rgb(250,250,250)'}}>
        <div className='overview-tab'>
            <div>Overview</div>
            <div><nav className='drop-down'><label for="touch"><span>Last Month</span></label>
                <a><IoIosArrowDown/></a>
            </nav></div>
        </div >
        <div className='content-1'>
            <div className='content-2'><div>Online orders</div><div style={{fontWeight:'bold',fontSize:'30px',paddingTop:'15px'}}>231</div></div>
            <div className='content-3'><div>Amount recieved</div><div style={{fontWeight:'bold',fontSize:'30px',paddingTop:'15px'}}>&#8377;23,92,312.19</div></div>
        </div>
        <div style={{paddingLeft:'52px'}}><h2>Transaction | This month</h2></div>
        <div style={{backgroundColor:'white',paddingTop:'10px'}}>
            <input type='text' placeholder='Search by order Id...'size={30} className='search-bar2'/>
            <span><input type='text' placeholder='SORT' className='sortbar'/><a><LuArrowDownUp/></a></span>
            <a className='downloadbar'><RiDownload2Line/></a>
            </div>
        <div className='orderID'>
            <div style={{paddingLeft:'45px'}}>Order ID</div>
            <div style={{paddingLeft:'17em'}}>Order Date<a><IoIosArrowDown/></a></div>
            <div style={{paddingLeft:'12em'}}>Order amount</div>
            <div style={{paddingLeft:'17em'}}>Transaction fees<a><IoMdInformationCircleOutline/></a></div>
        </div>
    </div>
  )
}

export default Maincontent