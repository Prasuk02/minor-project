import React,{useState} from 'react' 
import { useNavigate } from 'react-router-dom';
import "./login.css";
const Register=()=>{ 
	let [dataInput, setDataInput]=useState({
    email:"",
    password:""
  }); 
  const handleChange=(e)=>{
    setDataInput({...dataInput,[e.target.name]:e.target.value });
  }
	const submitThis=(e)=>{
    e.preventDefault();
    dataInput={
      email:dataInput.email,
      password:dataInput.password
    }
    console.log(dataInput);

	}
    const navigate =useNavigate()
	return(
        <div className="Auth-form-container">
      <form action="" onSubmit={submitThis} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Username"
              name="email"
              onChange={handleChange} value={dataInput.email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              onChange={handleChange} value={dataInput.password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Don't have an account <a href="/Login">Create account</a>
          </p>
        </div>
      </form>
    </div>
	
)} 
export default Register 
