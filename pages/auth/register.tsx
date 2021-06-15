import AuthTemplate from "../../templates/auth.template";
import Router from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Register = () => {
  return (
    <div>
      <div
        className="absolute flex items-center left-0 ml-10 mt-5 cursor-pointer text-third"
        onClick={() => Router.back()}
      >
        <BiArrowBack className="mr-2" /> back
      </div>

      <form className="w-96">
        <h1 className="mb-10 mt-16">Register</h1>
        <h2>Create your account in a few clicks</h2>
        <p className="mt-2 mb-5 text-fourth ">Welcome amongs us</p>
        <div className="flex flex-col mb-3">
          <label>Username</label>
          <input className="btn-form my-2" type="text" placeholder="John Doe" />
        </div>

        <div className="flex flex-col mb-3">
          <label>Password</label>
          <input
            className="btn-form my-2"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col">
          <label>Confirm password</label>
          <input
            className="btn-form my-2"
            type="password"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-5 text-xs">
            <input className="mr-2" type="checkbox" />
            <span className="text-fourth">I agree to the</span>
            <span className="text-third ml-1">privacy policy</span>
          </div>
        </div>
        <div className="btn border-2 border-third bg-third text-secondary my-5">
          CREATE ACCOUNT
        </div>
        <p className="my-5 text-center">
          Already have an account ?<span className="text-third"> Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;

Register.Template = AuthTemplate;
