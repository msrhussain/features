import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../../styles/_carousel.scss";
import { carouselImages } from "../../utils";

const ImageCarousel = () => {
  const [index, setIndex] = useState<number>(0);
  const carouselImageLength = carouselImages.length;

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? carouselImageLength - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === carouselImageLength - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="carousel">
      <div
        className="carousel_inner"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {carouselImages?.map((img) => (
          <div className="carousel_inner_item" key={img.alt}>
            <img
              className="carousel_inner_item_image"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
      <button className="carousel_control prev" onClick={prevSlide}>
        <FontAwesomeIcon icon={faLessThan} />
      </button>
      <button className="carousel_control next" onClick={nextSlide}>
        <FontAwesomeIcon icon={faGreaterThan} />
      </button>
    </div>
  );
};

export default ImageCarousel;
