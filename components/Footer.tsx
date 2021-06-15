export const Footer = () => {
  return (
    <div
      className="px-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center"
      style={{ height: "50px" }}
    >
      <ul className="flex flex-col text-center sm:flex-row">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/philippetedajo/nextJs-Stamina"
          >
            Support us ❤️
          </a>
        </li>
      </ul>
    </div>
  );
};
