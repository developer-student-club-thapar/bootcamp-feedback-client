import { useEffect } from "react";
import { useState } from "react";
import AddReviewButton from "./Components/AddReviewButton";
import AddReviewForm from "./Components/AddReviewForm";
import DeleteForm from "./Components/DeleteForm";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import UpdateForm from "./Components/UpdateForm";

function App() {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [deleteFormOpen, setDeleteFormOpen] = useState(false);
  const [updateFormOpen, setUpdateFormOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    if (addFormOpen || deleteFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    if (deleteId.length) {
      setDeleteFormOpen(true);
    }

    if (updateFormOpen) {
      setUpdateFormOpen(true);
  }}, [addFormOpen, deleteFormOpen, deleteId, updateFormOpen]);
   

  return (
    <>
      <div id="App" className="bg-[#F5F5F5] min-h-screen">
        {!(addFormOpen || deleteFormOpen) && (
          <AddReviewButton setFormOpen={setAddFormOpen} />
        )}
        {addFormOpen && <AddReviewForm setAddFormOpen={setAddFormOpen} />}
        {deleteFormOpen && (
          <DeleteForm
            setDeleteFormOpen={setDeleteFormOpen}
            id={deleteId}
            setDeleteId={setDeleteId}
          />
        )}
        <Header />
        <FeedbackList setDeleteId={setDeleteId} />
      </div>
      <UpdateForm setUpdateFormOpen={setUpdateFormOpen}
   />


    </>
  );
}

export default App;
