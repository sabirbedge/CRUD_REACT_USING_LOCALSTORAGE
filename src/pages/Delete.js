import { useContext, useEffect, useState } from "react";

const Delete = () => {
  const [id,setId]=useState(-1);
    const deleteItem=()=>{
        if(id==-1){
            alert('Please select product')
        }else{
        var newArr=[]
        Object.values(JSON.parse(localStorage.getItem('cart'))).map((items,ind)=>{
        newArr.push(items)
          if(id==ind){
            newArr.splice(id,1)
          }
        })
        localStorage.removeItem('cart')
        localStorage.setItem('cart',JSON.stringify(newArr));
        setId(-1)
        document.getElementById('select').value='-1'
        alert('Selected Product Deleted Successfully...')
    }
    }
    const setVal=(selectedItemInd)=>{
      if(selectedItemInd!=-1){
        Object.values(JSON.parse(localStorage.getItem('cart'))).map((items,ind)=>{
          if(selectedItemInd==ind){
            setId(ind)
          }
        })
      }else{
        setId(-1)
      }
    }
    return(
    <> <br></br><br></br><br></br><br></br>
    <select onChange={(e)=>setVal(e.target.value)} id='select' className="form-control">
      <option value='-1'>---Select Product---</option>
    {
        (JSON.parse(localStorage.getItem('cart'))!=null)?Object.values(JSON.parse(localStorage.getItem('cart'))).map((items,key)=>
          <option value={key}>{items.nm}</option>
    ):<></>
    }
    </select>
    <br></br><br></br>
    <button onClick={deleteItem} className='btn btn-danger'>Delete Product</button>
    
    </>);
  };
  
  export default Delete;