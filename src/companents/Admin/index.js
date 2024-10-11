import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../redux/Slices/AdminSlice";
import { LuUserCircle2 } from "react-icons/lu";

// import { addUser } from "../../redux/Slices/AdminSlice";

const Admin = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userImage, setUserImage] = useState("");
  const { user } = useSelector((s) => s.userSl);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setUserImage(reader.result);
    reader.readAsDataURL(file);
  };

  const userAdmi = () => {
    if(userPassword === "123"){
      let newUser = {
        id: 1,
        name: userName,
        email: userEmail,
        mobile: userMobile,
        password: userPassword,
        url: userImage,
      };
      nav("/");
  
      return dispatch(addUser(newUser));
    }else{
      alert("Неверный пароль")
    }
    
  };

  return (
    <div className=" container py-[60px]">
      {user.url ? (
        <img className="w-[80px]" src={user.url} alt="img" />
      ) : (
        <div className=" flex items-center justify-center flex-col gap-10">
          <div>
            {user.url ? (
              <img className="w-[200px] h-[200px]" src={user.url} alt="img" />
            ) : (
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6 w-[450px]">
                    <a className="text-white text-[94px]">
                      <LuUserCircle2 />
                    </a>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={onChange}
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          <input
            onChange={(e) => setUserName(e.target.value)}
            className="text-[25px] text-white  bg-transparent border-2 p-2 rounded-xl pr-40"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            className="text-[25px] text-white  bg-transparent border-2 p-2 rounded-xl pr-40"
            type="text"
            placeholder="Email:"
          />
          <input
            onChange={(e) => setUserMobile(e.target.value)}
            className="text-[25px] text-white  bg-transparent border-2 p-2 rounded-xl pr-40"
            type="text"
            placeholder="Mobile No.:"
          />
          <input
            onChange={(e) => setUserPassword(e.target.value)}
            className="text-[25px] text-white  bg-transparent border-2 p-2 rounded-xl pr-40"
            type="password"
            placeholder="Password:"
          />

          <button
            onClick={() => userAdmi()}
            className="text-[#a93447] text-[20px] border-2 p-2 px-20 rounded-xl"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
