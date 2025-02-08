import React from "react";
import Navbar from "../../components/Navbar.jsx";

const SignUp = () => {
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
                            placeholder="Email"
                            className="input-box"
                        />
                    </form>
                </div>
            </div>
        </>
);
};

export default SignUp;