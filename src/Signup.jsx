import React from 'react';
import './css/signup.css';
import './font/fonts.css';


export default function signup() {
  return (
    <div className='signupPage'>
        <div className='signuptitle'>
            회원 가입
        </div>
        <hr/>
        <div className='su_input'>
            <input className='input' placeholder='이름'/>
            <input className='input' placeholder='별명'/>
            <input className='input' placeholder='아이디'/>
            <input className='password' placeholder='비밀번호'/>
            <input className='password' placeholder='비밀번호 확인'/>
            <input className='input' placeholder='이메일'/>
            <input className='input' placeholder='전화번호'/>
            <input className='input' placeholder='생년월일 (ex.20001010)'/>
        </div>
        <div className='btn_sub'>
            <button id="signup_btn">가입하기</button>
        </div>
    </div>
  )
}
