import './css/Modify.css';
import './font/fonts.css';
import React from 'react';

export default function Modify(){
  return (
    <div className = "modifyPage">
      <div className='modify_title'>
        정보 수정
        </div>
      <div className='modify_main'>
      <form id='modify_main'>
        <input type='text' placeholder='별명'/>
        <input type='password' placeholder='비밀번호'/>
        <input type='password' placeholder='비밀번호 확인'/>
        <input type='text' placeholder='생년월일(ex.20001010)'/>
        <input type='tel' placeholder='전화번호'/>
      </form>
      </div>
      <button type='submit' id='md_btn'>수정하기</button>
    </div>
  )
}