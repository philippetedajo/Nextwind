import PageTemplate from "../templates/page.template";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p className="w-1/2 mt-5">
        Nextwind is a complete Next Js boilerplate designed with Tailwind css,
        allowing you to quickly start a Next js project, it currently has a an
        authentication layout and few pages.
      </p>
    </div>
  );
};

export default About;

About.Template = PageTemplate;
