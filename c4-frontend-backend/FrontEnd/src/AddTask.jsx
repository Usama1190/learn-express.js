import { useForm } from "react-hook-form";
import { postData } from "./api/axios";

export default function AddTask() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await postData("tasks/add", data);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("task", { required: true })} />
      <input {...register("created_at", { required: true })} />
      <input type="submit" />
    </form>
  );
}
