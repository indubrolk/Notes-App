import React from 'react'

const PasswordInput = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return(
        <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">PasswordInput
            <input value={value}
                   onChange = {onChange}
                   type={isShowPassword ? "text" : "password"}
                   placeholder={placeholder || "Password"}
                   className="w-full text-"
            />
        </div>
    )
}

export default PasswordInput;