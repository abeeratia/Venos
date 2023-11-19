import React from 'react'
import './Home.css'
import About from '../About/About'
import Content from '../Content/Content'
import Servises from '../Servises/Servises'
import Footer from '../Footer/Footer'
export default function Home() {
  return (
    <div className="container-fluid">
      <div className='imagebackground'>
      <div className="layer d-flex justify-content-start align-items-center">
        <div className='paragraphheader '>
        <h2 className='fontsizehead'>مرحبًا بكم في موقعنا المتخصص في تصوير الحفلات وتصميم ومونتاج و الأفلام الوثائقية وتصوير المطاعم والمناسبات.</h2>

        </div>
      </div>
      <About/>
      <Content/>
      <Servises/>

    </div>
   
  
    
    
    
      
    
    
    
    </div>
  
  )
}
