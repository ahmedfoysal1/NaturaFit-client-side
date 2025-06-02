import useTrainer from "../../Hooks/useTrainer";
import { TiDelete } from "react-icons/ti";

const Alltrainertable = () => {
  const [trainerss] = useTrainer();
  return (
    <div>
      <h2 className="font-bold text-xl text-blue-400">ALL TRAINER ---</h2>
      <div className="border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Expertise</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {trainerss.map((trainer, idx) => (
                <tr key={trainer._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={trainer.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{trainer.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{trainer.expertise}</td>
                  <td>
                    <p className="text-2xl text-red-400 hover:text-red-700">
                      <TiDelete />
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alltrainertable;
