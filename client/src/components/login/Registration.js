import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  onchangeField,
  registersuccess,
} from "../../store/slices/registrationSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../../services/LocalStorageService";

function Registration() {
  const [userProfile, setUserProfile] = useState(null);
  axios.defaults.baseURL = "http://localhost:8000";
  const dispatch = useDispatch();
  const registerForm = useSelector((state) => state.register);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(registerForm);
    const { name, value, type, checked, files } = e.target;
    const nmValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    dispatch(onchangeField({ name, value: nmValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registerForm, "registerFormregisterForm");
    const data = new FormData();
    console.log("datatat", data);
    data.append("Name", registerForm.user.username);
    data.append("Email", registerForm.user.email);
    data.append("Password", registerForm.user.password);
    data.append("password_confirmation", registerForm.user.cpassword);
    data.append("Tc", registerForm.user.checkboxx);
    data.append("userProfile", userProfile);
    console.log(data.get("userProfile"), "userProfileuserProfile");
    axios
      .post("api/user/register", data)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(
            registersuccess({
              user: {},
              message: response.data.message,
              statusregister: true,
            })
          );
          storeToken(response.data.token);
          navigate("/dashboard");
        } else {
          dispatch(
            registersuccess({ message: response.data.message, statusregister: false })
          );
          setTimeout(() => {
            dispatch(registersuccess({ message: "" }));
          }, 5000);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    console.log(registerForm, "ddddddddddsddsfsdfsdfsdfs");
  });

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center text-4xl font-medium">Sign Up</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="UserName"
              onChange={handleChange}
              name="username"
              value={registerForm.user?.username || ""}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={registerForm.user?.email || ""}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={registerForm.user?.password || ""}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="cpassword"
              value={registerForm.user?.cpassword || ""}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              onChange={(e) => {
                setUserProfile(e.target.files[0]);
              }}
              name="userProfile"
              type="file"
            />
          </div>

          <div className="flex items-start space-x-3 py-6">
            <input
              type="checkbox"
              name="checkboxx"
              onChange={handleChange}
              checked={registerForm.user?.checkboxx || false}
              className="border-gray-300 rounded h-5 w-5"
            />

            <div className="flex flex-col">
              <h1 className="text-gray-700 font-medium leading-none">
                Agree to the Term & Conditions
              </h1>
            </div>
          </div>

          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            Sign Up
          </button>
          {registerForm?.message}
          <p className="text-center text-lg">
            Already Have a Account?
            <Link
              to="/"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Login In
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Registration;
