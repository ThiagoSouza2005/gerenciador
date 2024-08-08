
import { Head } from '@inertiajs/react';
export default function Gerenciador(){
    const html = document.querySelector('html');
    const isLightOrAuto = localStorage.getItem('hs_theme') === 'light' || (localStorage.getItem('hs_theme') === 'auto' && !window.matchMedia('(prefers-color-scheme: dark)').matches);
    const isDarkOrAuto = localStorage.getItem('hs_theme') === 'dark' || (localStorage.getItem('hs_theme') === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
9
    if (isLightOrAuto && html.classList.contains('dark')) html.classList.remove('dark');
    else if (isDarkOrAuto && html.classList.contains('light')) html.classList.remove('light');
    else if (isDarkOrAuto && !html.classList.contains('dark')) html.classList.add('dark');
    else if (isLightOrAuto && !html.classList.contains('light')) html.classList.add('light');
   return (
        
    <body class="bg-zinc-600 h-screen">
                
                <header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
                    <nav class="relative max-w-[90rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center  md:py-0 mx-2 lg:mx-auto" aria-label="Global">
                    <div class="flex items-center justify-between">
                    
                        <a class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href={route('taskmind')} aria-label="Preline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#66d21e" viewBox="0 0 256 256"><path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z"></path></svg>
                        </a>
                        <a href={route('taskmind')}>
                        <h1 className="text-white p-2">TASKMIND</h1>
                        </a>

                        <div class="md:hidden">
                        <button type="button" class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation">
                            <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>

                    
                        <div id="navbar-collapse" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                        <a class="text-sm text-lime-500 hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href={('taskmind')} aria-current="page">Home</a>
                        <a class="text-sm text-lime-500 hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href={route('listagem')}>Planilha</a>
                        <a class="text-sm text-lime-500 hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href='#sobre'>Sobre</a>
                        <a class="text-sm text-lime-500 hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="#redes sociais">Redes Sociais</a>

            

                        <div className="">
                            <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-gray-600 font-bold font-medium text-sm text-neutral-800 rounded-full focus:outline-none text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" href="https://docs.google.com/document/d/15UPkvVOzBGm2g8gHhVUjknXsqLAe7MyiGdX2FAYb_5M/edit">

                                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                </svg>
                       
                            Visite meu GitHub
                            </a>
                        </div>
                        <div className="">
                            <a class="group inline-flex items-center gap-x-2 py-2 px-3 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold font-medium text-sm text-neutral-800 rounded-full focus:outline-none text-white" href="MEUGITHUB">

                                 <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                                </svg>

                            Siga no Instagram
                            </a>
                        </div>
                        </div>
                    </div>
                    
                    </nav>
                </header>
                        
                       

                    <div class="w-[500px] p-7 text-justify ml-[120px] mt-[70px]">
                        <h1 class="text-lime-500 ml-[20px] text-6xl font-times font-bold">Sinta-se organizado sem necessidade de se esforçar</h1>
                        <p class="text-white p-4 font-times leading-loose text-3xl">O Taskmind ajuda-o o capturar e a priorizar ideias, projetos e listas de tarefas, para que nada lhe escape.
                        </p>
                    <div>
                        <a href={route('dashboard')}>
                                <button class="bg-lime-500  text-white font-bold p-3 ml-[20px] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                                        REGISTRE-SE GRATUITAMENTE 
                                </button>
                        </a>
                        
                   </div>
                   </div>
                    <img src="public/bn.png" alt="" />

                   <div>

                        <img src="" alt="" />
                   </div>
            
                <footer className=' bg-slate-50 mt-[120px] text-center  text-black'>&copy;Thiago Tomé</footer>
                
     </body>
                
                

               


       
        

    )
}