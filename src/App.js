import { useState } from 'react';
import './App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function App() {
  
const [inputs,setInputs]=useState({username:"",email:"",password:""})
const [UnameValid,setUnameValid]=useState(false)
const [emailValid,setemailValid]=useState(false)
const [passwordValid,setpasswordValid]=useState(false)

const setData=(e)=>{
  const {name,value}=e.target
  if(name=='username'){ 
    if(value.match(/^[a-zA-Z ]+$/)){           //  /^ and $/ indicates starting and ending 
      setUnameValid(false)
    }
    else{
      setUnameValid(true)
    }
  }
  if(name=='email'){
    if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){           // email regex can be copied from google
      setemailValid(false)
    }
    else{
      setemailValid(true)
    }
  }
  if(name=='password'){
    if(value.match(/^[a-zA-Z0-9]+$/)){          
      setpasswordValid(false)
    }
    else{
      setpasswordValid(true)
    }
  }
  setInputs({...inputs,[name]:value})
}


console.log(inputs);

  return (
    <div className="App">
     <div className='w-50 container p-5 shadow-lg rounded my-5'>
      <h1 className='text-center mb-3'>Register Form</h1>
      <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
          <Form.Control onChange={(e)=>setData(e)} name='username' type="text" placeholder="username" />
        </FloatingLabel>
       {UnameValid && <div>
          <p className='text-danger'>Invalid Username</p>
        </div>}

        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control onChange={(e)=>setData(e)} name='email' type="email" placeholder="name@example.com" />
        </FloatingLabel>
        {emailValid && <div>
          <p className='text-danger'>Invalid email</p>
        </div>}
        
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control onChange={(e)=>setData(e)} name='password' type="password" placeholder="Password" />
        </FloatingLabel>
        {passwordValid && <div>
          <p className='text-danger'>Invalid password</p>
        </div>}
     </div>
    </div>
  );
}

export default App;
