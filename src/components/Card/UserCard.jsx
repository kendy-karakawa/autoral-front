import { w } from "windstitch";

export default function UserCard({ data }) {
  const { userId, accepted, User } = data;
  const { name, image } = User;

  return (
    <CardContainer>
      <Box>
        <Img src={image} />
        <Div>
          <UserName>{name}</UserName>
          <Text>
            {accepted ? "Membro" : "Aguardando confirmação"}
          </Text>
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
w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500
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

const Text = w.p(`
  text-xs font-normal text-gray-900
`)
