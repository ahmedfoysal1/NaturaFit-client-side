import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Betrainer = () => {
  const { user } = useAuth();
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const options = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednessday", label: "Wednessday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];
  return (
    <div>
      <h1>BE A TRAINER</h1>
      <div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              defaultValue={user.displayName}
              {...register("name")}
              className="input"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              readOnly
              className="input"
            />
            <label className="label">Age</label>
            <input type="number" className="input" placeholder="age" />
            <div className="grid grid-cols-3 gap-2 my-2">
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"Yoga"}
                  className="checkbox checkbox-info"
                />
                Yoga
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"Crossfit"}
                  className="checkbox checkbox-info"
                />
                Cross Fit
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"bodybuilding"}
                  className="checkbox checkbox-info"
                />
                Body Building
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"hiit"}
                  className="checkbox checkbox-info"
                />
                HIIT
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"martialarts"}
                  className="checkbox checkbox-info"
                />
                Martial Arts
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"functionalfitness"}
                  className="checkbox checkbox-info"
                />
                Functional Fitness
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"weighttraining"}
                  className="checkbox checkbox-info"
                />
                Wight Training
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"strengthtraining"}
                  className="checkbox checkbox-info"
                />
                Strength Training
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"zumba"}
                  className="checkbox checkbox-info"
                />
                zumba
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register("skills")}
                  value={"pilates"}
                  className="checkbox checkbox-info"
                />
                Pilates
              </label>
            </div>
            <Controller
              name="days"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isSearchable={false}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                />
              )}
            ></Controller>
            <input type="submit" className="btn btn-primary" value="Apply" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Betrainer;
