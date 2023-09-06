import HomeGrid from "@/components/HomeGrid";
import Scroller from "@kezoponk/scroller";

export default function Home() {
  return (
    <div>
      {/* <div className='grid grid-cols-12 grid-rows-2 gap-4 h-screen text-white '>
        <div className='text-5xl  col-start-1 col-span-12 rounded-[4.5rem] text-center flex justify-center items-center'>
          Usama Rashid Butt
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
      </div> */}
      <HomeGrid />
      {/* <Scroller direction='right' speed={100} animation='ease-in-out'>
        <a href='/example'>
          <button>Example</button>
        </a>
        <a href='/political'>
          <button>Political</button>
        </a>
        <a href='/app'>
          <button>App</button>
        </a>
        <a href='/programming'>
          <button>Programming</button>
        </a>
        <a href='/program'>
          <button>Program</button>
        </a>
        <a href='/school'>
          <button>School</button>
        </a>
      </Scroller> */}

      <div className=''>GELLLO</div>
    </div>
  );
}
