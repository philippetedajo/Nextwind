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
    <div className="border w-96">
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

        <div className="btn bg-blue-600 text-white my-8">SIGN IN</div>
        <p className="my-5 text-center">
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
