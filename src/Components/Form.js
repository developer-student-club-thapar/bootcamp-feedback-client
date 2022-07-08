import { FaGithub } from "react-icons/fa";

const Form = ({ setFormOpen }) => {
  return (
    <>
      <div
        className="overlay w-screen h-full absolute bg-black opacity-25"
        onClick={() => {
          setFormOpen(false);
        }}
      ></div>
      <div className="flex flex-col justify-center items-start p-4 rounded-xl z-10 bg-white w-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <label className="font-light text-sm mb-2">Name: *</label>
        <input
          type={"text"}
          className="px-4 py-2 w-full mb-6 bg-[#F6F6F6] rounded-md border border-gray-400"
          required
        />

        <label className="font-light text-sm mb-2">Github URL:</label>
        <input
          type={"url"}
          className="px-4 py-2 w-full mb-6 bg-[#F6F6F6] rounded-md border border-gray-400"
        />

        <label className="font-light text-sm mb-2">Twitter URL:</label>
        <input
          type={"url"}
          className="px-4 py-2 w-full mb-6 bg-[#F6F6F6] rounded-md border border-gray-400"
        />

        <label className="font-light text-sm mb-2">Instagram URL:</label>
        <input
          type={"url"}
          className="px-4 py-2 w-full mb-6 bg-[#F6F6F6] rounded-md border border-gray-400"
        />

        <label className="font-light text-sm mb-2">Feedback: *</label>
        <textarea
          className="px-4 py-2 w-full mb-6 bg-[#F6F6F6] rounded-md border border-gray-400 resize-y"
          rows={6}
          required
        />

        <button className="bg-[#9296FF] hover:bg-[#6268FF] p-3 px-24 mx-auto  text-white items-center rounded-full text-xl font-semibold">
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
