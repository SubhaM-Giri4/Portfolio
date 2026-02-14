import Reveal from './Reveal';
export default function About(){
return(
<Reveal>
<div id='about' className='w-full max-w-5xl mt-20 text-center'>
<h2 className='text-2xl font-bold'>About Me</h2>
    <p className='mt-4 text-lg opacity-80'>
        I'm Subham, passionate about engineering scalable solutions with clean code and thoughtful architecture!!
    </p>
</div>
</Reveal>);
}