import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGEBB_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Addnewclass = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the data to the server also with the img url
      const classess = {
        name: data.name,
        description: data.description,
        duration: `${data.duration} mins`,
        level: data.level,
        image: res.data.data.display_url,
      };
      const allclassessdata = await axiosSecure.post("/allclassess", classess);
      console.log(allclassessdata.data);
      if (allclassessdata.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
    // console.log(res.data);
  };
  return (
    <div>
      <div>
        <h2>ADD NEW CLASS</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
          <label className="label">Class name</label>
          <input
            type="text"
            className="input"
            {...register("name")}
            placeholder="Type your class name"
          />
          <label className="label">Description</label>
          <input
            {...register("description")}
            type="text"
            className="input"
            placeholder="Description"
          />
          <label className="label">Duration</label>
          <input
            {...register("duration")}
            type="text"
            className="input"
            placeholder="Duration"
          />
          <label className="label">Level</label>
          <input
            {...register("level")}
            type="text"
            className="input"
            placeholder="Hard/mid/all level"
          />
          <input {...register("image")} type="file" className="file-input" />
          <input type="submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Addnewclass;
