import { useEffect, useState } from "react";
const Navbar = () => {
  const [isklik, setOKE] = useState(false);
  const [scroll, setScroll] = useState(false);
  const tombol = () => {
    setOKE(!isklik);
  };
  let menuActive = isklik ? "left-0" : "-left-full";
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        // console.log("testing");
        setScroll(true);
        setOKE(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-slate-800 shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full z-50 transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex item-center justify-between">
          <div className="logo">
            <h1 className="text-3xl font-bold text-white">Portofolio</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-white md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-red-500 font-bold text-white transition-all`}
          >
            <li>
              <a href="#home" className=" text-lg font-medium hover:text-indigo-400 hover:underline transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg font-medium hover:text-indigo-400 hover:underline transition duration-200">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg font-medium hover:text-indigo-400 hover:underline transition duration-200">
                Layanan
              </a>
            </li>
            <li>
              <a href="#project" className="text-lg font-medium hover:text-indigo-400 hover:underline transition duration-200">
                Project
              </a>
            </li>
          </ul>
          <div className="social flex item-center gap-2">
            <a href="#social" className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-full text-white font-bold transition-all">
              Social Media
            </a>
            <i className="ri-menu-fold-fill text-3xl md:hidden block" onClick={tombol}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
