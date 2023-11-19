import React from 'react'

export default function Contactus() {
  return (
    <div className="container ">
    <div className="row m-5">
   <div className="col-md-6">
      <div className=' bgfoot  p-5 '>
                <h2 className='text-light'>تواصل معنا</h2>
                <p className='p-3 text-light fs-3'>ارسل لنا استفسارك وسوف يقوم فريقنا بالتواصل معك</p>
                 
                 <div className='w-75 h-75 position-relative bg-white   '>
                  <img className='imgphone' />
                  <h3 className='pt-4 '>رقم الهاتف</h3>
                  <p className='p-2'>+9661234567891  </p>
                  <p className='p-2'>+9661234567890</p>
                 </div>

                <div className='w-75 h-75 position-relative bg-white '>
                  <img className='imgphone'  />
                  <h3 className='pt-4 '>رقم الهاتف</h3>
                  <p className='p-2'>+9661234567891  </p>
                  <p className='p-2'>+9661234567890</p>
                 </div>


      </div>
   </div>


   <div className="col-md-4">
          <div className='bg-contact p-5 rounded-3'>
            <label htmlFor="name " className='fw-bold fs-4 '>الاسم</label>
            <input className='form-control  mb-3 mt-2' type="text" id='name'   placeholder='ادخل الاسم' />
            <label htmlFor="name  " className='fw-bold fs-4 '>البريد الالكتروني</label>
            <input className='form-control mb-3 mt-2  ' type="text" id='name'   placeholder='ادخل البريد الالكتروني '  />
            <label htmlFor="name  " className='fw-bold fs-4 '>الهاتف المحمول</label>
            <input  className='form-control  mb-3 mt-2 ' type="tel" id='name'    />  
            <label htmlFor="name  " className='fw-bold fs-4 '>نص الرساله</label>
           <textarea  className='form-control mt-2 mb-3 ' placeholder='ادخل رسالتك '  id="" cols="10" rows="5"></textarea> 
         
          <div className='text-center'><button className='border-success rounded-4 bbutton w-75 m-auto text-dark fw-bold p-3'>ارسال</button></div>
         
          </div>
   </div>

    </div>
  </div>
  )
}
