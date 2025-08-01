import han from "../assets/images/han.jpeg";
import about from "../assets/images/about.svg";
import project1 from "../assets/images/proyek-1.webp";
import project2 from "../assets/images/proyek-2.webp";
import project3 from "../assets/images/proyek-3.webp";
import project4 from "../assets/images/proyek-4.webp";
import project5 from "../assets/images/proyek-5.webp";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid gap-20 md:grid-cols-2 grid-cols-1 items-center pt-32">
          <div className="box text-white animate__animated animate__fadeIn animate__delay-1s">
            <h1 className="lg:text-5xl/tight text-3xl font-bold text-white mb-7 animate__animated animate__fadeIn animate__delay-2s">
              Raihan Ramona Putra<span className="text-white lg:text-4xl text-2xl"> Frontend Developer</span>
            </h1>
            <p className="text-base/8 mb-7 animate__animated animate__fadeIn animate__delay-3s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime et non enim libero dolores vel eum nostrum minus. Facilis?</p>
            <a href="#" className="bg-indigo-500 hover:bg-indigo-600 transition-all py-2 px-4 text-white shadow rounded-full animate__animated animate__fadeIn animate__delay-4s">
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box animate__animated animate__fadeIn animate__delay-5s">
            <img src={han} alt="hero image" className=" w-[400px] md:w-[400px] mx-auto shadow-black md:m-0 opacity-0 animate__animated animate__fadeIn animate__delay-6s" />
          </div>
        </div>

        {/* about */}
        <div id="about">
          <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-10 md:pt-22 pt-32">
            <div className="box md:order-1 order-2 animate__animated animate__fadeIn animate__delay-2s">
              <img src={about} alt="aboutme" className="lg:w-[500px] w-[400px] md:m-0 mx-auto animate__animated animate__fadeIn animate__delay-3s" />
            </div>
            <div className="box text-white md:order-2 order-1 animate__animated animate__fadeIn animate__delay-4s">
              <h1 className="lg:text-5xl/tight font-bold text-3xl mb-7 animate__animated animate__fadeIn animate__delay-5s">
                Belajar Membuat Website dengan <span className="underline">tailwind css</span>
              </h1>
              <p className="text-base/loose animate__animated animate__fadeIn animate__delay-6s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime et non enim libero dolores vel eum nostrum minus. Facilis?</p>
            </div>
          </div>
        </div>
        {/* akhir about */}

        {/* layanan */}
        <div id="services">
          <div className="services pt-32 mb-20">
            <h1 className="text-center font-bold text-white lg:text-5xl/tight text-3xl mb-4 animate__animated animate__fadeIn animate__delay-1s">Layanan</h1>
            <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="box bg-red-500 rounded-lg shadow p-4 animate__animated animate__fadeIn animate__delay-2s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <i className="ri-number-1 text-3xl text-white"></i>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 1</h3>
                <p className="text-white text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="box bg-red-500 rounded-lg shadow p-4 animate__animated animate__fadeIn animate__delay-3s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <i className="ri-number-2 text-3xl text-white"></i>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 2</h3>
                <p className="text-white text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="box bg-red-500 rounded-lg shadow p-4 animate__animated animate__fadeIn animate__delay-4s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <i className="ri-number-3 text-3xl text-white"></i>
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 3</h3>
                <p className="text-white text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
        {/* akhir layanan */}

        {/* project */}
        <div id="project">
          <div className="project pt-32">
            <h1 className="text-center lg:text-5xl/tight text-3xl font-bold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">Project</h1>
            <div className="project-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <div className="box p-2 bg-slate-800 shadow animate__animated animate__fadeIn animate__delay-2s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img src={project1} alt="Project" className="w-full h-[220px]" />
                <h3 className="text-xl font-bold mt-6 mb-2 hover:underline transition duration-200">Project Name</h3>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</p>
              </div>
              <div className="box p-2 bg-slate-800 shadow animate__animated animate__fadeIn animate__delay-3s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img src={project2} alt="Project" className="w-full h-[220px]" />
                <h3 className="text-xl font-bold mt-6 mb-2 hover:underline transition duration-200">Project Name</h3>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</p>
              </div>
              <div className="box p-2 bg-slate-800 shadow animate__animated animate__fadeIn animate__delay-4s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img src={project3} alt="Project" className="w-full h-[220px]" />
                <h3 className="text-xl font-bold mt-6 mb-2 hover:underline transition duration-200">Project Name</h3>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</p>
              </div>
              <div className="box p-2 bg-slate-800 shadow animate__animated animate__fadeIn animate__delay-5s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img src={project4} alt="Project" className="w-full h-[220px]" />
                <h3 className="text-xl font-bold mt-6 mb-2 hover:underline transition duration-200">Project Name</h3>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</p>
              </div>
              <div className="box p-2 bg-slate-800 shadow animate__animated animate__fadeIn animate__delay-6s transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img src={project5} alt="Project" className="w-full h-[220px]" />
                <h3 className="text-xl font-bold mt-6 mb-2 hover:underline transition duration-200">Project Name</h3>
                <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</p>
              </div>
            </div>
          </div>
        </div>
        {/* akhir project */}
      </div>
    </div>
  );
};

export default HomePage;
