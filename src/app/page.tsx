import HomeGrid from "@/components/HomeGrid";
import SignatureTypewriter from "@/components/SignatureTypewriter";
import Scroller from "@kezoponk/scroller";

export default function Home() {
  return (
    <div>
      {/* <HomeGrid /> */}
      <div className='flex'>
        <div className='text-5xl m-2 h-52  md:h-72  w-full bg-white text-black  col-start-1 col-span-12 rounded-[4.5rem] text-center flex justify-center items-center'>
          The Craftsmen{" "}
        </div>
      </div>
      <div className='block md:flex ml-3 '>
        <div className='bg-new-purple m-2 h-96  w-[98%] md:w-[48%] bg-newPurple col-start-1 col-span-12 rounded-[4.5rem] text-center flex justify-center items-center'>
          Craft CMS
        </div>
        <div className='w-[100%] md:w-1/2 '>
          <div className='md:h-48 h-52 flex'>
            <div className='bg-slate-300 m-2 col-span-2 w-[49%] text-black rounded-[4.5rem] text-center flex justify-center items-center'>
              Work
            </div>
            <div className='bg-slate-700 m-2 text-black  w-[49%] rounded-[4.5rem] text-center flex justify-center items-center'>
              AboutUs
            </div>
          </div>
          <div className='bg-new-yellow m-2 h-40 md:h-48 text-black rounded-[4.5rem] text-center flex justify-center items-center'>
            Contact
          </div>
        </div>
      </div>
      <div className=''>HELLO</div>
    </div>
  );
}

// "new-purple": { "500": "#2901E8" },
// "new-yellow": { "500": "#FFF480" },
