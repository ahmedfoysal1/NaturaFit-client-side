import { useLoaderData, useParams } from "react-router-dom";
import useClassess from "../../../Hooks/useClassess";

const TrainerBooked = () => {
  const data = useLoaderData();
  const { slot } = useParams();
  const [classess] = useClassess();
  const specificClass = classess.filter(
    (classItem) => classItem.name.toLowerCase() === data.expertise.toLowerCase()
  );
  console.log(specificClass);
  return (
    <div>
      <h2 className="text-2xl text-center my-2 font-semibold text-blue-500">
        BOOK THIS TRAINER
      </h2>
      <div>
        <div className="bg-slate-300 p-3 my-3 w-11/12 mx-auto flex justify-evenly">
          <p>TRAINER NAME</p>
          <p>SLOT NO</p>
        </div>
        <div className="p-3 my-3 w-11/12 mx-auto flex justify-evenly">
          <p>{data.name}</p>
          <p>{slot}</p>
        </div>
      </div>
      {/* CLASSESS */}
      <div>
        <h2 className="text-4xl font-semibold text-center text-blue-500">
          ---CLASSESS---
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {specificClass.map((classItem) => (
          <div
            key={classItem._id}
            className="card bg-base-100 shadow-sm border gap-3 m-3"
          >
            <figure className="w-ful h-60 object-cover">
              <img src={classItem.image} alt="class" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-semibold">{classItem.name}</h2>
              <p>{classItem.description}</p>
              <p className="font-bold">{classItem.duration}</p>
              <p className="font-semibold">{classItem.level}</p>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerBooked;
