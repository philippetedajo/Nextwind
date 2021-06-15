import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../_types/auth_types";
import { registerSchema } from "../../utils/Schema";
import AuthTemplate from "../../templates/auth.template";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onRegister)}>
        <h1 className="mb-10 mt-16">Register</h1>
        <h2>Create your account in a few clicks</h2>
        <p className="mt-2 mb-5 text-gray-400 ">Welcome amongs us</p>

        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col md:pr-2">
            <label className="mb-2">Firstname *</label>
            <input
              className="input-form mb-1"
              type="text"
              {...register("firstname")}
            />
            <small className="mt-1 mb-1 text-red-500">
              {errors.firstname?.message}
            </small>
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-2">Lastname </label>
            <input
              className="input-form mb-1"
              type="text"
              {...register("lastname")}
            />
            <small className="mt-1 mb-1 text-red-500">
              {errors.lastname?.message}
            </small>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          <label>Phone *</label>
          <input
            className="input-form my-2"
            type="text"
            {...register("phone")}
          />
          <small className="mt-1 text-red-500">{errors.phone?.message}</small>
        </div>

        <div className="flex flex-col mb-3">
          <label>Password *</label>
          <input
            className="input-form my-2"
            type="password"
            {...register("password")}
          />
          <small className="mt-1 mb-1 text-red-500">
            {errors.password?.message}
          </small>
        </div>

        <button
          type="submit"
          className="btn w-full bg-blue-600 text-white mt-3 pb-3"
        >
          CREATE ACCOUNT
        </button>
        <p className="my-5 text-center">
          Already have an account ?
          <Link href="/auth/login">
            <span className="text-blue-600 cursor-pointer"> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

Register.Template = AuthTemplate;
