import "./index.css"
import React from "react";
import Questions from "./Questions";
import { questions } from "./faq"
import img_1 from "./images/bg-pattern-desktop.svg"
import img_2 from "./images/bg-pattern-mobile.svg"
import img_3 from "./images/illustration-box-desktop.svg"
import img_4 from "./images/illustration-woman-online-desktop.svg"
import img_5 from "./images/illustration-woman-online-mobile.svg"
function App()
{

  return (

    // MAIN
    <div className="App w-screen h-screen bg-gradient-to-t from-Soft-blue to-Soft-violet flex justify-center items-center font-kumbh">
      {/* WHITE BOX */}
      <div className="content w-3/5 h-3/4 bg-[#fff] rounded-2xl flex items-center justify-between  shadow-2xl Mobile:w-4/5 Mobile:flex-col Mobile:mt-[5rem] Mobile:justify-center Mobile:relative">

        {/* LEFT */}
        <div className="left w-1/2  relative h-full Mobile:w-full Mobile:h-1/5 Mobile:absolute Mobile:top-0">
          <div className="box relative w-full h-full overflow-hidden Mobile:invisible Mobile:hidden ">

            {/* Desktop */}
            <img src={img_4} alt="img" className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[4rem] Mobile:hidden Mobile:invisible" />

            {/* Desktop */}
            <img src={img_1} alt="img" className="absolute z-30 bottom-0  inset-1/2 -translate-y-1/2 -ml-2 -left-[3rem] Mobile:hidden Mobile:invisible" />
          </div>
          {/* Desktop */}
          <img src={img_3} alt="img icon" className="absolute z-10 -left-[6rem] top-1/2 -translate-y-1/2 mt-[2rem] Mobile:hidden Mobile:invisible" />
          {/* Mobile */}
          <img src={img_2} alt="" className="absolute left-1/2 -translate-x-1/2 w-3/5 Mobile:block hidden" />
          <img src={img_5} alt="" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 -top-[1rem] hidden Mobile:block" />
        </div>
        {/* RIGHT */}
        <div className="right w-1/2 flex flex-col gap-2 pr-[4rem] Mobile:w-full Mobile:p-8 Mobile:h-9/12">
          <h3 className="uppercase font-lg text-[2rem] Mobile:text-center">faq</h3>
          {questions.map(data =>
          {
            return (
              <Questions key={data.id} questions={data.questions} answer={data.answer} />
            )

          })}


        </div>
      </div>
    </div>
  );
}

export default App;
