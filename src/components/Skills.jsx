import Reveal from './Reveal';
export default function Skills(){
    const s = [
        "C",
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "R",
        "HTML",
        "CSS",
        "Tailwind",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Object Oriented Programming",
        "Artificial Intelligence",
        "Cloud Computing",
        "Git",
        "GitHub"
    ];
return(
<Reveal>
<div id='skills' className='w-full max-w-5xl mt-20 text-center'>
<h2 className='text-2xl font-bold'>Skills</h2>
<div className='flex flex-wrap gap-3 justify-center mt-6'>
  {s.map(x=><span key={x} className='px-4 py-1 bg-black dark:bg-white dark:text-black text-white rounded-full text-sm'>{x}</span>)}
</div>
</div>
</Reveal>);
}