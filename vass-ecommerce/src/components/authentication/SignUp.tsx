import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    alert("Account created successfully!");
    navigate("/Login");
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/img/LoginBackground.jpg')" }}
    >
      {/* Capa de opacidad */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">

        {/* Lado izquierdo (igual al login) */}
        <div className="bg-black p-12 w-1/2 flex flex-col justify-center text-white rounded-l-3xl">
          <div className="flex justify-start">
            <img
              src="/img/LogoVassBlanco.svg"
              alt="Logo Vass"
              className="h-10 w-auto mb-8"
            />
          </div>

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

        {/* Lado derecho: formulario */}
        <div className="w-1/2 p-16 bg-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="••••••••"
                required
              />
            </div>

            {error ? (
              <p className="text-red-500 text-sm text-center h-5">{error}</p>
            ) : (
              <p className="invisible text-sm text-center h-5">placeholder</p>
            )}

            <NavLink to="/">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Create Account
              </button>
            </NavLink>


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
              <NavLink to="/Login" className="hover:underline">
                Already have an account?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
