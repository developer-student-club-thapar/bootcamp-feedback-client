const FeedbackItem = ({ feedback }) => {
  return (
    <div
      className={`p-4 flex flex-col rounded-xl justify-between ${feedback.color}`}
    >
      <p className="mb-8 text-sm">{feedback.message}</p>
      <span className="text-sm font-semibold opacity-50">{feedback.name}</span>
    </div>
  );
};

export default FeedbackItem;
