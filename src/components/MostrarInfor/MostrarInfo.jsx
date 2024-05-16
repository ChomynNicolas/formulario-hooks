import React from 'react'


const MostrarInfor=(props)=>{
    
    console.log(props.users)
    

    return (
        <>
        <h2>Your Form Data</h2>  
        
        {props.users.map((user,index)=>{
            return(
                <div key={index}>
                    <h5>Nro: {index+1}</h5>
                <p>Fistname: {user.firstName}</p>
                <p>Lastname: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.cpassword}</p>
                </div>
            )
        })

        }
        

        </>

    );
}




export default MostrarInfor