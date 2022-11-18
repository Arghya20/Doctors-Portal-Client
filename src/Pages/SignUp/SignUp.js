import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignUpError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelSignup = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setSignUpError("");
        console.log(user);
        toast.success("User SignUp Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-8 shadow-lg rounded-lg border">
        <h2 className="text-4xl font-semibold text-center mb-5">Sign Up</h2>
        {signupError && (
          <p className="text-center font-semibold bg-red-400 text-white text-sm rounded-full">
            {signupError}
          </p>
        )}
        <form onSubmit={handleSubmit(handelSignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>{" "}
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Please Enter Your Name",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-400 text-sm font-semibold ml-2">*{errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Please Enter Your Email",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-400 text-sm font-semibold ml-2">*{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>{" "}
            </label>
            <input
              type="Password"
              {...register("password", {
                required: "Please Enter Password",
                minLength: { value: 6, message: "Minimum 6 character" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-400 text-sm font-semibold ml-2">*{errors.password.message}</p>
            )}
          </div>

          <input type="submit" value="Sign Up" className="btn w-full max-w-xs mt-4 text-white" />
        </form>
        <p className="text-sm mt-3">
          Already have an account
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full mt-2">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
