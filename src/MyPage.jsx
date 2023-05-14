import './css/MyPage.css';
import './font/fonts.css';
import React from 'react';
import { HiMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export default function Board(){
  return (
    <div className = "MyPage">
      <div className='Mypage_header'>
        <div className='menu'>
          <button type='button' id="menu_ba">
            <HiMenu id='menu_icon'/>
          </button>
        </div>
        <div className='Mypage_title'>Sharey</div>
        <div className='Mypage_search'>
          <input type='text' id="my_sh"></input>
          <button type='button' id="search_basic">
                <BiSearch className='search_icon'/>
          </button>
        </div>
        </div>
      <div className='Mypage_profile'>
        <div className='my_photo'>사진</div>
        <div className='my_name'>홍길동</div>
        <div className='introduce'>안녕하세요 홍길동입니다.</div>
      </div>      
      <div className='list'>
        <div className='Mypage_list'>
          <button type='button' id="post_list">게시물</button>
          <button type='button' id="follower">팔로워</button>
          <button type='button' id="follow">팔로우</button>
        </div>
      </div>
      <hr id='underline2'></hr>
    </div>
  )
}