import { Helmet } from "react-helmet";
import img1 from "../../assets/images/banner img.jpg";
import { FaDumbbell, FaAppleAlt, FaRunning, FaHeartbeat } from "react-icons/fa";
import SimpleParallax from "simple-parallax-js";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const features = [
    {
      icon: <FaDumbbell className="text-4xl text-primary" />,
      title: "Personalized Workouts",
      description:
        "Get workout plans tailored to your fitness level, goals, and preferences.",
    },
    {
      icon: <FaAppleAlt className="text-4xl text-primary" />,
      title: "Nutrition Guidance",
      description:
        "Access meal plans and nutrition tips to fuel your body the right way.",
    },
    {
      icon: <FaRunning className="text-4xl text-primary" />,
      title: "Progress Tracking",
      description:
        "Track your workouts, calories burned, and performance over time.",
    },
    {
      icon: <FaHeartbeat className="text-4xl text-primary" />,
      title: "Health Insights",
      description:
        "Monitor your heart rate, BMI, and wellness stats with smart analytics.",
    },
  ];
  return (
    <div>
      <div className="hero">
        <Helmet>
          <title>NaturaFit | Home</title>
        </Helmet>
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
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="relative overflow-hidden group px-6 py-3 text-white font-semibold bg-transparent border border-white rounded-md">
              <span className="relative z-10">Hover Me</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-primary transition-all duration-200 ease-in-out group-hover:h-full z-0"></span>
            </button>
          </div>
        </div>
      </div>
      {/*feature card section */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">🔥 Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                key={index}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-300"
              >
                <div className="card-body items-center text-center">
                  {feature.icon}
                  <h3 className="card-title text-xl mt-4">{feature.title}</h3>
                  <p className="text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*about section */}
      <section className="bg-base-100 py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-4">
              About NaturaFit
            </h2>
            <p className="text-base-content mb-6 leading-relaxed">
              At <span className="font-semibold text-secondary">NaturaFit</span>
              , we believe fitness is more than just workouts—it's a lifestyle
              built on discipline, community, and natural transformation. Our
              mission is to empower individuals with modern tools and
              personalized plans to achieve real, lasting change.
            </p>
            <p className="text-base-content leading-relaxed">
              Whether you're just getting started or you're a seasoned athlete,
              our team of certified trainers and holistic wellness experts are
              here to guide you every step of the way. Together, let's build a
              healthier, stronger you.
            </p>
          </div>

          {/* Image / Illustration */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="2000">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80"
              alt="Fitness mission"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
