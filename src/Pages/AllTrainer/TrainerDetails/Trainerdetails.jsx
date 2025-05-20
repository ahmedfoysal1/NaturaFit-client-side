import { useLoaderData } from "react-router-dom";

const TrainerDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return <div></div>;
};

export default TrainerDetails;
