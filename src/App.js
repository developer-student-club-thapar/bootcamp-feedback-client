import { useEffect } from "react";
import { useState } from "react";
import AddReviewButton from "./Components/AddReviewButton";
import FeedbackList from "./Components/FeedbackList";
import Form from "./Components/Form";
import Header from "./Components/Header";

function App() {
  const [formOpen, setFormOpen] = useState(false);
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
        {formOpen && <Form setFormOpen={setFormOpen} />}
        <Header />
        <FeedbackList />
      </div>
    </>
  );
}

export default App;
