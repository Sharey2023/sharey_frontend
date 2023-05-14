import './css/Search.css';
import './font/fonts.css';
import React from 'react';
import air_main from './img/air_1.png'
import { HiMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export default function Search(){
  return (
    <div className = "search_box">
      <div>
        <img className='air_main' src={air_main}/>
      </div>
      <div className='menu_ba'>
        <button type='button' id="menu">
          <HiMenu className='menu_icon'/>
        </button>
      </div>
        <div className='search'>
        <h1 className='app_name'>Sharey</h1>
          <form id='fm'> 
            <input type="text" id='search'  placeholder='여행지를 입력하세요'/>
              <button type='button' id="sh">
                <BiSearch className='search_icon'/>
              </button>
          </form>
        </div>
      </div>
  )
}