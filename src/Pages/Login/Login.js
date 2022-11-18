import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelLogin = (data) => {
    console.log(data);
    loginUser(data.email, data.Password)
      .then((result) => {
        setLoginError("");
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-8 shadow-lg rounded-lg border">
        <h2 className="text-4xl font-semibold text-center mb-6">Login</h2>
        <div>
          {loginError && (
            <p className="text-sm text-center font-semibold bg-red-400 text-white rounded-full">
              {loginError}
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              {...register("email", { required: "Abe sale email address kon dega" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <div className="alert alert-warning shadow-lg mt-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p role="alert">{errors.email?.message}</p>
                </div>
              </div>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>{" "}
            </label>
            <input
              type="Password"
              {...register("Password", {
                required: "Bhai tu kya kar raha hai",
                minLength: { value: 6, message: "kam se kam 6 character to de" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.Password && (
              <div className="alert alert-warning shadow-lg mt-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p role="alert">{errors.Password?.message}</p>
                </div>
              </div>
            )}
            <label className="label">
              <span className="label-text">Forgot Password ?</span>{" "}
            </label>
          </div>

          <input type="submit" value="Login" className="btn w-full max-w-xs mt-4 text-white" />
        </form>
        <p className="text-sm mt-3">
          New to Doctors Portal?{" "}
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full mt-2">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
