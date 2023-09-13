"use client";
import {
  ArrowDown,
  Business,
  LogoIcon,
  Send,
  Terminal,
  Github,
  LinkedIn,
  CodeIcon,
} from "@/icons";
import { TextAnimation } from "./TextAnimation";

const HomeGrid = () => {
  return (
    <div className='sm:grid sm:grid-cols-4 sm:grid-rows-2 gap-2 font-semibold'>
      <a
        href='/resume'
        target='_self'
        rel='noopener noreferrer'
        className='servies group relative flex flex-col justify-between rounded-[4.5rem] col-span-2 row-span-2 p-10 pl-14 cursor-pointer hover:scale-[0.98] transition-all duration-[250ms] hover:p-11 hover:pl-14 ease-linear   h-[65vh] md:h-[60vh] lg:h-[60vh] bg-[hsl(250.6deg_100%_45.49%)] overflow-hidden'
      >
        <div className='heading flex justify-between items-center'>
          <span className='text-2xl'>I build Cool Stuff</span>
          <div className='bg-white p-3 rounded-full'>
            {/* <LogoIcon /> */}
            <CodeIcon />
          </div>
        </div>
        <div className='shapes absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='shape-wrapper -ml-8 mb-4 relative animate-spin-custom'>
            <div className='circle absolute -left-16 -top-28 w-20 h-20 rounded-full bg-[hsl(242.55deg_100%_81.57%)] group-hover:bg-[hsl(325.93deg_100%_84.12%)] transition-colors'></div>
            <div className='square absolute -left-16 top-12 w-20 h-20 bg-[hsl(242.55deg_100%_81.57%)] animate-spin-custom group-hover:bg-white transition-colors'></div>
            <div className='triangle absolute left-20 -top-4 border-l-transparent border-r-transparent border-t-0 border-[3rem] border-b-[hsl(242.55deg_100%_81.57%)] w-0 h-0 scale-y-[1.75] animate-spin-custom group-hover:border-b-[hsl(54.8deg_100%_75.1%)] transition-colors'></div>
          </div>
        </div>
        {/* <TextAnimation
          text='We are specialized in Craft CMS.'
          fontSize='5.5rem'
        /> */}
        <div className='links flex justify-between items-center pr-4'>
          <TextAnimation
            // text='Do you have a question, an idea, or a project you need help with?'
            text='Work Experience. Projects. Technologies. Languages. Technical Skills. '
            fontSize='3rem'
            // onHover
          />
          <span className='text-xl'>Resume</span>
          {/* <span>
            <ArrowDown color='white' />
          </span> */}
        </div>
      </a>
      <a
        href='https://github.com/UsamaRashid'
        className='work group relative flex items-end rounded-[4.5rem] p-10 px-14 h-[33vh] sm:h-auto bg-white text-black cursor-pointer hover:scale-[0.98] transition-all duration-[250ms] hover:p-11 hover:pl-14 ease-linear overflow-hidden'
      >
        <TextAnimation
          text='View my Projects and Contributions.'
          fontSize='3rem'
          onHover
        />
        <span className='text-lg group-hover:opacity-0 transition-opacity'>
          Work
        </span>
        <span className='ml-auto group-hover:opacity-0 transition-opacity'>
          {/* <Terminal /> */}
          <Github />
        </span>
      </a>
      <a
        href='https://www.linkedin.com/in/usama-rashid-butt-4917a9227/'
        className='about h-[33vh] sm:h-auto group relative flex items-end rounded-[4.5rem] p-10 px-14 bg-[hsl(240deg_6.9%_11.37%)] text-white cursor-pointer hover:scale-[0.98] transition-all duration-[250ms] hover:p-11 hover:pl-14 ease-linear overflow-hidden'
      >
        <TextAnimation
          text='Learn more about me. Uncover My Professional Path'
          fontSize='3rem'
          onHover
        />
        <span className='text-lg group-hover:opacity-0 transition-opacity'>
          About
        </span>
        <span className='ml-auto group-hover:opacity-0 transition-opacity bg-white rounded-md'>
          {/* <Business /> */}
          <LinkedIn />
        </span>
      </a>
      <div
        onClick={() => {
          const email = "usamarashid.work@gmail.com";
          window.open(`mailto:${email}`);
        }}
        className='contact h-[33vh] sm:h-auto group relative flex items-end col-span-2 rounded-[4.5rem] p-10 px-14 bg-[hsl(54.8deg_100%_75.1%)] text-black cursor-pointer hover:scale-[0.98] transition-all duration-[250ms] hover:p-11 hover:pl-14 ease-linear overflow-hidden'
      >
        <TextAnimation
          text='Let’s talk business. Get in touch!'
          fontSize='3rem'
          onHover
        />
        <span className='text-lg group-hover:opacity-0 transition-opacity'>
          Contact
        </span>
        <span className='ml-auto group-hover:opacity-0 transition-opacity'>
          <Send />
        </span>
      </div>
    </div>
  );
};

export default HomeGrid;
