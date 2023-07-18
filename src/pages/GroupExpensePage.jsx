import { useEffect, useState } from "react";
import Input from "../components/Form/Input";
import { w } from "windstitch";
import { useParams } from "react-router-dom";
import useToken from "../hooks/useToken";
import SplitMember from "../components/SplitMember/SplitMember";
import apiParticipant from "../services/ApiParticipant";
import Button from "../components/Form/Button";
import apiExpense from "../services/ApiExpense";
import BaseScreen from "../components/BaseScreen/BaseScreen";

export default function GroupExpensePage() {
  const { groupId } = useParams();
  const [groupMembers, sergroupMembers] = useState([]);
  const [description, setDescripition] = useState("");
  const [value, setValue] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectSome, setSelectSome] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [unselectMembers, setUnselectMembers] = useState([]);
  const token = useToken();

  useEffect(() => {
    async function getMembers() {
      try {
        const result = await apiParticipant.getGroupAcceptedParticipant(
          token,
          groupId
        );
        //console.log(result);
        sergroupMembers(result);
        setUnselectMembers(result);
      } catch (err) {
        console.log(err.response.data.message);
        //console.log(err);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }

    getMembers();
  }, []);

  function handleSelectAll() {
    if (selectAll === true) {
      setSelectSome(false);
      setSelectAll(false);
      setSelectedMembers([]);
    } else {
      setSelectSome(false);
      setSelectAll(true);
      setUnselectMembers(groupMembers);
      setSelectedMembers(groupMembers);
    }
  }

  function handleSelectSome() {
    if (selectSome === true) {
      setSelectAll(false);
      setSelectSome(false);
      setSelectedMembers([]);
      setUnselectMembers(groupMembers);
    } else {
      setSelectAll(false);
      setSelectSome(true);
      setSelectedMembers([]);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (selectedMembers.length === 0) {
      alert("Selecione pelo menos um membro");
      return;
    }
    try {
      const formatedGroupId = Number(groupId);
      const totalValue = value * 100;
      const participantsIds = selectedMembers.map((item) => ({ id: item.id }));
      const body = {
        name: description,
        groupId: formatedGroupId,
        totalValue,
        participantsIds,
      };

      console.log(body);
      await apiExpense.splitExpenseWithMembers(token, body);

      setDescripition("");
      setValue("");
      setSelectedMembers([]);
      setUnselectMembers(groupMembers);
      setSelectAll(false);
      setSelectSome(false);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return (
    <BaseScreen>
      <Title>Adicionar despesa</Title>
      <Form onSubmit={onSubmit}>
        <Input
          label="description"
          type="text"
          placeholder="Descrição"
          value={description}
          required
          onChange={(e) => setDescripition(e.target.value)}
        />
        <Input
          label="value"
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Valor"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <CheckBoxContainer>
          <CheckBoxDiv>
            <CheckInput
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <Label>Dividir com todos os membros</Label>
          </CheckBoxDiv>
          <CheckBoxDiv>
            <CheckInput
              type="checkbox"
              checked={selectSome}
              onChange={handleSelectSome}
            />
            <Label>Selecionar membros para a divisão</Label>
          </CheckBoxDiv>
        </CheckBoxContainer>
        {selectSome && (
          <SplitMember
            token={token}
            groupId={groupId}
            selectedMembers={selectedMembers}
            setSelectedMembers={setSelectedMembers}
            unselectMembers={unselectMembers}
            setUnselectMembers={setUnselectMembers}
          />
        )}

        <Button>Enviar</Button>
      </Form>
    </BaseScreen>
  );
}


const Form = w.form(`flex min-h-[50%] flex-col items-center justify-between `);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 mb-[20px]
`);

const CheckInput = w.input(`
w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
focus:ring-2 
`);

const Label = w.label(`
w-full  ml-2 text-sm font-medium text-gray-900 
`);

const CheckBoxDiv = w.div(`
flex items-center w-full mt-2
`);

const CheckBoxContainer = w.div(`
flex-col items-center justify-between w-full mt-[10px]
`);



