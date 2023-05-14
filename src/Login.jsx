import React from 'react'
import air from './img/air.png'
import './css/login.css';
import './font/fonts.css';

export default function Login() {
  return (
    <div className='background'>
        <div className='page1'>
          <img className='login_img' src={air}/>
          <div className='name'> 
            Sharey
          </div>
        </div>
        <div className='page2'>
            <div className='title'>
                Login
            </div>
            <hr/>
            <div className='content'> 
                  <div className='inputWrap'>
                    <input className='input' placeholder='아이디'/>
                    <input className='input' placeholder='비밀번호'/>
                    <hr/>

                    <div className='login_api'>
                      <button id='login_google'>
                        구글 계정으로 로그인
                      </button>
                      <button id='login_kakao'>
                        카카오 계정으로 로그인
                      </button>
                      <button id='login_naver'>
                        네이버 계정으로 로그인
                      </button>
                    </div>

                    <div className='aaa'>
                      아이디 찾기 | 비밀번호 찾기 | 회원가입
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}
