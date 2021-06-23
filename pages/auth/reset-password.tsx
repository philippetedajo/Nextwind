import AuthTemplate from "../../templates/auth.template";
import { useForm } from "react-hook-form";
import { ResetPasswordForm } from "../../_types/auth_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../../utils/schema";

const Reset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onForgotPassword = (data) => {
    console.log(data);
  };

  return (
    <div className="w-96 lg:w-2/5">
      <form onSubmit={handleSubmit(onForgotPassword)}>
        <h1 className="mb-10 mt-8">Reset password </h1>
        <h2>Set a new password</h2>
        <p className="mt-2 mb-5 text-gray-400 ">Welcome back !</p>

        <div className="flex flex-col mb-3">
          <label>Password *</label>
          <input
            className="input-form my-2"
            type="text"
            {...register("password")}
          />
          <small className="mt-1 text-red-500">
            {errors.password?.message}
          </small>
        </div>

        <div className="flex flex-col mb-3">
          <label>Confirm password *</label>
          <input
            className="input-form my-2"
            type="text"
            {...register("confirm_password")}
          />
          <small className="mt-1 text-red-500">
            {errors.confirm_password?.message}
          </small>
        </div>

        <button
          type="submit"
          className="btn w-full bg-blue-600 text-white mt-3 pb-3"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Reset;

Reset.Template = AuthTemplate;
