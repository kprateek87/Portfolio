function Navbar() {
  const navItem = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Projects",
      link: "#",
    },
    {
      title: "Contact Me",
      link: "#",
    },
  ];
  return (
    <div className="flex justify-between items-center px-2 md:px-10">
      <div className="flex items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-900">
        <div className="">PK</div>
        <div className=" rotate-12 bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900">
          {" "}
          Dev.
        </div>
      </div>
      <ul className="flex items-center gap-5 hover:gap-7 hover:scale-125 duration-300 hover:blur-sm">
        {navItem.map((item, index) => (
          <li
            key={index}
            className="hover:scale-150 hover:!filter-none duration-300"
          >
            <a href={item.link} className="">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center flex-col md:flex-row">
        <button className="">Download CV</button>
        <button className="">Hire Me</button>
      </div>
    </div>
  );
}

export default Navbar;
