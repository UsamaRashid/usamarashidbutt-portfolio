import { ServiceIcon } from "@/icons";
import Indicator from "./Indicator";

const WorkComponent = () => {
  return (
    <div className='relative flex flex-col gap-4  rounded-[2.5rem] p-20 px-14 bg-[#1b1b1f] text-[#a5a1ff]'>
      <div className='head text-3xl font-semibold'>Overview.</div>
      <div className='content sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl '>
        <br />
        {`With expertise in Blockchain, and
        Fullstack development, I bring a blend of creativity and technical prowess to craft
        exceptional digital experiences. Let's collaborate to turn your ideas
        into reality!`}
      </div>
    </div>
  );
};

export default WorkComponent;
