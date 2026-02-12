export default function Navbar(){
return(
<div className='w-full max-w-5xl flex justify-between py-6 text-lg'>
  <a href='/' className='font-semibold'>Subham.xyz</a>
  <div className='flex gap-6 items-center'>
    <a href='#projects' className='opacity-80 hover:opacity-100'>Projects</a>
    <a href='#contact' className='opacity-80 hover:opacity-100'>Contact</a>
    <a href='https://drive.google.com/file/d/1YzGe8TgCRqh_PNpgyQOY0cxxe422XgyW/view?usp=drive_link' className='px-3 py-1 bg-white dark:bg-black dark:text-white text-black border rounded-md'>Resume</a>
  </div>
</div>);
}