import { useEffect } from "react";
import { useState } from "react";
import AddReviewButton from "./Components/AddReviewButton";
import AddReviewForm from "./Components/AddReviewForm";
import DeleteForm from "./Components/DeleteForm";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [deleteFormOpen, setDeleteFormOpen] = useState(false);
  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [formOpen]);
  return (
    <>
      <div id="App" className="bg-[#F5F5F5]">
        {!formOpen && <AddReviewButton setFormOpen={setFormOpen} />}
        {formOpen && <AddReviewForm setAddFormOpen={setFormOpen} />}
        {deleteFormOpen && <DeleteForm setDeleteFormOpen={setDeleteFormOpen} />}
        <Header />
        <FeedbackList />
      </div>
    </>
  );
}

export default App;
