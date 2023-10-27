import React, {useEffect, useState} from 'react'
import {useLocation, useHistory} from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [activeTab,setActiveTab]=useState("Home");
     const location=useLocation();
     const [search, setSearch]=useState("");
     const history= useHistory();
     useEffect(()=>{
      if(location.pathname==="/"){
        setActiveTab("Home");
      }else if(location.pathname==="/add"){
        setActiveTab("AddContact");
      }
      else if(location.pathname==="/about"){
        setActiveTab("About");
      }

     },[location]);

     const handleSubmit=(e)=>{
      e.preventDefault();
      history.push(`/search?name=${search}`);
      setSearch("");
     };

        return(
        <div className='header'>
            <p className="logo">Contact App </p>
          <div className="header-right">
           <form onSubmit={handleSubmit} style={{display:"inline"}}>
           <input
            type="text"
            className="inputField"
            placeholder='Search name...'
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
            />
           </form>



            <a href="/">
             <p 
             
             className={`${activeTab==="Home" ? "active": ""}`}
             onClick={()=> setActiveTab("Home")}
           
             >
             Home
           
             </p>
            </a>

            <a href="/add">
             <p 
             className={`${activeTab==="AddContact" ? "active": ""}`}
             onClick={()=> setActiveTab("AddContact")}
             >
             Add Contact
           
             </p>
            </a>

            <a href="/about">
             <p 
             className={`${activeTab === "About" ? "active": ""}`}
             onClick={()=> setActiveTab("About")}
             >
             About
           
             </p>
            </a>


          </div>

       



    </div>
        )
}

export default Header