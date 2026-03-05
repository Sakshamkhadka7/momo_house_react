import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUsers = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const {
    loginWithRedirect: login, // Starts the login flow
  } = useAuth0();

  return (
    <div className="w-125 text-xl m-auto font-mono shadow-2xl rounded-sm shadow-black space-y-4 mt-20 p-16  ">
      <form
        onSubmit={(e) => {
          loginUsers(e);
        }}
        className=" space-y-4 "
      >
        <div>
          <label htmlFor="email">
            Email:
            <br />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border   outline-none rounded-2xl p-3 w-full"
              id="email"
              type="email"
              placeholder="Enter email...."
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <br />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border   outline-none rounded-2xl p-3 w-full"
              id="password"
              type="tel"
              placeholder="Enter Password...."
            />
          </label>
        </div>

        <button 
        
        className="bg-green-500 text-white w-full p-4   font-bold ">
          Login
        </button>
      </form>

      <button className="border  flex items-center justify-center gap-x-4 p-4 w-full"
       onClick={()=> login()}
      >
        Login With Google
        
        <FcGoogle size={25} />
      </button>
    </div>
  );
}

export default Login;
