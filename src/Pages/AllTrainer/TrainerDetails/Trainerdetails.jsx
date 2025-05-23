import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const TrainerDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [slotno, setSlotNot] = useState([]);
  const handleSlotNo = (slot) => {
    setSlotNot(slot);
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-center">
      <div className="border-[3px] border-blue-200 flex text-center justify-evenly mx-auto p-4 my-3 w-11/12 md:w-8/12">
        <div className="w-1/2">Trainer Info</div>
        <div className="divider divider-horizontal divider-start"></div>
        <div className="w-1/2">Available Slots</div>
      </div>
      <div className="w-8/12 mx-auto flex justify-evenly">
        <div className="w-1/2">
          <div className="card bg-base-100 shadow-sm">
            <figure className="lg:px-10 lg:pt-10">
              <img src={data.photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal divider-start"></div>
        <div className="flex flex-col w-1/2">
          {data.availableslots.map((slot, idx) => (
            <Link
              onClick={() => handleSlotNo(slot)}
              to={`/trainerbooked/${data._id}/${slot}`}
              key={idx}
              className="btn p-16 md:p-10 my-4"
            >
              {slot}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button className="btn w-1/3 my-2 p-8 text-lg bg-blue-200">
          Be A Trainer
          <FaCircleArrowRight />
        </button>
        <button onClick={handleBack} className="btn w-1/3 my-2 bg-blue-200">
          <FaArrowCircleLeft /> Back
        </button>
      </div>
    </div>
  );
};

export default TrainerDetails;
