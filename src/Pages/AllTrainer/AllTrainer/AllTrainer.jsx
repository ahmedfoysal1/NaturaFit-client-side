import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useTrainer from "../../../Hooks/useTrainer";

const AllTrainer = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const [trainerss] = useTrainer();
  return (
    <div>
      <h2 className="text-3xl">All Trainer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-3">
        {trainerss.map((trainer, idx) => (
          <div
            key={trainer._id}
            data-aos="fade-up"
            data-aos-duration="2000"
            className="card card-side bg-base-100 shadow-xl p-4"
          >
            <figure>
              <img src={trainer.photo} alt="Movie" />
            </figure>
            <div className="card-body">
              <p>
                <span className="font-bold">Name:</span>
                {trainer.name}
              </p>
              <p>
                <span className="font-bold">Expertise:</span>
                {trainer.expertise}
              </p>
              <p>
                <span className="font-bold">Experience:</span>
                {trainer.experience} years
              </p>
              <div>
                <span className="font-bold">Available Slots:</span>
                {trainer.availableslots.map((slot, i) => (
                  <button key={i} className="btn btn-xs btn-soft btn-info ml-2">
                    {slot}
                  </button>
                ))}
                <div></div>
              </div>
              <div className="flex gap-2">
                {trainer.socials.map((social, i) => (
                  <div className="avatar">
                    <div className="w-5 rounded-full">
                      <img src={social} />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                className="text-blue-400 underline"
                to={`/trainer/${trainer._id}`}
              >
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default AllTrainer;
