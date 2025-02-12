import React from 'react';
import Navbar from "../../components/Navbar/Navbar.jsx";
import {Link} from "react-router-dom";
import PasswordInput from "../../components/input/PasswordInput.jsx";


const Login = () => {

     const [email, setEmail] = React.useState("");
     const [password, setPassword] = React.useState("");
     const [error, setError] = React.useState(null);

 return (
     <>
     <Navbar />
         <div className="flex items-center justify-center mt-28">
             <div className="w-96 border rounded bg-white px-7 py-10">
                 <form onSubmit={() => {}}>
                     <h4 className="text-2xl mb-7">Login</h4>
                     <input type="text" placeholder="Email" className="input-box"
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}/>
                     <PasswordInput />

                     <button type="submit" className="btn-primary">
                         Login
                     </button>

                     <p className="text-sm text-center mt-4">
                         Not registered yet?{" "}
                         <Link to="/Signup" className="font-medium text-blue-500 underline">
                             Create an account
                         </Link>
                     </p>

                 </form>
             </div>
         </div>

     </>
 );
};
export default Login;