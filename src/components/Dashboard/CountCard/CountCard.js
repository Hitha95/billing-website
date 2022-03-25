import "./count-card.css";
const CountCards = ({ text, count, image }) => {
  return (
    <div>
      <image />
      <p>{text}</p>
      <p>{count}</p>
    </div>
  );
};

export default CountCards;
