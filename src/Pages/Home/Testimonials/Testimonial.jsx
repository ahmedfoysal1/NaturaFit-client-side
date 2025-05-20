import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide>
          <div className="mx-24 my-16 flex flex-col items-center">
            <p className="text-5xl py-2">
              <FaQuoteLeft />
            </p>
            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <p className="py-3">{review.details}</p>
            <h2 className="text-2xl text-orange-400">{review.name}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
