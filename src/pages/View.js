import React,{useState,useEffect} from 'react';
import fireDb from "../firebase";
import {useParams} from "react-router-dom";
import "./View.css";

const View = () => {
  
const [user,setUser]= useState({});
const {id}=useParams();

useEffect(()=>{

  fireDb.child(`contact/${id}`).get().then((snapshot)=>{
    if(snapshot.exists()){
      setUser({...snapshot.val()})
    }else{
      setUser({});
    }
  });
},[id])

console.log("user",user);
  return (
    <div style={{marginTop:"100px"}}>
      <div className="card">
        <div className="card-header">
          <p>
            User Contact Detail
          </p>
        </div>
        <div className="containet">
          <strong>
            ID:
          </strong>
          <span>{id}</span>
          <br/>
          <br/>
          <strong>
             Name:
          </strong>
          <span>{user.name}</span>
          <br/>
          <br/>
          <strong>
            Email:
          </strong>
          <span>{user.email}</span>
          <br/>
          <br/>
          <strong>
            Contact:
          </strong>
          <span>{user.contact}</span>
          <br/>
          <br/>
          <a href="/">
<button className='btn btn-edit'>Go Back</button>

          </a>


        </div>
      </div>
        
        </div>
  )
}

export default View