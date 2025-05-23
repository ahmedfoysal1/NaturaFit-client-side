import { useLoaderData, useParams } from "react-router-dom";

const TrainerBooked = () => {
  const data = useLoaderData();
  const { slot, id } = useParams();
  console.log(data, slot, id);
  return (
    <div>
      <h2 className="text-2xl">Booked page</h2>
    </div>
  );
};

export default TrainerBooked;
