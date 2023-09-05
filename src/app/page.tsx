export default function Home() {
  return (
    // <div className='grid grid-cols-2 grid-rows-2 h-full'>
    //   <div className='col-span-1'>
    //     <div className=' col-span-2 rounded-lg bg-purple-400 text-white'>
    //       Top Card
    //     </div>
    //   </div>

    //   <div className='col-span-1'>
    //     <div className=' row-span-1 rounded-lg bg-indigo-400'>Card 5</div>
    //     <div className='rounded-lg bg-red-400'>Card 6</div>
    //   </div>
    // </div>
    <div>
      <div className='grid grid-cols-12 grid-rows-2 gap-4 h-screen text-red-700'>
        <div className='col-start-1 col-span-12 rounded-3xl text-center bg-black items-center'>
          Usama Rashid Butt
        </div>
        <div className='col-span-6 row-span-2 bg-indigo-800 rounded-3xl text-center'>
          012
        </div>
        {/* <div className='col-span-6 row-span-1'> */}
        <div className='row-span-1 col-span-3 bg-slate-100 rounded-3xl text-center'>
          222
        </div>
        <div className='row-span-1 col-span-3 bg-gray-600 rounded-3xl text-center'>
          333
          {/* </div> */}
        </div>
        <div className='col-span-6 row-span-1 bg-amber-200 rounded-3xl text-center'>
          444
        </div>
      </div>
      <div>Gello</div>
    </div>
  );
}
