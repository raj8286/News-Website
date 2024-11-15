import React from "react";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card" key={index}>
              <img src={curItem.urlToImage} alt="Card Image" />
              <div className="content">
                <a
                  className="title"
                  onClick={() => window.open(curItem.url)}
                >
                  {curItem.title}
                </a>
                <div className="buttonContainer">
                  <button onClick={() => window.open(curItem.url)}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;

