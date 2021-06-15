import AuthTemplate from "../../templates/auth.template";
import OtpInput from "react-otp-input";
import { useState } from "react";

const Otp = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const onChange = (otp) => {
    setCode(otp);
  };

  console.log(code);

  return (
    <div className="w-96 lg:w-2/5">
      <div>
        <h1 className="mb-10 mt-16">Phone Verification </h1>
        <h2>A small step to verify your identity</h2>

        <p className="mt-2 mb-5 text-gray-400 ">Enter the code you receive</p>

        <OtpInput
          value={code}
          onChange={onChange}
          numInputs={6}
          inputStyle="inputStyle"
          errorStyle="error"
          shouldAutoFocus
          separator={<span>-</span>}
          className="py-8 w-ful"
        />

        <button
          type="submit"
          className="btn w-full bg-blue-600 text-white mt-3 pb-3"
        >
          Submit
        </button>
        <p className="my-5">
          No Otp code ?{" "}
          <span className="text-blue-600 cursor-pointer"> Send again</span>
        </p>
      </div>
    </div>
  );
};

export default Otp;

Otp.Template = AuthTemplate;
