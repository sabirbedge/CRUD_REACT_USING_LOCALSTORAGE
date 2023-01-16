import { createContext, useEffect, useState } from "react";
const Home = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    var arr=[];
    const set=()=>{
        if((name=='' && price=='')||(name=='' || price=='')){
            alert("Please fill the product details")
        }else{
        var obj1={
            nm:name,
            price:price
        }
        arr.push(obj1)
        setPrice('')
        setName('')
        if(localStorage.getItem('cart')==null){
            localStorage.setItem('cart',JSON.stringify(arr));
            setCount(Object.values(JSON.parse(localStorage.getItem('cart'))).length)
        }else{
            var arr2=Object.values(JSON.parse(localStorage.getItem('cart')))
            arr2.push(obj1)
            localStorage.setItem('cart',JSON.stringify(arr2));
            setCount(Object.values(JSON.parse(localStorage.getItem('cart'))).length)
        }
        alert('Product Added Successfully')
    }
        
    }
        useEffect(()=>{
            if(JSON.parse(localStorage.getItem('cart'))!=null){
                setCount(Object.values(JSON.parse(localStorage.getItem('cart'))).length)
            }
        });
    return( 
    <>
    <br></br><br></br><br></br><br></br>
    <p>You have already added {count} products</p>
    <input type='text' className="form-control" placeholder="Prod_Name" onChange={(e)=>setName(e.target.value)} value={name}/><br></br>
    <input type='number' className="form-control" placeholder="Prod_Price" onChange={(e)=>setPrice(e.target.value)} value={price}/><br></br>
    <button onClick={set} className='btn btn-success'> Add Product </button>
    </>
    );
  };
  
  export default Home;