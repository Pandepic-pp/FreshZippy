import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          className="card-img-top"
          src="https://media.istockphoto.com/id/831053534/photo/ingredients-for-carrot-soup.jpg?s=1024x1024&w=is&k=20&c=9t8tD6cqsSaGzDu8MDNFxQsjUT4x8B6rAu7Un0jn9jw="
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is some important text.</p>
          <div className="container w-100">
            {/* <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={(i + 1) * 0.5}>
                    {(i + 1) * 0.5} kg
                  </option>
                );
              })}
            </select> */}
            <input
              type="number"
              step=".5"
              className="m-2 h-100 bg-success rounded"
              placeholder="Enter amount..."
              style={{ color: "white" }}
            />

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
