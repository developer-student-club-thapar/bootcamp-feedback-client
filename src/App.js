import { useEffect } from "react";
import { useState } from "react";
import AddReviewButton from "./Components/AddReviewButton";
import AddReviewForm from "./Components/AddReviewForm";
import DeleteForm from "./Components/DeleteForm";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import Events from "./Components/Events";

function App() {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [deleteFormOpen, setDeleteFormOpen] = useState(false);
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
  }, [addFormOpen, deleteFormOpen, deleteId]);

  const [event, setEvent] = useState("ideas");

  return (
    <>
      <div id="App" className="bg-[#F5F5F5] min-h-screen">
        {!(addFormOpen || deleteFormOpen) && (
          <AddReviewButton setFormOpen={setAddFormOpen} />
        )}
        {addFormOpen && (
          <AddReviewForm setAddFormOpen={setAddFormOpen} currentEvent={event} />
        )}
        {deleteFormOpen && (
          <DeleteForm
            setDeleteFormOpen={setDeleteFormOpen}
            id={deleteId}
            setDeleteId={setDeleteId}
          />
        )}
        <Header />
        <Events setEvent={setEvent} event={event} />
        <FeedbackList setDeleteId={setDeleteId} event={event} />
      </div>
    </>
  );
}

export default App;
