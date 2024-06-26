"use client";
import { AdminContext } from "@/Context/AdminContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Login = ({ token }) => {
  const [error, setError] = useState(false);
  const { logIn, user } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((result) => {
        if (result) {
          console.log(result?.user?.accessToken);
          setLoading(false);
          token(result?.user?.accessToken).then((data) => {
            localStorage.setItem("token", data);
          });
          toast.success("Login Successfull.");
          e.target.reset();
          setError("");
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(
          err.message === "Firebase: Error (auth/invalid-credential)."
            ? "Password is Not matching."
            : err.message
        );
      });
  };
  if (user) {
    return router.push("/dashboard");
  }
  return (
    <div className="mt-[150px]">
      <form
        onSubmit={handleSubmit}
        className="mx-auto rounded-2xl p-5 max-w-lg"
        style={{ background: "rgb(11 82 11 / 50%)" }}
      >
        <h2 className="text-center text-white text-4xl my-5">Admin Login</h2>

        <div className="mb-5">
          <label htmlFor="email" className="label">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Write your Email."
            name="email"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="label">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Write your password."
            name="password"
            required
          />
        </div>

        <p className="text-red-500 mb-3">{error}</p>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {loading ? (
            <span>
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Processing...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
