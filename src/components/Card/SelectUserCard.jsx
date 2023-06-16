import { w } from "windstitch";

export default function SelectUserCard({ data, removeUser, addUser, add }) {
  const { User } = data;
  const { name, image } = User;

  return (
    <CardContainer onClick={() => add ? addUser(data): removeUser(data)}>
      <Box>
        <Img src={image} />
        <Div>
          <UserName>{name}</UserName>
        </Div>
      </Box>
    </CardContainer>
  );
}

const CardContainer = w.li(`
    w-full max-w-sm min-w-[300px] bg-white border border-gray-200 rounded-lg shadow 
    dark:bg-gray-800 dark:border-gray-700  p-3 flex items-center justify-between mt-2
`);

const Img = w.img(`
w-5 h-5 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500
`);

const Div = w.div(`
  flex flex-col ml-2
`)

const Box = w.div(`
flex items-center 
`);

const UserName = w.p(`
text-1xl font-semibold text-gray-900 dark:text-white 
`);

