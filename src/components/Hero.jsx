import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-1 pt-3">
        <img src={logo} alt="Sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/jdufresne12")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">
          OpenAi GPT-4
        </span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumz, 
        an open-source article summarizer 
        that transforms lengthy articles into 
        clear and consise summaries
      </h2>
    </header>
  );
};

export default Hero;
