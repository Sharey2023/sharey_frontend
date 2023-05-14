import React from 'react';
import './css/Member.css';
import './font/fonts.css';

export default function Member(){
  return(
    <div className='member_list'>
      <div className='member_title1'>
        <div className='title_1'>Sharey</div>
        <div className='title_2'>Admin</div>
      </div>
    <hr id="underline"></hr>
    <div className='member_body'>
        <div className='member_title2'>회원 관리</div>
          <div className='member_box'>
            <div className='member_main'>
            <div className='member_information'>
              
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}