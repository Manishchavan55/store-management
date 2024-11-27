import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Viewproduct() {
  const [product, setProduct] =useState([]);

  function getProduct(){
    axios.get("http://localhost:5000/product")
    .then(respose=>{
      setProduct(respose.data);
      console.log(respose.data)
    })
  }

  function deleteProduct(id){
    axios.delete(`http://localhost:5000/product/${id}`)
    .then((res) => {
      alert("Data deleted successfully....!");
      getProduct();
    }).catch((error) => {
      console.log(error);
    });
  }
 
  useEffect(getProduct,[])
  return (
    <div>
      <h2 className="text-center fs-3 text-warning">All Products of store..</h2>
      <table className="bg-light table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Suplier</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.suplier}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <input type="checkbox" checked={product.inStock} />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
                <Link
                  className="btn btn-sm btn-primary me-2" to={`/edit/${product.id}`} >
                  <i class="bi bi-pencil-square"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Viewproduct;