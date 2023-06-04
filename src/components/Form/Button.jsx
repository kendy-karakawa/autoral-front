import { w } from 'windstitch';

export default function Button({ children, ...props }){
    return (
        <StyledButton {...props}>
           {children}
        </StyledButton>
    )
}

const StyledButton = w.button(`
text-white bg-blue-700 hover:bg-blue-800 
focus:ring-4 focus:ring-blue-300 font-medium 
rounded-lg text-sm px-5 py-2.5 mt-5 w-full dark:bg-blue-600 
dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
`)