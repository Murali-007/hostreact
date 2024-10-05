import ResumeImg from '../assets/resume.jpg';

const Resume = () => {
  const config = {
    filename: 'MuraliResume.pdf' 
  };

  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={ResumeImg} />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white gap-2'>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
          <p className='pb-5'>
            You can view my resume

          </p>
          <a
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded cursor-pointer inline-block text-center"
            href={'../resume/MuraliResume.pdf'}
            download={config.filename}
            style={{ width: 'fit-content' }}
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;