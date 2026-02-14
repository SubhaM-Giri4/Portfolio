import Reveal from './Reveal';
export default function Contact(){
return(
<Reveal>
<div id='contact' className='w-full max-w-5xl mt-24 text-center'>
<h2 className='text-4xl font-bold'>Get in Touch</h2>
<p className='mt-4 opacity-70'>Feel free to email anytime.</p>
<a href='mailto:subhamgiri482@gmail.com'
 className='mt-6 inline-block bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-xl'>Email Me</a>
</div>
</Reveal>);
}