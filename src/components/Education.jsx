import Reveal from './Reveal';
export default function Education(){
return(
<Reveal>
<div className='w-full max-w-5xl mt-20 text-center'>
<h2 className='text-2xl font-bold'>Education</h2>
<div className='mt-6 inline-flex gap-4 border p-5 rounded-xl'>
  <div className='w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center'>VIT</div>
  <div><div className='font-semibold'>Vellore Institute of Technology</div><div className='opacity-70'>B.Tech in Computer Science and Engineering</div></div>
  <div className='opacity-60'>2023–2027</div>
</div>
</div>
</Reveal>);
}