import { useEffect, useState } from "react";
import { useFetchCardData } from "../../hooks";
import { CardShimmer } from "../../shimmers";
import { debounce, memeURL } from "../../utils";

import "../../styles/_card.scss";

const Card = () => {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    error,
    payload: cardData,
  } = useFetchCardData(`${memeURL}/gimme/40`, page, "GET");

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const debouncedScroll = debounce(handleScroll, 300);
    window.addEventListener("scroll", debouncedScroll);

    return (): void => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  if (isLoading && page === 1) return <CardShimmer />;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <div className="cards">
        {cardData?.map((meme, index) => (
          <div className="card" key={index}>
            <img
              className="card_image"
              src={meme.url}
              alt="meme related images"
            />
            <p className="card_text">{meme.title.slice(1, 40)}</p>
          </div>
        ))}
      </div>
      {isLoading && <CardShimmer />}
    </>
  );
};

export default Card;
