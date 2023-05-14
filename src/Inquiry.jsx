import React from 'react';
import './css/inquiry.css';
import './font/fonts.css';

export default function Inquiry(){
  return(
    <div className='inquiry_list'>
      <div className='inquiry_title1'>
        <div className='title-1'>Sharey</div>
        <div className='title-2'>Admin</div>
      </div>
    <hr id='underline'></hr>
      <div className='inquiry_body'>
        <div className='inquiry_title2'>문의</div>
          <div className='inquiry_box'>
            <div className='inquiry_main'>
              <div className='profile'></div>
              <div className='member_name'></div>
              <div className='inquiry_title'></div>
            </div>
          </div>
      </div>
    </div>
  )
}