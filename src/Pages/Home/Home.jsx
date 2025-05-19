import img1 from "../../assets/images/banner img.jpg";
import SimpleParallax from "simple-parallax-js";

const Home = () => {
  return (
    <div className="hero">
      <div className="w-full">
        <SimpleParallax>
          <img className="h-[600px] w-full" src={img1} alt="" />
        </SimpleParallax>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
