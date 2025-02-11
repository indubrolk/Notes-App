import React from "react";
import Navbar from "../../components/Navbar.jsx";
import {Link} from "react-router-dom";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
    };

    return (
        <>
        <Navbar />

            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-18">
                    <form onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-7">Login</h4>

                        <input
                            type="text"
                            placeholder="Name"
                            className="input-box"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            className="input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                       <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       />

                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/Signup" className="font-medium text-blue-500 underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
);
};

export default SignUp;