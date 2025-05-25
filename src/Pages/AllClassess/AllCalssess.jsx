import { useState } from "react";
import useClassess from "../../Hooks/useClassess";
import { IoSearch } from "react-icons/io5";
import useTrainer from "../../Hooks/useTrainer";
import Drawer from "./Drawer";
import { useLoaderData } from "react-router-dom";
import "./allclassess.css";

const AllCalssess = () => {
  const [search, setSeach] = useState("");
  const { count } = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [classess] = useClassess(search, currentPage, itemsPerPage);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const handleItemsPerPage = (e) => {
    console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log(currentPage);
  return (
    <div>
      <div className="flex justify-between mx-3 text-center items-center">
        <h2 className="hidden md:flex md:text-2xl lg:text-3xl text-center text-blue-400 font-bold my-2">
          ALL CLASSESS
        </h2>
        <div className="relative flex text-center items-center gap-2 mx-auto md:mx-0">
          <IoSearch className="absolute left-2" />
          <input
            onKeyUp={(e) => setSeach(e.target.value)}
            className="border p-2 px-8 rounded-lg"
            type="text"
            placeholder="Seach Classess"
          />
          <Drawer></Drawer>
        </div>
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
              <h2 className="text-xl font-semibold">{classs.name}</h2>
              <p>{classs.description}</p>
              <p className="font-bold">{classs.duration}</p>
              <p className="font-semibold">{classs.level}</p>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-9 space-x-2">
        <button onClick={handlePrev} className="btn">
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn ${currentPage === page ? "selected" : undefined}`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} className="btn">
          Next
        </button>
        <select value={itemsPerPage} onChange={handleItemsPerPage}>
          <option value="4">1</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default AllCalssess;
