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
  const span = ["", "md:col-span-2"];
  let color;
  return (
    <div className="p-12 grid md:grid-cols-4 grid-cols-1 gap-4">
      {Feedbacks.map((feedback, index) => {
        color =
          colors[Math.floor(Math.random() * colors.length)] +
          " " +
          span[Math.floor(Math.random() * span.length)];

        feedback.color = color;
        return <FeedbackItem feedback={feedback} />;
      })}
    </div>
  );
};

export default FeedbackList;
