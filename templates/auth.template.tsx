import { Footer } from "../components";

function AuthTemplate({ children }) {
  return (
    <>
      <div
        className="container flex justify-center mx-auto px-10"
        style={{
          // full height - header
          minHeight: "calc(100vh - 50px)",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}

export default AuthTemplate;
