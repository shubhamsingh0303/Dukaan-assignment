import React from 'react'
import "./sidebar.css"
import { SlArrowDown } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { BiBorderAll } from "react-icons/bi";
import { TbTruckDelivery ,TbDiscount} from "react-icons/tb";
import { AiOutlineSound } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { MdOutlinePayments,MdPeopleOutline ,MdOutlineColorLens,MdElectricBolt} from "react-icons/md";
import { RiNavigationLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='sidebarbody'>
        <div className='profilename'>
            <img src='./b.jpg' alt='profilepic' style={{width:'60px',height:'60px',borderRadius:'5px'}}/>
            <div style={{display:'grid',padding:'0px 5px 0px 10px'}}>Shubham <div style={{textDecoration:'Underline'}}>
                visitstore</div>
            </div><div style={{color:'whitesmoke',padding:'20px 0px 0px 20px'}}><SlArrowDown/></div></div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><GoHome size={30}/></div>
            <div style={{padding:'5px'}}>Home</div>
        </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><LuClipboardList size={30}/></div>
            <div style={{padding:'5px'}}>Orders</div></div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><BiBorderAll size={30}/></div>
            <div style={{padding:'5px'}}>Products</div></div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><TbTruckDelivery size={30}/></div>
            <div>Delivery</div></div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><AiOutlineSound size={30}/></div>
            <div style={{padding:'5px'}}>Marketing</div>
        </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><IoBarChartOutline size={30}/></div>
            <div style={{padding:'5px'}}>Analytics</div>
        </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><MdOutlinePayments size={30}/></div>
            <div style={{padding:'5px'}}>Payments</div>
            </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><RiNavigationLine size={30}/></div>
            <div style={{padding:'5px'}}>Tools</div>
            </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><TbDiscount size={30}/></div>
            <div style={{padding:'5px'}}>Discount</div>
            </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><MdPeopleOutline size={30}/></div>
            <div style={{padding:'5px'}}>Audience</div>
            </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><MdOutlineColorLens size={30}/></div>
            <div style={{padding:'5px'}}>Appearence</div>
            </div>
        <div className='displaylist'>
            <div style={{padding:'0px 10px 0px 10px'}}><MdElectricBolt size={30}/></div>
            <div style={{padding:'5px'}}>Plugins</div>
            </div>
        <div className='bottom'>
            <div><IoWalletOutline size={30}/></div>
            <div style={{display:'grid',margin:'10px'}}>Available credits  <div>222.10</div></div></div>
    </div>
  )
}

export default Sidebar