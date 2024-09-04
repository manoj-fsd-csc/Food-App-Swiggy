import React from 'react'

const SideBar = ({ showFirmHandler, showProductHandler,showAllProductsHandler,showUserDetailsHandler, showFirmTitle}) => {
  const firmId = localStorage.getItem('firmId');
  return (
    <div className="sideBarSection">
        <ul>
            { !firmId ? <li onClick={ showFirmHandler}>Add Firm</li> : ""}
            <li onClick={ showProductHandler}>Add Products</li>
            <li onClick={showAllProductsHandler}>All Products</li>
            <li onClick={showUserDetailsHandler}>User Details</li>
        </ul>
    </div>
  )
}

export default SideBar