import { FaGithub, FaTwitterSquare, FaLinkedin, FaTrash } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const FeedbackItem = ({ feedback, setDeleteId }) => {
  return (
    <div
      className={`p-4 flex flex-col rounded-xl justify-between ${feedback.color}`}
    >
      <p className="mb-8 text-sm">{feedback.message}</p>
      <div>
        <span className="text-sm font-semibold opacity-50">
          {feedback.name}
        </span>
        <div className="mt-1 flex flex-row justify-start items-center -mx-1 ">
          {feedback.github
            ? feedback.github.length && (
                <a href={feedback.github}>
                  <FaGithub
                    size={20}
                    className="mx-1 opacity-50 hover:opacity-80 cursor-pointer"
                  />
                </a>
              )
            : ""}
          {feedback.linkedin
            ? feedback.linkedin.length && (
                <a href={feedback.linkedin}>
                  <FaLinkedin
                    size={20}
                    className="mx-1 opacity-50 hover:opacity-80 cursor-pointer"
                  />
                </a>
              )
            : ""}

          {feedback.twitter
            ? feedback.twitter.length && (
                <a href={feedback.twitter}>
                  <FaTwitterSquare
                    size={20}
                    className="mx-1 opacity-50 hover:opacity-80 cursor-pointer"
                  />
                </a>
              )
            : ""}
          {feedback.insta
            ? feedback.insta.length && (
                <a href={feedback.instagram}>
                  <RiInstagramFill
                    size={20}
                    className="mx-1 opacity-50 hover:opacity-80 cursor-pointer"
                  />
                </a>
              )
            : ""}
          <FaTrash
            className="ml-auto mr-2 opacity-50 hover:opacity-80 cursor-pointer"
            onClick={() => {
              setDeleteId(feedback._id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
