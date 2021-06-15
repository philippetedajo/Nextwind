import AuthTemplate from "../../templates/auth.template";
import { useForm } from "react-hook-form";
import { ForgotPasswordFormOtp } from "../../_types/auth_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchemaOtp } from "../../utils/schema";

const Forgot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormOtp>({
    resolver: yupResolver(forgotPasswordSchemaOtp),
  });

  const onForgotPassword = (data) => {
    console.log(data);
  };

  return (
    <div className="w-96 lg:w-2/5">
      <form onSubmit={handleSubmit(onForgotPassword)}>
        <h1 className="mb-10 mt-16">Forgot password ?</h1>
        <h2>Get a new password</h2>
        <p className="mt-2 mb-5 text-gray-400 ">Set your phone number</p>

        <div className="flex flex-col mb-3">
          <label>Phone *</label>
          <input
            className="input-form my-2"
            type="text"
            {...register("phone")}
          />
          <small className="mt-1 text-red-500">{errors.phone?.message}</small>
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

export default Forgot;

Forgot.Template = AuthTemplate;
