import { Header, Footer } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <div
        className="px-10 py-5"
        style={{
          // full height - header - footer
          minHeight: "calc(100vh - 64px - 50px )",
        }}
      >
        {children}
      </div>

      <Footer />
    </>
  );
}

export default PageTemplate;
