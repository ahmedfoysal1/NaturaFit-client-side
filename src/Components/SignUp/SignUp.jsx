import Lottie from "lottie-react";

import signUpLottie from "../../assets/signupLottie.json";
import SocialLogin from "../../Pages/Shared/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Signup = () => {
  const { signUpUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signUpUser(data.email, data.password)
      .then((res) => {
        console.log(res);
        updateUserProfile(data.name, data.photo)
          .then((res) => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                navigate("/");
              }
            });
          })
          .catch((error) => console.log(error));
        toast.success("Successfully Created Account");
      })
      .catch((error) => console.log(error));

    console.log(data);
  };
  return (
    <div className="hero mx-auto my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96 lg:w-1/3">
          <Lottie animationData={signUpLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
              <label className="label">Name</label>
              <input
                type="Text"
                className="input"
                placeholder="Name"
                {...register("name")}
              />
              <label className="label">PhotoURL</label>
              <input
                type="Text"
                className="input"
                placeholder="PhotoURL"
                {...register("photo")}
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                {...register("email")}
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password")}
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input type="submit" className="btn" />
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
