import dice from "images/icon-dice.svg";
import dividerMobile from "images/pattern-divider-mobile.svg";
import dividerDesktop from "images/pattern-divider-desktop.svg";

function App() {
  console.log(dividerMobile);
  return (
    <>
      <div className="grid h-screen w-screen place-items-center bg-blue-dark font-manrope">
        <article className="relative w-[20em] rounded-lg bg-blue-darkGrayish p-6	text-center md:w-[28em]">
          <h4 className="mb-4 text-sm tracking-widest text-neon">
            Advice #117
          </h4>
          <p className="mb-6 text-primary font-extrabold leading-snug text-cyan">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad
            fuga laboriosam exercitationem doloribus rerum nostrum rem enim
            quibusdam delectus, repellat voluptatum, a impedit"
          </p>
          <div className="mb-6">
            <img
              className="mx-auto md:hidden"
              src={dividerMobile}
              alt="divider pattern"
            />
            <img
              className="mx-auto hidden md:block"
              src={dividerDesktop}
              alt="divider pattern"
            />
          </div>
          <div className="absolute -bottom-6 left-2/4 grid h-12 w-12 -translate-x-1/2	cursor-pointer place-items-center rounded-full bg-neon duration-200 hover:shadow-[0px_0px_30px_4px_hsl(150,100%,66%)]">
            <img src={dice} alt="dice" />
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
