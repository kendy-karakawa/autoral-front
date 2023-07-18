import { w } from "windstitch";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import apiExpense from "../../services/ApiExpense";

export default function DeleteButton({ expenseId, token, setToggle }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleDeletePost = async (e) => {
    setDeleteIsLoading(true);
    e.preventDefault();
    try {
      await apiExpense.deleteExpense(token, expenseId);
      setDeleteIsLoading(false);
      setModalIsOpen(false);
      setToggle((prev) => !prev);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <>
      <button onClick={handleOpenModal}>
        <TrashIcon className="h-6 w-6 " />
      </button>
      {modalIsOpen && (
        <ModalContainer>
          <ModalBox>
            <H2>Vocẽ realmente quer deletar esta despesa ?</H2>
            {deleteIsLoading ? (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#1877F2", "#1877F2", "#1877F2", "#1877F2", "#1877F2"]}
              />
            ) : (
              <ButtonBox>
                <No onClick={handleCloseModal} data-test="cancel">
                  Cancelar
                </No>
                <Yes onClick={handleDeletePost} data-test="confirm">
                  Sim, deletar
                </Yes>
              </ButtonBox>
            )}
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
}

const ModalContainer = w.div(`
z-50 fixed inset-0 flex items-center justify-center bg-white bg-opacity-90
`);

const ModalBox = w.div(`
relative bg-blue-500 rounded-lg shadow w-[380px] h-[100px]
`);

const H2 = w.h2(`
mb-5 text-lg font-normal text-gray-500  
text-3xl font-bold text-white mb-40 text-center font-lato
`);

const ButtonBox = w.div(`
  flex justify-evenly w-[380px]
`);

const No = w.button(`
text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 
rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 
`);

const Yes = w.button(`
text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 
 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 
text-center mr-2
`);
