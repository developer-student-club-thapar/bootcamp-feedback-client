import { AiOutlinePlus } from "react-icons/ai";

const AddReviewButton = ({ setFormOpen }) => {
  return (
    <button
      className="bg-[#9296FF] hover:bg-[#6268FF] p-4 fixed bottom-6 right-12 flex flex-row text-white items-center rounded-full text-xl font-semibold"
      onClick={() => {
        setFormOpen(true);
      }}
    >
      <AiOutlinePlus className="mr-2" size={40} /> Add Review
    </button>
  );
};

export default AddReviewButton;
