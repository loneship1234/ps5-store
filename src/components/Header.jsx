import React from 'react'
// 
import ShoppingBag from '../img/shopping-bag.png';
import Logo from '../img/sony-logo-3066.png';
// 
function Header() {
  return (
    <nav className='flex items-center w-full h-20 px-9 justify-end'>
        <img src={Logo} className='w-28 justify-end mr-auto' alt="" />
        <a href="#"  className='mr-20   '>Games</a>
        <a href="#"  className='mr-20   '>Hardware</a>
        <a href="#"  className='mr-20  '>Services</a>
        <a href="#"  className='mr-20  '>News</a>
        <img src={ShoppingBag} className='w-6 -ml-6 cursor-pointer'  alt="shopping-bag" />
    </nav>
  )
}

export default Header