// TODO ADD IN A THREEJS ANIMATED CUBE TO THE RIGHT OR SOMETHING ANIMATED TO LOOK COOL
import { HashLink as Link } from "react-router-hash-link";
const Home = () => {
  return (
    <section id="#" className="bg-gray-900 w-full h-screen">
      <div className="flex flex-col gap-3 font-mono w-3/6 h-screen p-20 ml-40 pt-40">
        <small className="text-green-400">Hi, my name is</small>
        <h1 className="text-8xl text-zinc-400 font-bold">Ben Smerd.</h1>
        <h2 className="text-zinc-50 text-5xl">
          I am a full-stack web developer.
        </h2>
        <h3 className="text-zinc-400 leading-8 pb-3 border-b-solid border-b-gray-600 border-b-2">
          I like to build dynamic and creative front-end applications while
          integrating logical and smooth running back-end databases and APIs.
        </h3>
        <div className="flex gap-12 items-center  mt-3">
          <Link
            className="w-60 text-cyan-100 border-solid border-2 border-green-400 p-3 text-center rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 transition-all"
            smooth
            to="#projects"
          >
            Check out my Projects!
          </Link>
          <ul className="flex gap-12 text-5xl text-green-500">
            <li>
              <a href="https://github.com/TheBigBookMan" target="_blank">
                <i className="fa-brands fa-github hover:text-cyan-100"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bensmerd/" target="_blank">
                <i className="fa-brands fa-linkedin hover:text-cyan-100"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/smerdy/" target="_blank">
                <i className="fa-brands fa-instagram hover:text-cyan-100"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BenSmerd" target="_blank">
                <i className="fa-brands fa-twitter hover:text-cyan-100"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
