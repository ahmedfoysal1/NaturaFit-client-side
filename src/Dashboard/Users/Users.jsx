import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleSetStatus = (e, id, name) => {
    console.log(e.target.value, id);
    const data = {
      role: e.target.value,
    };
    axiosSecure
      .patch(`/users/admin/${id}`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${name} is an ${data.role} now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h2 className="font-bold text-xl text-blue-400">ALL USERS</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    onChange={(e) => handleSetStatus(e, user._id, user.name)}
                    defaultValue={user.role || "member"}
                    className="select"
                  >
                    <option>member</option>
                    <option>admin</option>
                    <option>trainer</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
