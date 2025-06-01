import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const NewsletterSubscriber = () => {
  const axiosSecure = useAxiosSecure();
  const { data: newsletter = [] } = useQuery({
    queryKey: ["news-letter"],
    queryFn: async () => {
      const res = await axiosSecure.get("/newsletter");
      return res.data;
    },
  });
  console.log(newsletter);
  return (
    <div className="w-full">
      <div>
        <h2 className="font-bold text-xl text-blue-400">NEWSLETTER SUBSCRIBERS ---</h2>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mail</th>
            </tr>
          </thead>
          <tbody>
            {newsletter.map((news, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{news.name}</td>
                <td>{news.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsletterSubscriber;
