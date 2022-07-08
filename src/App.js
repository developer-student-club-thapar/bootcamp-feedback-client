import AddReviewButton from "./Components/AddReviewButton";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div id="App" className="bg-[#F5F5F5]">
        <Header />
        <FeedbackList />
        <AddReviewButton />
      </div>
    </>
  );
}

export default App;
