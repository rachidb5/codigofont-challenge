import React from 'react';
import LogoImg from '../assets/LogoImg.svg';
import Image from 'next/image'

function Logo() {
    return (
      <div className="d-flex justify-content-center">
        <Image className="logo-img" src={ LogoImg } alt="logo"width={250} height={120}/>
      </div>
    )
}

export default Logo;