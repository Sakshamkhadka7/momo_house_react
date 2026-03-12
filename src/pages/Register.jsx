import { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:9000/api/user";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const registerUser = async (e) => {
    e.preventDefault();
    // console.log(name, image, email, password);
    // TODO: Add API call here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <form
        onSubmit={registerUser}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 md:p-12 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-[#D95103]">
          Register
        </h1>

        {/* Name */}
        <div>
          <label htmlFor="userName" className="font-semibold text-lg">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="border outline-none rounded-xl p-3 w-full mt-2 focus:ring-2 focus:ring-orange-400"
            id="userName"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border outline-none rounded-xl p-3 w-full mt-2 focus:ring-2 focus:ring-orange-400"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="font-semibold text-lg">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border outline-none rounded-xl p-3 w-full mt-2 focus:ring-2 focus:ring-orange-400"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label htmlFor="userImage" className="font-semibold text-lg">
            Profile Image
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className="border outline-none rounded-xl p-3 w-full mt-2"
            id="userImage"
            type="file"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-orange-500 text-white w-full p-4 rounded-xl font-bold hover:bg-orange-600 transition">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;