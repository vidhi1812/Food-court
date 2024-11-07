import React from 'react'
import "../Placeorder/plcordr.css"

 const Plcordr = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'> Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Name ' />
          <input type="text" placeholder='last Name ' />
        </div>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields"></div>
      </div>
      <div className="place-order-right"></div>
    </form>
  )
}
export default Plcordr;