import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import {onchangeInput,loginsuccess} from "../../store/slices/loginSlice";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { storeToken } from "../../services/LocalStorageService";

function UserLogin() {
  const [show, setShow] = useState(true);

  axios.defaults.baseURL = 'http://localhost:8000';

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginform = useSelector((state)=> state.login);

  const handleChange = (e) => {
   dispatch(onchangeInput({name:e.target.name,value:e.target.value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`api/user/login`,
    {Email: loginform.email, Password: loginform.password})
    .then(response => {
      if(response.data.status == 'success'){
        dispatch(loginsuccess({message:response.data.message,loginstatus:true}));
        storeToken(response.data.token);
        navigate('/dashboard');
      }else{
        dispatch(loginsuccess({message:response.data.message,loginstatus:false}));
        setTimeout(() => {
          dispatch(loginsuccess({message: ''}));
        }, 5000);
      }
    })
    .catch(error => {
      console.log("error",error);
    });
    
    
  }
  useEffect(()=>{
    console.log(loginform,"ddddddddddsddsfsdfsdfsdfs")
  })





  return (
    <form onSubmit={handleSubmit}>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Email" name="email" value={loginform?.email} onChange={handleChange} className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" placeholder="Password" value={loginform?.password} name="password" onChange={handleChange} className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
          </div>

          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">LOG IN</button>
          { loginform.message != '' && loginform?.message}
          <Link to="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</Link>

          <p className="text-center text-lg">
            No account?
            <Link to="/register" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</Link>
          </p>
        </section>
      </main>
    </form>
  )
}

export default UserLogin;