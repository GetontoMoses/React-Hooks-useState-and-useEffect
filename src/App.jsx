import { useState } from "react";
import React from "react";
import { userForm } from "./useForm";

const App = () =>{
 const [values, handleChange] = userForm({email:'', password:''});
  
  return (
    <div>
      <input name="email" 
       value={values.email}
       onChange={handleChange}
      />
       <input 
       type="password" 
       name="password"
       value={values.password}
       onChange={handleChange}
       />
    </div>
  );
};

export default App;