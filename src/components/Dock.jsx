import { Home, Github, Linkedin, FileDown, Sun, Moon } from "lucide-react";

export default function Dock({dark,setDark}){
const items=[
 {icon:<Home size={28}/>,link:"https://subham.xyz"},
 {icon:<Github size={28}/>,link:"https://github.com/SubhaM-Giri4"},
 {icon:<Linkedin size={28}/>,link:"https://www.linkedin.com/in/subham-giri4/"},
 {icon:<FileDown size={28}/>,link:"https://drive.google.com/file/d/1YzGe8TgCRqh_PNpgyQOY0cxxe422XgyW/view?usp=drive_link"},
];

return(
<div className='fixed bottom-6 flex gap-8 bg-white dark:bg-gray-900 border shadow-xl rounded-full px-10 py-4 z-50'>
 {items.map((x,i)=>(
   <a key={i} href={x.link}
     className='transform transition-all hover:-translate-y-3 hover:scale-125'>
     {x.icon}
   </a>
 ))}
 <button
   onClick={()=>{setDark(!dark);document.documentElement.classList.toggle("dark");}}
   className='transform transition-all hover:-translate-y-3 hover:scale-125'>
   {dark?<Sun size={28}/>:<Moon size={28}/>}
 </button>
</div>);
}