import { useFormik } from "formik";
import React from "react";
import { loginInSchema } from "../validators/login";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate()
    const Formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginInSchema,
    onSubmit: async (user) => {
      try {
        const input = {
          username: user.email,
          password: user.password,
        };
        const {data, request} = await axios.post("http://139.59.86.126:9000/login", input);
        if(request.status === 200){
            localStorage.setItem("accessToken", data?.access_token)
            localStorage.setItem("refreshToken", data?.refresh_token)
            localStorage.setItem("user", data.user);
            if(data.user.role == "Admin"){
                navigate('/adDashboard')
            }else{
                navigate('/custDashboard')
            }
        }
      } catch {
        console.log("catch");
      }
    },
  });
  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    Formik;
  return (
    <div className="w-full h-screen px-2 flex gap-8 justify-center items-center font-Roboto bg-[#fff]">
      <div className="w-fit h-full hidden lg:flex items-center">
        <img
          className="w-[34.125rem]"
          src={"https://unocube.com/assets/images/banner-mob-one.jpg"}
          alt="Background_image"
        />
      </div>
      <div
        className="xl:basis-2/6 lg:basis-3/6 w-full h-fit px-4 flex flex-col items-start
                justify-strat space-y-12"
      >
        {/* Logo and headings */}
        <div className="w-full flex flex-col gap-12">
          <div className="w-full h-fit md:w-full flex flex-col lg:items-start md:items-center gap-10 ">
            {/* Headings */}
            <div className="w-fit h-fit flex flex-col gap-[9px] lg:w-full">
              <h2 className="text-[40px] font-semibold text-[#23275E] leading-[45px]">
                {"Welcome to Winshish IT Solutions"}
              </h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-8">
              <div className="w-full lg:w-full h-fit flex flex-col gap-[14px]">
                <div className="flex flex-col gap-1 ">
                  <label htmlFor="email">{"Email"}</label>
                  <input
                    autoComplete="off"
                    className="w-full p-4 h-12 
                          shadow-[0px_0px_10px_0px_rgba(3,27,89,0.30)]"
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="text-[red]">{errors.email}</p>
                  )}
                </div>
                {/* Password Field */}
                <div className="relative flex flex-col gap-1">
                  <label htmlFor="password">{"Password"}</label>
                  <input
                    autoComplete="off"
                    className="w-full p-4 h-12 
                          shadow-[0px_0px_10px_0px_rgba(3,27,89,0.30)]"
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.password && touched.password ? (
                  <p className="text-[red]">{errors.password}</p>
                ) : null}
              </div>
              <div className="relative flex flex-col gap-1">
                <button
                  className="w-full p-4 h-12 
                          shadow-[0px_0px_10px_0px_rgba(3,27,89,0.30)]"
                  type="submit"
                  id="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Right Side image */}
    </div>
  );
};

export default Login;
