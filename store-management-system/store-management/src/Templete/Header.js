import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary p-2 ps-3 d-flex justify-content-center ">
      <div className="text-white">
        <h1>
         
          <i className="bi bi-cart-dash-fill"></i> Store Management
        </h1>
      </div>
      <div className="w-50 text-end me-5 mt-2">
        <Link className="btn btn-light me-2" to={"/Add"}>
          ADD PRODUCT
        </Link>
        <Link className="btn btn-light me-2" to={"/view"}>
          VIEW PRODUCT
        </Link>
       
      </div>
    </nav>
  );
}

export default Header