import { useState } from "react";

const Contact = () => {
    return(<> 
      <br></br><br></br><br></br><br></br>
    <table className="table table-responsive table-bordered">
      <thead className="bg-success text-danger">
        <tr>
          <td>Prod_Id</td>
          <td>Prod_Name</td>
          <td>Prod_Price</td>
        </tr>
      </thead>
      <tbody>
      {
       (JSON.parse(localStorage.getItem('cart'))!=null)?Object.values(JSON.parse(localStorage.getItem('cart'))).map((items,key)=>
        <tr>
          <td>{key+1}</td>
          <td>{items.nm}</td>
          <td>{items.price}</td>
        </tr>
        ):<tr>
          <td colSpan={3} className='text-center'>No Data Found...</td>
        </tr>
      }
      </tbody>
    </table>
    </>);
  };
  
  export default Contact;