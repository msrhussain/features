import "../styles/_cardShimmer.scss";

const CardShimmer = () => {
  return (
    <div className="shimmer_cards">
      {Array.from({ length: 10 }, (_, index) => (
        <div className="shimmer_card" key={index}>
          <div className="shimmer_card_image"></div>
          <p className="shimmer_card_text"></p>
        </div>
      ))}
    </div>
  );
};

export default CardShimmer;
