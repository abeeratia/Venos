import React from 'react'
import './About.css'
export default function About() {
  return <>
  <div>
    <div className="container-fluid  p-5 mt-5">
     <div className="row d-flex  ">
      <div className="col-6 d-flex justify-content-center ">
        <div>
        <img src={require('../../image/Rectangle 7.png')} className='' alt="" />
        </div>
      </div>
      <div className="col-6">
        <h3 className='fontsizetitle pt-5 fw-bolder  text-black '>افضل مواقع التصوير من ٢٠١٤</h3>
        <p className='text-muted fs-1 w-75'>مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات. نحن نقدم خدماتنا الاحترافية للأفراد والشركات والمؤسسات الكبيرة والصغيرة. نحن نفخر بتقديم خدماتنا بأعلى مستويات الجودة والاحترافية. اتصل بنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك في توثيق أجمل لحظات حياتك.</p>
      
      </div>
     </div>


  </div>
  <div className=' d-flex justify-content-center align-items-top '>
  <div className='widthdiv text-center d-flex justify-content-around align-items-top '>
      <div className='borderr d-flex flex-column justify-content-center align-items-top '>
     <h4 className='fs-2 text-dark'> 2200+</h4>
     <h5 className='fs-2 text-dark'>اراء عملائنا</h5>

      </div>
      <div className='borderr d-flex flex-column justify-content-center align-items-top'>
     <h4 className='fs-2  text-dark'> 2200+</h4>
     <h5 className='fs-2  text-dark'>اراء عملائنا</h5>

      </div>
      <div className=' d-flex flex-column justify-content-center align-items-top'>
     <h4 className='fs-2  text-dark'> 2200+</h4>
     <h5 className='fs-2  text-dark'>اراء عملائنا</h5>

      </div>
      </div>
       </div>
       </div>
  
  </>
}
