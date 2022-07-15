import Modal from "./Modal";

const DeleteForm = ({ setDeleteFormOpen, id }) => {
  return (
    <Modal setModalOpen={setDeleteFormOpen}>
      <form className="flex flex-col justify-center items-start p-4 px-6">
        <label className="font-light text-sm mb-2">Enter Passphrase: *</label>
        <input
          type={"text"}
          name="passphrase"
          className="px-4 py-2 w-full mb-6 bg-[#F6F6F6] rounded-md border border-gray-400"
          required
        />
      </form>
    </Modal>
  );
};

export default DeleteForm;
