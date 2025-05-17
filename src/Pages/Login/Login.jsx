import Lottie from "lottie-react";

import loginLottie from "../../assets/loginLottie.json";

const Login = () => {
  return (
    <div>
      <Lottie animationData={loginLottie} loop={true} />;
    </div>
  );
};

export default Login;
