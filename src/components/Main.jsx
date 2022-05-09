import React from 'react'
import {RiShoppingCart2Line} from 'react-icons/ri';
// 
import PS5Logo from '../img/ps5 logo.png';
import Dots from './Dots';
import Carusel from './Carusel'
import img from '../img/PS5-Controller-PNG-Image.png';
// 
function Main() {
  return (
    <React.Fragment>
      <Dots className=''/>
     <div className=' flex row items-center w-screen pl-36 pt-52 '>
   <div>
   <img src={PS5Logo} className='w-custom ' alt="" />
     <p className='text-custom font-semiBold spacing mt-12'>Incredible Games Come To Life On PS5.</p>
     <button className='text-white bg-black-gradient py-4 px-8 rounded-custom mr-96 uppercase text-sm mt-12 font-regular shadow '>
       <RiShoppingCart2Line className='text-white text-sm inline mr-2 mb-1'/> pre order now
       </button>
   </div>
      <Carusel className='' />
     </div>
    </React.Fragment>
  )
}

export default Main