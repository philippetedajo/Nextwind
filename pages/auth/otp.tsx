import AuthTemplate from "../../templates/auth.template";

const Otp = () => {
  return (
    <div className="w-96 lg:w-2/5">
      <div>
        <h1 className="mb-10 mt-16">Phone Verification </h1>
        <h2>A small step to verify your identity</h2>

        <p className="mt-2 mb-5 text-gray-400 ">Enter the code you receive</p>

        <button
          type="submit"
          className="btn w-full bg-blue-600 text-white mt-3 pb-3"
        >
          SIGN IN
        </button>
        <p className="my-5 text-center">
          Don't have an account yet ?
          <span className="text-blue-600 cursor-pointer"> Join</span>
        </p>
      </div>
    </div>
  );
};

export default Otp;

Otp.Template = AuthTemplate;
