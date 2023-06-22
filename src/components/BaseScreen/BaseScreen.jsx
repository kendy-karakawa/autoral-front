import { w } from "windstitch";
import Header from "../Header/header";

export default function BaseScreen({children}) {
    return (
        <Container>
            <Header />
            <Box>
            {children}
            </Box>
        </Container>
    )
}

const Container = w.div(`
w-full h-screen pt-[100px] flex items-start justify-center bg-gradient-to-b from-blue-400 to-teal-400 overflow-auto  
`);

const Box = w.div(`
flex flex-col items-center w-6/12
`);