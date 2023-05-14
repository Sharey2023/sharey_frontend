import React from 'react';
import './css/Admin.css';
import './font/fonts.css';


export default function Admin(){
  return(
    <div className='Admin_title'>
      <div className='title1'>Sharey</div>
      <div className='title2'>Admin</div>     
    <div className='Admin_main'>
      <div className='member'>회원관리</div>
      <div className='inquiry'>문의</div>
    </div>
    </div>
  )
}