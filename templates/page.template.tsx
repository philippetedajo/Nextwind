import { Header } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <div className="px-10 py-5">{children}</div>
    </>
  );
}

export default PageTemplate;
