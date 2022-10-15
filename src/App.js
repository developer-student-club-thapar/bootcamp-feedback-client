import { useEffect } from "react";
import { useState } from "react";
import AddReviewButton from "./Components/AddReviewButton";
import AddReviewForm from "./Components/AddReviewForm";
import DeleteForm from "./Components/DeleteForm";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import Events from "./Components/Events";
import axios from "axios";

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

  //get all events from an api
  const [allEvents, setAllEvents] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("https://api.dsctiet.com/api/events/");
      console.log(res.data);
      setAllData(res.data);
    };
    data();
  }, []);

  useEffect(() => {
    const arr = allData.slice(allEvents.length, allData.length) || [];
    console.log(arr);
    arr.forEach((element) => {
      setAllEvents((allEvents) => [...allEvents, element.title]);
    });
  }, [allData]);

  return (
    <>
      <div id="App" className="bg-[#F5F5F5] min-h-screen">
        {!(addFormOpen || deleteFormOpen) && (
          <AddReviewButton setFormOpen={setAddFormOpen} event={event} />
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
        <Events setEvent={setEvent} event={event} allEvents={allEvents} />
        <FeedbackList setDeleteId={setDeleteId} event={event} />
      </div>
    </>
  );
}

export default App;
