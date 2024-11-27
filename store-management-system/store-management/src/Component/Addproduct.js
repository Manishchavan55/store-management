import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

function Addproduct() {
      const {register,handleSubmit,setValue,reset, } =  useForm();

    const { id } = useParams();
  function saveData(product) {
    if(!id) {
    axios.post("http://localhost:5000/product",product).then((res) => {
      alert("Data saved successfully....!");
      reset();
    }).catch((error) => {

      console.error(error);
    });
     
  }
  else{
    axios.put(`http://localhost:5000/product/${id}`,product)
    .then((res) => {
      alert("Data updated successfully....!");
    })

    .catch((error) => {
      console.error(error);
      });
  }
  }
  const getEditData=()=>{
    if(id)
    {
    axios.get(`http://localhost:5000/product/${id}`).then((res) => {
      for(let prop in res.data){
        setValue(prop, res.data[prop]);
      }
      })
      
      .catch((error) => {
        console.error(error);
        });

  }
  }

  useEffect(getEditData,[]);

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 border border-primary mt-3 p-3">
        <h1 className="text-warning text-center fs-3">
          <i className="bi bi-box-fill"></i>&nbsp; Add new product to the
          store....!
        </h1>
        <form onSubmit={handleSubmit(saveData)}>
          <div className="mb-3">
            <label htmlFor="prodName" className="text-primary form-label">
              Enter Product id
            </label>
            <input
              type="text"
              className="form-control"
              {...register("id")} disabled={id}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="desc" className="text-primary form-label">
              Enter Product Name
            </label>
            <input
              type="text"
              className="form-control"
              {...register("productName")}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="text-primary form-label">
              Enter Product category
            </label>
            <input
              type="text"
              className="form-control"
              {...register("category")}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="text-primary form-label">
              Enter Product price:-
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              {...register("price")}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="text-primary form-label">
              Enter Product Quantity:-
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              {...register("quantity")}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="supp" className="text-primary form-label">
              Enter Name
              of suplier 
            </label>
            <input
              type="text"
              className="form-control"
              {...register("suplier")}
              id="supp"
            ></input>
          </div>

          <div>
            <label
              htmlFor="stock"
              className="text-primary form-check-label me-4"
            >
              Is product in Stock?:-
            </label>
            <input
              type="checkbox"
              {...register("inStock")}
              className="form-check-input"
            ></input>
          </div>

          <div className="text-center">
            <button type="Submit" className="btn btn-success w-25">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addproduct;