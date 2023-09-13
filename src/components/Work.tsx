import { ServiceIcon } from "@/icons";
import Indicator from "./Indicator";

const WorkComponent = () => {
  return (
    <div
      className='

    relative flex flex-col gap-10 rounded-[4.5rem] p-20 px-14 bg-[#1b1b1f] text-[#a5a1ff]'
    >
      <div className='head text-xl font-semibold'>Overview.</div>
      <div className='content sm:text-7xl '>
        <br />
        {`With expertise in Blockchain, and
        Fullstack development, I bring a blend of creativity and technical prowess to craft
        exceptional digital experiences. Let's collaborate to turn your ideas
        into reality!`}
      </div>
      {/* <Indicator icon={ServiceIcon} /> */}
    </div>
  );
};

export default WorkComponent;
