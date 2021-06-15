import AuthTemplate from "../../templates/auth.template";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../_types/auth_types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/Schema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="w-96 lg:w-2/5">
      <form onSubmit={handleSubmit(onLogin)}>
        <h1 className="mb-10 mt-16">Login</h1>
        <h2>Login to your account</h2>
        <p className="mt-2 mb-5 text-gray-400 ">Happy to meet you again</p>

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
          SIGN IN
        </button>
        <p className="my-5">
          Don't have an account yet ?
          <Link href="/auth/register">
            <span className="text-blue-600 cursor-pointer"> Join</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

Login.Template = AuthTemplate;
