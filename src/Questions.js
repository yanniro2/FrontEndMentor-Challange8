import React from 'react'
import up from "./images/icon-arrow-down.svg"
function Questions({ key, questions, answer })
{
    const [hide, setShow] = React.useState(false);
    function handleonClick(e)
    {
        setShow(!hide);
    }
    return (
        <div className='border-b-[1px] border-Light-grayish-blue w-full h-full'>
            {/* BOX */}
            <div className="flex justify-between items-center w-full  cursor-pointer  py-1" onClick={handleonClick}>
                <p className={hide ? "font-lg" : "font-ms text-ms text-Very-dark-grayish-blue"}>{questions}</p>
                <img src={up} alt="img icon" className={hide ? "rotate-180" : ""} />
            </div>
            {hide && (<div className="box-hide block">
                <p className="text-ms text-Dark-grayish-blue font-ms">
                    {answer}
                </p>
            </div>)}
            {/* <span className="border-b-[1px] border-Light-grayish-blue"></span> */}
        </div>
    )
}

export default Questions
