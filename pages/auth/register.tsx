import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../_types/auth_types";
import { registerSchema } from "../../utils/Schema";
import AuthTemplate from "../../templates/auth.template";

const Register = () => {
  const { register, handleSubmit, errors } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <div>
      <form className="w-96">
        <h1 className="mb-10 mt-16">Register</h1>
        <h2>Create your account in a few clicks</h2>
        <p className="mt-2 mb-5 text-gray-400 ">Welcome amongs us</p>

        <div className="flex flex-col mb-3">
          <label>Password</label>
          <input
            className="btn-form my-2"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="btn bg-blue-600 text-white  my-5">CREATE ACCOUNT</div>
        <p className="my-5 text-center">
          Already have an account ?
          <Link href="/auth/register">
            <span className="text-blue-600 cursor-pointer"> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

Register.Template = AuthTemplate;
