import React, { useState } from "react";
import MostrarInfo from '../MostrarInfor/MostrarInfo'
const FormComp = () => {
    
    const [user,setUser]=useState({firstName:'',
    lastName:'',
    email:'',
    password:'',
    cpassword:''});

    const [users,setUsers]=useState([]);
    

    const enviandoForm=(event)=>{
      event.preventDefault();
      setUsers([...users,user]);
      console.log(users)
      setUser({firstName:'',
      lastName:'',
      email:'',
      password:'',
      cpassword:''})
    }





  return (
    <>
    <form onSubmit={enviandoForm}>
      <div className="form-cont">
        <label htmlFor="firstname">Firs Name:</label>
        <input type="text" id="firstname" value={user.firstName} onChange={(event)=>setUser({...user, firstName: event.target.value })}/>
      </div>
      <div className="form-cont">
        <label htmlFor="lastname">Last Name:</label>
        <input type="text"  id="lastname" value={user.lastName} onChange={(event)=>setUser({...user, lastName: event.target.value })}/>
      </div>
      <div className="form-cont">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={user.email} onChange={(event)=>setUser({...user, email: event.target.value })}/>
      </div>
      <div className="form-cont">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={user.password} onChange={(event)=>setUser({...user, password: event.target.value })}/>
      </div>
      <div className="form-cont">
        <label htmlFor="cpassword">Confirm Password:</label>
        <input type="password" id="cpassword" value={user.cpassword} onChange={(event)=>setUser({...user, cpassword: event.target.value })}/>
      </div>
      <button className="btn" type="submit">Send form</button>
    </form>
    <MostrarInfo users={users}/>
    </>
  );
};

export default FormComp;
