import { w } from "windstitch";

export default function Input({ children, ...props }) {
  return <StyledInput {...props}>{children}</StyledInput>;
}

const StyledInput = w.input(`
bg-gray-50 border border-gray-300 text-gray-900 text-sm 
rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-5 
block p-2.5 
`);
