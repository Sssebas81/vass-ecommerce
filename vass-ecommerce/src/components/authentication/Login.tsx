import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError("");

  try {
    const { user } = await loginUser(email, password);

    if (!user.email_confirmed_at) {
      setError("Debes verificar tu email antes de iniciar sesión.");
      return;
    }

    navigate("/Home");
  } catch (err: any) {
    setError(err.message || "Error inesperado. Intenta de nuevo.");
  }
};


  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/img/LoginBackground.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">

        <div className="bg-black p-12 w-1/2 flex flex-col justify-center text-white rounded-l-3xl">
          <img src="/img/LogoVassBlanco.svg" alt="Logo" className="h-10 w-auto mb-8" />
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

        <div className="w-1/2 p-16 bg-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center mb-8">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
                placeholder="Enter your password"
                required
              />
            </div>

            <p className="text-red-500 text-sm text-center h-5">
              {error || " "}
            </p>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>

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
