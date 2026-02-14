import Reveal from './Reveal';

export default function Projects() {

 const p = [
  {
   t: "SwaagatInn",
   d: "A travel focused platform designed to provide immersive experiences and seamless exploration.",
   i: "https://picsum.photos/600/300?1",
   tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "HTML", "CSS", "Passport.js", "OpenAI API"],
   link: "https://swaagatinn.onrender.com"
  },
  {
   t: "Nirvanika",
   d: "Your Companion for Mental Well being. A mental health awareness and self assessment platform to help users evaluate emotional and psychological state.",
   i: "https://picsum.photos/600/300?2",
   tags: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "OpenAI"],
   link: "#"
  },
  {
   t: "QBlogs",
   d: "Backend for QBlogs, a blogging platform built using Node.js and Express.js. Provides RESTful APIs for managing posts, users, and categories.",
   i: "https://picsum.photos/600/300?3",
   tags: ["Node.js", "Express.js", "MongoDB", "JavaScript", "CSS"],
   link: "https://github.com/SubhaM-Giri4/QBlogs"
  },
  {
   t: "Synaptic AI Chess",
   d: "AI vs You — An intelligent chess engine project focused on building strategic AI gameplay.",
   i: "https://picsum.photos/600/300?4",
   tags: ["AI", "JavaScript"],
   link: "https://github.com/SubhaM-Giri4/Synaptic_AI_Chess"
  }
 ];

 return (
     <Reveal>
      <div id='projects' className='w-full max-w-6xl mt-24 text-center'>

       <div className='bg-black dark:bg-white dark:text-black text-white px-4 py-1 rounded-full text-sm inline-block'>
        Featured Projects
       </div>

       <h2 className='text-4xl font-bold mt-4'>
        Check out my works
       </h2>

       <div className='grid md:grid-cols-2 gap-10 mt-10'>

        {p.map((x, i) => (
            <Reveal key={i}>

             <a
                 href={x.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className='block border dark:border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl'
             >

              <img
                  src={x.i}
                  alt={x.t}
                  className='w-full h-56 object-cover'
              />

              <div className='p-5 text-left'>

               <h3 className='text-2xl font-bold'>
                {x.t}
               </h3>

               <p className='opacity-70 mt-2'>
                {x.d}
               </p>

               {/* Tags */}
               <div className='flex flex-wrap gap-2 mt-4'>
                {x.tags.map((t, idx) => (
                    <span
                        key={idx}
                        className='bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm'
                    >
                        {t}
                      </span>
                ))}
               </div>

              </div>
             </a>

            </Reveal>
        ))}

       </div>
      </div>
     </Reveal>
 );
}
