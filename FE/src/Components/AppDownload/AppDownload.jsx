import React from 'react'
import { assets } from '../../assets/assets'
import "./AppDownload.css"
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Get our app at</p>
        <div className="app-download-links">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload