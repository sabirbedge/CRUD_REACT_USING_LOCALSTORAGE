import { useContext, useEffect, useState } from "react";

const Blogs = () => {
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [id,setId]=useState(-1);
    const update=()=>{
      if(id==-1){
        alert('Please select product')
      }else{
        var newArr=[]
        Object.values(JSON.parse(localStorage.getItem('cart'))).map((items,ind)=>{
        newArr.push(items)
          if(id==ind){
            var localObj={
              nm:name,
              price:price
            }
            newArr.splice(id,1,localObj)
          }
        })
        localStorage.removeItem('cart')
        localStorage.setItem('cart',JSON.stringify(newArr));
        setName('')
        setPrice('')
        setId(-1)
        document.getElementById('select').value='-1'
        alert('Product Details Edited Successfully')
      }
    }
    const setVal=(selectedItemInd)=>{
      if(selectedItemInd!=-1){
        Object.values(JSON.parse(localStorage.getItem('cart'))).map((items,ind)=>{
          if(selectedItemInd==ind){
            setName(items.nm)
            setPrice(items.price)
            setId(ind)
          }
        })
      }else{
        setName('')
        setPrice('')
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
    <input type='text' placeholder="Prod_Name" onChange={(e)=>setName(e.target.value)} value={name} className="form-control"/><br></br>
    <input type='number' placeholder="Prod_Price" onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control"/><br></br>
    <input type='hidden' placeholder="Age" onChange={(e)=>setId(e.target.value)} value={id}/>
    <button onClick={update} className='btn btn-info'>Update Product</button>
    
    </>);
  };
  
  export default Blogs;