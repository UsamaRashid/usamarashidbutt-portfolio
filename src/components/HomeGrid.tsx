import React from "react";
import SignatureTypewriter from "./SignatureTypewriter";

const HomeGrid = () => {
  return (
    <div className='grid grid-cols-12 grid-rows-2 gap-4 h-screen text-white '>
      <div className='text-5xl  col-start-1 col-span-12 rounded-[4.5rem] text-center flex justify-center items-center'>
        <SignatureTypewriter />
      </div>
      <div className='col-span-6 row-span-2 bg-violet-800 rounded-[4.5rem] text-center'>
        012
      </div>
      <div className='col-span-6 grid grid-cols-6 row-span-2 '>
        <div className='col-span-3 row-span-1 bg-slate-100 rounded-[4.5rem] text-center m-1'>
          222
        </div>
        <div className='col-span-3 row-span-1 bg-gray-900 rounded-[4.5rem] text-center m-1'>
          333
        </div>
        <div className='col-span-6 row-span-1 bg-yellow-200 rounded-[4.5rem] text-center m-1 text-black flex justify-center items-end'>
          444
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
