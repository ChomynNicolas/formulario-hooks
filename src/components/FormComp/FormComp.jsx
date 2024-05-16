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
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" value={user.firstName} onChange={(event)=>setUser({...user, firstName: event.target.value })}/>

        {user.firstName.length?user.firstName.length<=2? <p style={{color: "red", margin: "0", textAlign: "center" }}>El nombre tiene que tener al menos 3 caracteres</p>:"" :"" }

      </div>
      <div className="form-cont">
        <label htmlFor="lastname">Last Name:</label>
        <input type="text"  id="lastname" value={user.lastName} onChange={(event)=>setUser({...user, lastName: event.target.value })}/>

        {user.lastName.length?user.lastName.length<=2? <p style={{color: "red", margin: "0", textAlign: "center" }}>El apellido tiene que tener al menos 3 caracteres</p>:"" :"" }

      </div>
      <div className="form-cont">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={user.email} onChange={(event)=>setUser({...user, email: event.target.value })}/>

        {user.email.length?user.email.length<=5? <p style={{color: "red", margin: "0", textAlign: "center" }}>El email tiene que tener al menos 6 caracteres</p>:"" :"" }

      </div>
      <div className="form-cont">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={user.password} onChange={(event)=>setUser({...user, password: event.target.value })}/>
      </div>
      <div className="form-cont">
        <label htmlFor="cpassword">Confirm Password:</label>
        <input type="password" id="cpassword" value={user.cpassword} onChange={(event)=>setUser({...user, cpassword: event.target.value })}/>
        {(user.password.length||user.cpassword.length)?(user.password.length<=7||user.cpassword.length<=7)? <p style={{color: "red", margin: "0", textAlign: "center" }}>La contraseña debe tener al menos 8 caracteres</p>:"" :"" }
        {user.password.length?!(user.password===user.cpassword)? <p style={{color: "red", margin: "0", textAlign: "center" }}>Las contraseñas debe coincidir</p>:"" :"" }



      </div>
      <button className="btn" type="submit">Send form</button>
    </form>
    <MostrarInfo users={users}/>
    </>
  );
};

export default FormComp;
