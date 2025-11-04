import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (email === "sebasor81@gmail.com" && password === "JSOA/1811") {
      alert("Login successful!");
      navigate("/");
    } else {
      setError("Invalid email or password");
    } if (email === "sofi.ag_1207@gmail.com" && password === "Sarawat") {
      alert("Login successful!");
      navigate("/");
    } else {
      setError("Invalid email or password");
    } if (email === "valery.bravo09@gmail.com" && password === "Laqueen") {
      alert("Login successful!");
      navigate("/");
    } else {
      setError("Invalid email or password");
    } if (email === "ana_gq14@gmail.com" && password === "Deporcali") {
      alert("Login successful!");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Log in to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <NavLink to ="/signup">
            <a href="#" className="text-gray-800 font-medium hover:underline">
              Sign up
            </a>
          </NavLink>

        </p>
      </div>
    </div>
  );
};

export default Login;
