import React, {useState,useEffect} from 'react'
import fireDb from '../firebase';

import "./Home.css";
import { toast } from 'react-toastify';
const Home = () => {

  const [data,setData]=useState({});
  const [sortedData, setSortedData]=useState([])
  const [sort, setSort]=useState(false);

//Pagination
  


  
  useEffect(()=>{

    fireDb.child("contact").on("value", (snapshot)=>{
     if(snapshot.val()!== null){
      setData({...snapshot.val()});
     }else{
      setData({});
     }

    });
    return()=>{
      setData({});
    };
  },[]);

const onDelete=(id)=>{
  if(window.confirm("Are you sure that you want to delete that contact"))
  {
    fireDb.child(`contact/${id}`).remove ((err)=>{
      if(err){
        toast.error(err);
      }
      else{
        toast.success("Contact Deleted Successfully");
      }

    });
  }

};

const handleChange=(e)=>{
  setSort(true);
  fireDb.child("contact").orderByChild(`${e.target.value}`).on("value", (snapshot)=>{
    let sortedData=[];
    snapshot.forEach((snap) =>{
      sortedData.push(snap.val())
    })
    setSortedData(sortedData);
  })
};
const handleReset=()=>{
  setSort(false);
  fireDb.child("contact").on("value", (snapshot)=>{
    if(snapshot.val()!== null){
     setData({...snapshot.val()});
    }else{
     setData({});
    }

   });
};

const filterData =(value)=>{
  fireDb.child("contact").orderByChild("status").equalTo(value).on("value",(snapshot)=>{
    if(snapshot.val()){
      const data=snapshot.val();
      setData(data);
    }
  })
}

  


return (

     <div style={{marginTop:"2%"}}>

      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>No.</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Email</th>
            <th style={{textAlign:"center"}}>Contact</th>
            <th style={{textAlign:"center"}}>Status</th>
          {!sort && 
              <th style={{textAlign:"center"}}>Action</th>
          } 
            
          </tr>
        </thead>


        {!sort &&(
          <tbody>

          {Object.keys(data).map((id,index)=>
          {
          return(
            <tr key={id}>
              <th scope="row">{index+1}</th>
              <td>{data[id].name}</td>
              <td>{data[id].email}</td>
              <td>{data[id].contact}</td>
              <td>{data[id].status}</td>

              <td>
       
        <a href={`/update/${id}`}>
        <button className='btn btn-edit'>Edit</button>
        </a>

        <button className='btn btn-delete' onClick={()=> onDelete(id)}>Delete</button>

        <a href={`/view/${id}`}>
        <button className='btn btn-view'>View</button>
        </a>

      </td>
              
      </tr>

     );
     })}
       
     </tbody>
)}

{sort &&(
 
 <tbody>
  {sortedData.map((item,index)=>{
   return(
    <tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.contact}</td>
    <td>{item.status}</td>
    </tr>
   )
  })}
 </tbody>

)}
        
      </table>



      <label>Sort By:</label>
       <select className='dropdown' name="col Value" onChange={handleChange}>
        <option>Please Select</option>
        <option value="name">Name</option>
        <option value="email"> Email</option>
        <option value="contact">Contact</option>
        <option value="status">Status</option>
       </select>
       <button className='btn btn-reset' onClick={handleReset} >
       Reset
       </button>
       <br />
       <label>Status:</label>
       <button className="btn btn-active" onClick={()=> filterData("Active")}>
        Active</button>
       <button className="btn btn-inactive" onClick={()=> filterData("Inactive")}>
        Inactive</button>
       
      
     
        </div>
  )





}

export default Home