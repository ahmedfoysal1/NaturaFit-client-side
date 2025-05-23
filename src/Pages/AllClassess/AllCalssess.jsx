import { useState } from "react";
import useClassess from "../../Hooks/useClassess";
import { IoSearch } from "react-icons/io5";

const AllCalssess = () => {
  const [search, setSeach] = useState("");
  const [classess] = useClassess(search);
  return (
    <div>
      <h2 className="text-3xl text-center text-blue-400 font-bold my-2">
        All Classes
      </h2>
      <div className="relative flex text-center items-center">
        <IoSearch className="absolute left-2" />
        <input
          onKeyUp={(e) => setSeach(e.target.value)}
          className="border w-64 p-2 px-8 rounded-lg"
          type="text"
          placeholder="Seach Classess"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classess.map((classs, idx) => (
          <div
            key={classs._id}
            className="card bg-base-100 shadow-sm border gap-3 m-3"
          >
            <figure className="w-ful h-60 object-cover">
              <img src={classs.image} alt="class" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCalssess;
