import React from 'react'
import "../AppDownload/Appdownl.css"
import { assets } from '../../Assests/Images/assets'
 const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
<p>For Better Experience Download <br/> Resto App</p>
<div className="app-down-plat">
    <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
</div>
    </div>
  )
}
export default Appdownload;