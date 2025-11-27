import supabase from "../../services/supabaseClient";
import { postUserData } from "../../services/Users";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

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

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      await postUserData(email);

      // show a non-blocking success modal and let the user navigate or auto-redirect
      setSuccessMessage("Cuenta creada con éxito. Por favor verifica tu correo electrónico.");
      setShowSuccess(true);
      // auto redirect after 5 seconds if they don't click Aceptar
      setTimeout(() => navigate("/"), 5000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/img/LoginBackground.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">

        <div className="bg-black p-12 w-1/2 flex flex-col justify-center text-white rounded-l-3xl">
          <img src="/img/LogoVassBlanco.svg" className="h-10 mb-8" />
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
                placeholder="you@example.com"
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
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3"
                placeholder="••••••••"
                required
              />
            </div>

            <p className="text-red-500 text-sm text-center h-5">{error || " "}</p>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Create Account
            </button>

            <div className="flex items-center my-4">
              <hr className="grow border-gray-300" />
              <span className="mx-2 text-gray-500 text-sm">or</span>
              <hr className="grow border-gray-300" />
            </div>

            <div className="flex justify-center text-sm text-gray-600 mt-6">
              <NavLink to="/" className="hover:underline">
                Already have an account?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-2">{successMessage}</h3>
            <p className="text-sm text-gray-600 mb-6">You will be redirected to login in a few seconds.</p>
            <div className="flex justify-end">
              <button
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setShowSuccess(false);
                  navigate('/');
                }}
              >
                AcCE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
