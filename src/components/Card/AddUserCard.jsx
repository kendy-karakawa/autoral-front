import { w } from "windstitch";

export default function AddUserCard({ data, add, addUser, removeUser }) {
  const { name, image } = data;
  

  return (
    <CardContainer onClick={() => add ? addUser(data): removeUser(data)}>
      <Div>
        <Img src={image} />
        <Div>
          <UserName>{name}</UserName>
        </Div>
      </Div>
    </CardContainer>
  );
}

const CardContainer = w.li(`
    w-full max-w-sm min-w-[300px] bg-white border border-gray-200 rounded-lg shadow 
    p-3 flex items-center justify-between mt-2
`);

const Img = w.img(`
w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 
`);

const Div = w.div(`
flex items-center 
`);

const UserName = w.p(`
text-1xl font-semibold text-gray-900 
`);