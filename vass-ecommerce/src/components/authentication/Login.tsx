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
      return;
    }

    if (email === "sofi.ag_1207@gmail.com" && password === "Sarawat") {
      alert("Login successful!");
      navigate("/");
      return;
    }

    if (email === "valery.bravo09@gmail.com" && password === "Laqueen") {
      alert("Login successful!");
      navigate("/");
      return;
    }

    if (email === "ana_gq14@gmail.com" && password === "Deporcali") {
      alert("Login successful!");
      navigate("/");
      return;
    }

    setError("Invalid email or password");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img/LoginBackground.jpg')" }}
    >
      <div className="flex bg-white bg-opacity-95 rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">
        {/* Lado izquierdo */}
        <div className="bg-black p-12 w-1/2 flex flex-col justify-center text-white rounded-l-3xl">
          <div className="flex flex-col items-start">
            <img
              src="/img/LogoVassBlanco.svg"
              alt="Logo Vass"
              className="h-10 w-auto mb-8"
            />
            <div className="h-1 w-full bg-cyan-500"></div>
            <div className="h-1 w-full bg-[#E2F705]"></div>
            <div className="h-1 w-full bg-pink-500"></div>
            <div className="h-1 w-full bg-orange-500"></div>

            <div className="mt-16">
              <h2 className="text-5xl font-light">Hello,</h2>
              <h2 className="text-6xl font-bold mt-2">Welcome!</h2>
              <p className="text-lg text-gray-300 mt-10 leading-relaxed">
                E-commerce that combines quality, trust, and the best prices in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="w-1/2 p-16 bg-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your email"
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
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your password"
                required
              />
            </div>

            {error ? (
              <p className="text-red-500 text-sm text-center h-5">{error}</p>
            ) : (
              <p className="invisible text-sm text-center h-5">placeholder</p>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex justify-center space-x-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                alt="Google"
                className="h-8 cursor-pointer"
              />
              <img
                src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
                alt="Apple"
                className="h-8 cursor-pointer"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="h-8 cursor-pointer"
              />
            </div>

            <div className="flex justify-center text-sm text-gray-600 mt-6">
              <NavLink to="/signup" className="hover:underline">
                Don’t have an account?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
