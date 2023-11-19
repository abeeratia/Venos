import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className="container-fluid bgfoot text-white p-5 ">
      <div className="row">
      <div className="col-md-4">
        <div >
          <img className='w-25 me-5' src={require('../../image/Group 3.png')} alt="" />
<p className='w-50  me-5 pt-4'>مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div >
<h2 className='me-5 pe-4'>روابط سريعه</h2>
         <ul>
          <li className='fs-4 fw-light'>الرئيسية</li>
          <li className='fs-4 fw-light'>المعلمون</li>
          <li className='fs-4 fw-light'>الحجوزات</li>
          <li className='fs-4 fw-light'>الجلسات</li>
          <li className='fs-4 fw-light'>القائمة</li>
          
         </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div >
          <h2 >العنوان</h2>
          <p>مصر، الجيزة</p>
          <p>Business Hour:From 10:00 To 18:00</p>
          <p>+20123456789</p>
          <p>+20198765432</p>
         
        </div>
      </div>
      

      </div>

  </div>
  )
}
