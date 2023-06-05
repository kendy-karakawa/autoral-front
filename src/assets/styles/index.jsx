import { w } from "windstitch";

export const Container = w.div(`
    w-screen
    h-screen
    bg-gradient-to-b from-blue-400 to-teal-400	
    flex
    items-center	
    justify-center
       
`);

export const WhiteBox = w.div(
  `
    w-full
    md:w-6/12 
    bg-slate-100	
    h-screen
    flex
    flex-col
    items-center	
    justify-center 
    
    `
);

export const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white
`);

export const MiniText = w.p(`
text-sm font-medium text-gray-500 dark:text-gray-300 mt-2
`);
