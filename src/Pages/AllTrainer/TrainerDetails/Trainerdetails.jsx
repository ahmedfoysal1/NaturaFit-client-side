import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const TrainerDetails = () => {
  const trainer = useLoaderData();
  const navigate = useNavigate();
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
          {/* <div className="w-1/2 bg-base-100 shadow-sm space-y-3">
            <figure>
              <img src={trainer.photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="text-start">
              <h2 className="text-2xl font-semibold">
                <span className="font-bold">Trainer:</span> {trainer.name}
              </h2>
              <p className="font-semibold">
                <span className="text-xl font-bold">Details:</span>
                {trainer.details}
              </p>
              <p className="font-semibold"><span>Expertise:</span>{trainer.expertise}</p>
            </div>
          </div> */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <img
              src={trainer.photo}
              alt={trainer.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-800">
                {trainer.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{trainer.details}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {trainer.expertise.split(",").map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal divider-start"></div>
        <div className="flex flex-col w-1/2">
          {trainer.availableslots.map((slot, idx) => (
            <Link
              onClick={() => handleSlotNo(slot)}
              to={`/trainerbooked/${trainer._id}/${slot}`}
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
