function AuthTemplate({ children }) {
  return (
    <>
      <div className="container flex justify-center mx-auto px-10">
        {children}
      </div>
    </>
  );
}

export default AuthTemplate;
