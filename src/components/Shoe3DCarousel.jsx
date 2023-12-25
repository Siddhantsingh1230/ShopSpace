import { useState } from "react";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";
import s5 from "../assets/images/s5.png";

const Shoes3DCarousel = () => {
  const shoeImages = [s1, s2, s3, s4, s5];
  const [classNames, setClassNames] = useState([
    "item-1",
    "item-2",
    "item-3",
    "item-4",
    "item-5",
  ]);
  const [selectedIdx, setSelectedIdx] = useState(1);

  const rotateLeft = (arr) => {
    const [first, ...rest] = arr;
    return [...rest, first];
  };

  // Rotate the array to the right by one position
  const rotateRight = (arr) => {
    const last = arr[arr.length - 1];
    const rest = arr.slice(0, arr.length - 1);
    return [last, ...rest];
  };

  const changeSelectedItemOnClick = (idx) => {
    let selecteditem = idx;

    if (selecteditem === 5) {
      setClassNames(rotateRight(classNames));
      setSelectedIdx((prev) => {
        if (prev == 1) {
          return 5;
        } else {
          return prev - 1;
        }
      });
    }
    if (selecteditem === 2) {
      setClassNames(rotateLeft(classNames));
      setSelectedIdx((prev) => {
        if (prev == 5) {
          return 1;
        } else {
          return prev + 1;
        }
      });
    }
  };

  const itemClick = (className) => {
    const index = parseInt(className.split("-")[1], 10);
    changeSelectedItemOnClick(index);
  };

  return (
    <>
      <div className="shoes-carousel-container">
        <ul className="shoes-carousel-items">
          {shoeImages.map((src, idx) => {
            return (
              <li key={idx} className={classNames[idx]}>
                <img
                  onClick={() => itemClick(classNames[idx])}
                  src={src}
                  alt="shoe-images"
                />
              </li>
            );
          })}
        </ul>
        <div className="shoes-carousel-navigation">
          <button
            className="shoes-carousel-nav prev"
            onClick={() => {
              changeSelectedItemOnClick(5);
            }}
          ></button>
          <button
            className="shoes-carousel-nav next"
            onClick={() => {
              changeSelectedItemOnClick(2);
            }}
          ></button>
        </div>
        <div className="shoes-carousel-navigation-dots">
          <ul>
            {shoeImages.map((_, idx) => {
              return (
                <li
                  key={idx}
                  className={idx + 1 === selectedIdx ? "active" : ""}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Shoes3DCarousel;
