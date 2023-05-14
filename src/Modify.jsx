import './css/Modify.css';
import './font/fonts.css';
import React from 'react';

export default function Modify(){
  return (
    <div className = "modifyPage">
      <label>정보 수정</label>
      <form>
        <input type='text'/>
        <button type="submit">중복 확인</button>
        <input type='password'/>
        <input type='date'/>
        <input type='phone'/>
      </form>
      <button type='submit'>수정하기</button>
    </div>
  )
}