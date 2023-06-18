import { w } from "windstitch";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import apiExpense from "../../services/ApiExpense";

export default function DeleteButton({expenseId, token, setToggle}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleDeletePost = async (e) => {
    setDeleteIsLoading(true);
    e.preventDefault();
    try {
      await apiExpense.deleteExpense(token, expenseId)
      setDeleteIsLoading(false);
      setModalIsOpen(false);
      setToggle(prev=> !prev)
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return (
    <> 
      <button onClick={handleOpenModal}>
        <TrashIcon className="h-6 w-6 " />
      </button>
      {modalIsOpen && (
        <ModalContainer>
          <ModalBox>
            <H2>Are you sure you want to delete this post?</H2>
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
z-3 fixed inset-0 flex items-center justify-center bg-white bg-opacity-90
`);

const ModalBox = w.div(`
absolute top-[calc(50%-130px)] right-[calc(50%-300px)] bg-gray-800 rounded-[50px] w-[600px] h-[260px] flex items-center justify-center flex-col
`);

const H2 = w.h2(`
w-[338px] text-3xl font-bold text-white mb-40 text-center font-lato
`);

const ButtonBox = w.div(`
  flex justify-evenly w-[338px]
`);

const No = w.button(`
w-[137px] h-[37px] rounded-[5px] font-lato text-xl font-bold text-blue-500 bg-white hover:cursor-pointer 
`);

const Yes = w.button(`
w-[137px] h-[37px] rounded-[5px] font-lato text-xl font-bold text-white bg-blue-500 hover:cursor-pointer 
`);
