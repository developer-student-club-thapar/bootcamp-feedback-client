import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";

const Message = ({ message }) => {
  let response = {};
  if (message === 1) {
    response = {
      class: "text-green-600",
      msg: "Update your Form!",
    };
  } else if (message === -1) {
    response = {
      class: "text-green-600",
      msg: "",
    };
  } else {
    response = response = {
      class: "text-red-600",
      msg: "Incorrect passphrase, try again!",
    };
  }

  return (
    <p className={response.class + " mx-auto p-2 w-full text-center"}>
      {response.msg}
    </p>
  );
};

const UpdateForm = ({ setUpdateFormOpen, id, setUpdateId }) => {
  const [passphrase, setPassphrase] = useState("");
  const [message, setmessage] = useState(-1);

  const changeHandler = (e) => {
    setPassphrase(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const body = {
      _id: id,
      passphrase: passphrase,
    };
    console.log(body);
    let updateResponse;
    try {
      updateResponse = await axios.updateResponse(
        "https://servreviewapi.dsctiet.tech/",
        { data: body }
      );

      if (updateResponse.data === "Updated Successfully") {
        setmessage(1);
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      } else {
        setmessage(0);
      }
    } catch (err) {
      console.log(err);
      setmessage(0);
      setTimeout(() => {
        setUpdateFormOpen(false);
      }, 2000);
    }
  };

  return (
    <Modal setModalOpen={setUpdateFormOpen} setUpdateId={setUpdateId}>
      <form
        className="flex flex-col justify-center items-start p-4 px-6"
        onSubmit={(e) => {
          handleUpdate(e);
        }}
      >
        <label className="font-light text-sm mb-2">Enter Passphrase: *</label>
        <input
          onChange={(e) => changeHandler(e)}
          value={passphrase}
          type={"text"}
          name="passphrase"
          className="px-4 py-2 w-full mb-6 bg-[#F6F6F6] rounded-md border border-gray-400"
          required
        />
        <button
          onClick={(e) => handleUpdate(e)}
          className="bg-[#9296FF] hover:bg-[#6268FF] p-3 px-24 mx-auto  text-white items-center rounded-full text-xl font-semibold"
        >
          Submit
        </button>
      </form>
      <Message message={message} />
    </Modal>
  );
};

export default UpdateForm;