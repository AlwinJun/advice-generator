import { useEffect, useState } from "react";

import Advice from "components/Advice";
import Dice from "components/Dice";

import dividerMobile from "images/pattern-divider-mobile.svg";
import dividerDesktop from "images/pattern-divider-desktop.svg";

function App() {
  const [id, setId] = useState(1);
  const [advices, setAdvices] = useState({});

  useEffect(() => {
    const getAdvice = async (id) => {
      const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const advice = await response.json();
      setAdvices(advice.slip);
    };
    getAdvice(id);
  }, [id]);

  const getId = () => {
    const randomId = Math.ceil(Math.random() * 200);
    setId(randomId);
  };

  return (
    <>
      <div className="grid h-screen w-screen place-items-center bg-blue-dark font-manrope">
        <article className="relative w-[20em] rounded-lg bg-blue-darkGrayish p-6	text-center md:w-[28em]">
          <Advice id={advices.id} body={advices.advice} />
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
          <Dice getId={getId} />
        </article>
      </div>
    </>
  );
}

export default App;
