import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Newsletter = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    axiosPublic
      .post("newsletter", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: `${res.data.message}`,
          });
        }
      })
      .catch((error) => console.log(error));
    console.log(data);
  };
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6 text-base-content/80">
          Enter your name and email to get the latest updates!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="text"
            {...register("name")}
            placeholder="Your name"
            className="input input-bordered w-full sm:w-auto flex-1"
            required
          />
          <input
            type="email"
            {...register("email")}
            placeholder="Your email"
            className="input input-bordered w-full sm:w-auto flex-1"
            required
          />
          <input
            className="btn btn-primary w-full sm:w-auto"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
