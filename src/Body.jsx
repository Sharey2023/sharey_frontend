import './css/Body.css';
import './font/fonts.css';
import React from 'react';
import { BsChatDots } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";

export default function Body(){

  return (
    <div className='Body'>
      <div className='main_body'>
        <div className = "place1">
          <h3>제주도</h3>
        </div>
        <div className='place2'>
          <h3>강릉</h3>
        </div>
        <div className='place3'>
          <h3>여수</h3>
        </div>
        <div className = "place4">
          <h3>일본</h3>
        </div>
        <div className='place5'>
          <h3>베트남</h3>
        </div>
        <div className='place6'>
          <h3>필리핀</h3>
        </div>
        <div className = "place7">
          <h3>영국</h3>
        </div>
        <div className='place8'>
          <h3>프랑스</h3>
        </div>
        <div className='place9'>
          <h3>미국</h3>
        </div>
    </div>
    <div className='side'>
      <button type='button' id='chat_click'>
        <BsChatDots className='chat_add'/>
      </button>
      <button type='button' id='post_click'>
        <MdOutlinePostAdd className='post_add'/>
      </button>
    </div>
  </div>  
  )

}
