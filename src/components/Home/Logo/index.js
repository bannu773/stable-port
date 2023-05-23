/* eslint-disable no-unused-vars */
import { useRef } from 'react'
import LogoS from './../log.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()

  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <div>
        <img
          className="solid-logo"
          ref={solidLogoRef}
          src={LogoS}
          alt="JavaScript,  Developer"
        />
        </div>

    </div>
  )
}

export default Logo
