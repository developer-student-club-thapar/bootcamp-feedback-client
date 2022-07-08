import FeedbackItem from "./FeedbackItem";

const Feedbacks = [
  {
    name: "Yashvardhan Arora",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto aliquid ratione fuga quo, accusamus sapiente fugit. Blanditiis ut quisquam maiores enim aperiam tempora quae nostrum! Culpa hic aut voluptatum ea eveniet incidunt blanditiis quibusdam veniam ducimus doloribus, praesentium rerum, beatae magni perspiciatis? Hic rem voluptatibus eveniet harum ut animi.",
    github: "https://github.com/yash22arora",
    twitter: "https://twitter.com/yashvardhanarora",
    instagram: "https://www.instagram.com/yashvardhanarora/",
  },
  {
    name: "Yashvardhan Arora",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto aliquid ratione fuga quo, accusamus sapiente fugit. Blanditiis ut quisquam maiores enim aperiam tempora quae nostrum! Culpa hic aut voluptatum ea eveniet incidunt blanditiis quibusdam veniam ducimus doloribus, praesentium rerum, beatae magni perspiciatis? Hic rem voluptatibus eveniet harum ut animi.",
    github: "https://github.com/yash22arora",
    twitter: "https://twitter.com/yashvardhanarora",
    instagram: "https://www.instagram.com/yashvardhanarora/",
  },
  {
    name: "Yashvardhan Arora",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto aliquid ratione fuga quo, accusamus sapiente fugit. Blanditiis ut quisquam maiores enim aperiam tempora quae nostrum! Culpa hic aut voluptatum ea eveniet incidunt blanditiis quibusdam veniam ducimus doloribus, praesentium rerum, beatae magni perspiciatis? Hic rem voluptatibus eveniet harum ut animi.",
    github: "https://github.com/yash22arora",
    twitter: "https://twitter.com/yashvardhanarora",
    instagram: "https://www.instagram.com/yashvardhanarora/",
  },
  {
    name: "Yashvardhan Arora",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto aliquid ratione fuga quo, accusamus sapiente fugit. Blanditiis ut quisquam maiores enim aperiam tempora quae nostrum! Culpa hic aut voluptatum ea eveniet incidunt blanditiis quibusdam veniam ducimus doloribus, praesentium rerum, beatae magni perspiciatis? Hic rem voluptatibus eveniet harum ut animi.",
    github: "https://github.com/yash22arora",
    twitter: "https://twitter.com/yashvardhanarora",
    instagram: "https://www.instagram.com/yashvardhanarora/",
  },
  {
    name: "Yashvardhan Arora",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto aliquid ratione fuga quo, accusamus sapiente fugit. Blanditiis ut quisquam maiores enim aperiam tempora quae nostrum! Culpa hic aut voluptatum ea eveniet incidunt blanditiis quibusdam veniam ducimus doloribus, praesentium rerum, beatae magni perspiciatis? Hic rem voluptatibus eveniet harum ut animi.",
    github: "https://github.com/yash22arora",
    twitter: "https://twitter.com/yashvardhanarora",
    instagram: "https://www.instagram.com/yashvardhanarora/",
  },
  {
    name: "Yashvardhan Arora",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto aliquid ratione fuga quo, accusamus sapiente fugit. Blanditiis ut quisquam maiores enim aperiam tempora quae nostrum! Culpa hic aut voluptatum ea eveniet incidunt blanditiis quibusdam veniam ducimus doloribus, praesentium rerum, beatae magni perspiciatis? Hic rem voluptatibus eveniet harum ut animi.",
    github: "https://github.com/yash22arora",
    twitter: "https://twitter.com/yashvardhanarora",
    instagram: "https://www.instagram.com/yashvardhanarora/",
  },
];

const FeedbackList = ({ feedbacks }) => {
  const colors = ["purple", "yellow", "green", "pink"];
  const spanList = ["", "md:col-span-2"];
  let color,
    span,
    countPerRow = 0;
  return (
    <div className="p-12 grid md:grid-cols-4 grid-cols-1 gap-4">
      {Feedbacks.map((feedback, index) => {
        countPerRow % 4 > 2
          ? (span = "")
          : (span = spanList[Math.floor(Math.random() * spanList.length)]);
        color = colors[Math.floor(Math.random() * colors.length)] + " " + span;

        countPerRow = span === "" ? countPerRow + 1 : countPerRow + 2;
        feedback.color = color;
        return <FeedbackItem feedback={feedback} />;
      })}
    </div>
  );
};

export default FeedbackList;
