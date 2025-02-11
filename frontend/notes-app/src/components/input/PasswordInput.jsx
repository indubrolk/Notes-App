import React from 'react';

import { FaRegEye, FaRegEyeSlash} from "react-icons/fa6";

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
                   className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none  "
            />

            {isShowPassword ? <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}/>;

                <FaRegEyesSlash

                />

            }

        </div>
    )
}

export default PasswordInput;