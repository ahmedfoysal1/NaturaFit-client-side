import Lottie from "lottie-react";

import loginLottie from "../../assets/loginLottie.json";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Pages/Shared/SocialLogin/SocialLogin";

const Signin = () => {
  return (
    <div className="hero mx-auto my-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <SocialLogin></SocialLogin>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
