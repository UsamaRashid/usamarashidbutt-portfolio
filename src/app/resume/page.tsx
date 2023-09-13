import Link from "next/link";

function Resume() {
  return (
    <div>
      <embed
        src='/resume/resume.pdf'
        type='application/pdf'
        className='h-[100vh] w-full'
      />
    </div>
  );
}

export default Resume;
