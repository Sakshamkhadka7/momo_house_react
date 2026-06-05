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

  const { loginWithRedirect: login } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0C6967]">Welcome Back</h1>
          <p className="text-gray-500 mt-1 text-sm">Sign in to your account</p>
        </div>

        <form onSubmit={loginUsers} className="space-y-5">
          <div>
            <label htmlFor="email" className="font-semibold text-sm text-gray-700">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border outline-none rounded-xl p-3 w-full mt-1 focus:ring-2 focus:ring-[#0C6967]"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="font-semibold text-sm text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border outline-none rounded-xl p-3 w-full mt-1 focus:ring-2 focus:ring-[#0C6967]"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#0C6967] hover:bg-[#094f4d] transition-colors text-white w-full py-3 rounded-xl font-bold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <hr className="flex-1" />
          <span>or</span>
          <hr className="flex-1" />
        </div>

        <button
          onClick={() => login()}
          className="border hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 p-3 w-full rounded-xl font-medium"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
