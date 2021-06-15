import { Progress } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const EmptyTemplate = ({ children }) => <>{children}</>;
  const Template = Component.Template || EmptyTemplate;
  Progress();

  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default MyApp;
