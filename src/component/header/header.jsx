import React from 'react'
import "./header.css"
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";

const Header = () => {
  return (
    <div className='header'>
      <div>Payments</div>
      <div style={{paddingLeft:'30px'}}><CiCircleQuestion size={20}/></div>
      <div style={{paddingLeft:'5px',fontSize:'15px'}}>How it works</div>
      <div><input type='text' placeholder='    Search feature,tutorials etc'size={50} className='search-bar'/></div>
      <div style={{marginLeft:'25%'}} className='icon-back'><MdOutlineMessage size={20}/></div>
      <div style={{marginLeft:'3%'}} className='icon-back'><TbSquareRoundedArrowDownFilled size={20}/></div>
    </div>
  )
}

export default Header