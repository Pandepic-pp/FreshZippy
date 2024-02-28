import React from "react";

const Card = ({ shopDetail }) => {
  const { shopName, shopImg, options } = shopDetail;
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          className="card-img-top"
          src={shopImg}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{shopName}</h5>
          <p className="card-text">{`${options[0]}/${options[1]}`}</p>
          <div className="container w-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
